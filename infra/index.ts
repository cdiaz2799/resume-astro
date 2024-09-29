import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import * as synced_folder from "@pulumi/synced-folder";
import * as github from "@pulumi/github";

// Import the program's configuration settings.
const config = new pulumi.Config();
const repo_name = config.get("repo_name") || "resume";
const visibility = config.get("repo_visibility") || "public";
const url = config.require("url");

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

export const repositoryCloneUrl = repo.gitCloneUrl;
export const repositorySSHUrl = repo.sshCloneUrl;
