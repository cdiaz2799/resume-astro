import * as pulumi from "@pulumi/pulumi";
import * as cloudflare from "@pulumi/cloudflare";
import * as github from "@pulumi/github";

// Import the program's configuration settings.
const config = new pulumi.Config();
const org = pulumi.getOrganization();
const project = pulumi.getProject();
const stack = pulumi.getStack();

const repo_name = config.get("repo_name") || "resume";
const visibility = config.get("repo_visibility") || "public";

const url = config.require("url");
const cloudflareConfig = new pulumi.Config("cloudflareConfig");
const cloudflareAccountID = cloudflareConfig.require("accountID");
const zoneID = cloudflare
  .getZone({ name: "cdiaz.cloud", accountId: cloudflareAccountID })
  .then((zone) => zone.id);

// Setup Repository
const repo = new github.Repository("resume-astro", {
  name: repo_name,
  description: "Resume built in Astro, hosted in Cloudflare Pages",
  homepageUrl: url,
  topics: ["cloud-resume", "astro", "cloudflare-pages", "pulumi"],
  // Repo Features
  visibility: visibility,
  hasWiki: false,
  hasDiscussions: false,
  hasDownloads: false,
  hasIssues: false,
  hasProjects: false,
  vulnerabilityAlerts: true,
  securityAndAnalysis: {
    secretScanning: {
      status: "enabled",
    },
    secretScanningPushProtection: {
      status: "enabled",
    },
  },
});

const defaultBranch = new github.BranchDefault(
  "default-branch",
  {
    repository: repo.name,
    branch: "main",
  },
  { parent: repo }
);

const dependabot = new github.RepositoryDependabotSecurityUpdates(
  "repo-dependabot",
  {
    repository: repo.name,
    enabled: true,
  },
  { parent: repo }
);

const environment = new github.RepositoryEnvironment(
  "repo-environment",
  {
    repository: repo.name,
    environment: "cloudflare-pages",
    preventSelfReview: false,
  },
  { parent: repo }
);

const environmentDeployment = new github.RepositoryDeploymentBranchPolicy(
  "repo-deployment-branch-policy",
  {
    repository: repo.name,
    environmentName: environment.environment,
    name: defaultBranch.branch,
  },
  { parent: repo }
);
export const repositoryCloneUrl = repo.gitCloneUrl;
export const repositorySSHUrl = repo.sshCloneUrl;

// Setup Cloudflare Pages
const pages = new cloudflare.PagesProject("cloudflare-pages", {
  accountId: cloudflareAccountID,
  name: "resume",
  productionBranch: defaultBranch.branch,
  source: {
    type: "github",
    config: {
      owner: repo.fullName.apply((fullName) => fullName.split("/")[0]),
      repoName: repo.name,
      productionBranch: defaultBranch.branch,
      previewBranchExcludes: [defaultBranch.branch],
      deploymentsEnabled: true,
      prCommentsEnabled: true,
    },
  },
  buildConfig: {
    buildCommand: "npm run build",
    destinationDir: "dist",
    rootDir: "./website",
  },
  deploymentConfigs: {
    production: {
      placement: {
        mode: "smart",
      },
    },
  },
});

export const pagesDomains = pages.domains;
export const pagesSumdomain = pages.subdomain;

// Setup Cloudflare Pages DNS
const pagesDomain = new cloudflare.PagesDomain(
  "cloudflare-pages-domain",
  {
    accountId: cloudflareAccountID,
    projectName: pages.name,
    domain: url,
  },
  { parent: pages, deleteBeforeReplace: true }
);
export const pagesDomainStatus = pagesDomain.status;

const pagesDNS = new cloudflare.Record("cloudflare-pages-dns", {
  name: url,
  content: pagesSumdomain,
  type: "CNAME",
  zoneId: zoneID,
  allowOverwrite: true,
  proxied: true,
  comment: `Managed by Pulumi: ${org}/${project}/${stack}`,
});
export const dnsFQDN = pagesDNS.hostname;
