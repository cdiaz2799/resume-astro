import { DatadogIcon } from "@/components/icons/datadog";
import { IconDeviconPlainAnsible } from "@/components/icons/ansible";
import * as React from "react";
import { IconDeviconPlainGooglecloud } from "@/components/icons/gcp";
import { IconDeviconPlainAzure } from "@/components/icons/azure";
import { IconMdiAws } from "@/components/icons/aws";
import { IconMdiDigitalOcean } from "@/components/icons/digitalocean";
import { IconDeviconPlainKubernetes } from "@/components/icons/kubernetes";
import { IconDeviconPlainDocker } from "@/components/icons/docker";
import { IconDeviconPlainOkta } from "@/components/icons/okta";
import { IconMdiBriefcaseAccount } from "@/components/icons/briefcaseaccount";
import { IconDeviconPlainTerraform } from "@/components/icons/terraform";
import { IconDeviconPlainPulumi } from "@/components/icons/pulumi";
import { IconDeviconPlainPython } from "@/components/icons/python";
import { IconMdiBash } from "@/components/icons/bash";
import { IconDeviconPlainPowershell } from "@/components/icons/powershell";
import { IconDeviconPlainTypescript } from "@/components/icons/typescript";
import { IconDeviconPlainGithubactions } from "@/components/icons/github-actions";
import { IconDeviconPlainGitlab } from "@/components/icons/gitlab";
import { IconDeviconPlainGrafana } from "@/components/icons/grafana";
import { IconDeviconPlainPrometheusWordmark } from "@/components/icons/prometheus";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

// Define the interface for the skillIconMap
interface SkillIconMap {
  [skill: string]: IconComponent | null;
}

export const skillIconMap: SkillIconMap = {
  Datadog: DatadogIcon,
  Ansible: IconDeviconPlainAnsible,
  "Google Cloud Platform (GCP)": IconDeviconPlainGooglecloud,
  "Microsoft Azure": IconDeviconPlainAzure,
  "Amazon Web Services (AWS)": IconMdiAws,
  DigitalOcean: IconMdiDigitalOcean,
  Kubernetes: IconDeviconPlainKubernetes,
  Docker: IconDeviconPlainDocker,
  Okta: IconDeviconPlainOkta,
  "Active Directory": IconMdiBriefcaseAccount,
  Terraform: IconDeviconPlainTerraform,
  Pulumi: IconDeviconPlainPulumi,
  Python: IconDeviconPlainPython,
  Bash: IconMdiBash,
  Shell: IconMdiBash,
  "Bash/Shell": IconMdiBash,
  Powershell: IconDeviconPlainPowershell,
  TypeScript: IconDeviconPlainTypescript,
  "GitHub Actions": IconDeviconPlainGithubactions,
  "Gitlab CI/CD": IconDeviconPlainGitlab,
  Grafana: IconDeviconPlainGrafana,
  Prometheus: IconDeviconPlainPrometheusWordmark,
};

export const getIcon = (skill: string): IconComponent | null => {
  return skillIconMap[skill] || null;
};
