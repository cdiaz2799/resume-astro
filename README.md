<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="20%" alt="RESUME-ASTRO-logo">
</p>
<p align="center">
    <h1 align="center">RESUME-ASTRO</h1>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/cdiaz2799/resume-astro?style=for-the-badge&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/cdiaz2799/resume-astro?style=for-the-badge&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/cdiaz2799/resume-astro?style=for-the-badge&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/cdiaz2799/resume-astro?style=for-the-badge&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Astro-FF5D01.svg?style=for-the-badge&logo=Astro&logoColor=white" alt="Astro">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=for-the-badge&logo=YAML&logoColor=white" alt="YAML">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

#####  Table of Contents

- [ Overview](#-overview)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
    - [ Prerequisites](#-prerequisites)
    - [ Installation](#-installation)
    - [ Usage](#-usage)

---

##  Overview

The Resume-Astro project is a digital resume that showcases a users bio, work experience, educational background, skill sets, and certifications in an interactive React-based website. It divides its functionality into infrastructure and website development.
The infrastructure is managed by Pulumi, writted in TypeScript, while the website is built using the Astro.js framework, offering enhanced UX with dynamic, component-based structure and modern design elements. Additional frameworks used include [NextUI](https://nextui.org/) and [Magic UI](https://magicui.design/).

---

##  Repository Structure

```sh
└── resume-astro/
    ├── .github
    │   └── dependabot.yml
    ├── infra
    │   ├── .gitignore
    │   ├── Pulumi.prod.yaml
    │   ├── Pulumi.yaml
    │   ├── index.ts
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── repo.ts
    │   └── tsconfig.json
    └── website
        ├── .gitignore
        ├── .prettierrc.mjs
        ├── .run
        ├── README.md
        ├── astro.config.mjs
        ├── components.json
        ├── package-lock.json
        ├── package.json
        ├── public
        ├── src
        ├── tailwind.config.mjs
        └── tsconfig.json
```

---

##  Modules

<details closed><summary>infra</summary>

| File | Summary |
| --- | --- |
| [package.json](https://github.com/cdiaz2799/resume-astro/blob/main/infra/package.json) | Defines development and production dependencies for the resume-astro infrastructure, specifying required packages for cloud-based management and interactions via Pulumi, typescript for static type-checking, and Node.js typescript definitions for development environment compatibility. |
| [Pulumi.yaml](https://github.com/cdiaz2799/resume-astro/blob/main/infra/Pulumi.yaml) | The Pulumi.yaml within the infra directory centralizes configuration settings for the Pulumi, a popular Infrastructure as Code (IaC) tool. By designating the runtime as Node.js, it sets up the environment for the resume.cdiaz.cloud project, laying groundwork for infrastructure deployments. |
| [tsconfig.json](https://github.com/cdiaz2799/resume-astro/blob/main/infra/tsconfig.json) | Ensures robust and reliable TypeScript compilation for the application logic of the resume-astro project in the infra directory. It mandates strict typing, ES2020 compatibility, Node module resolution, and enforcement of best practices like consistent file naming and explicit return statements. |
| [repo.ts](https://github.com/cdiaz2799/resume-astro/blob/main/infra/repo.ts) | Repo.ts in the infra directory enables infrastructure management, playing a pivotal role in the setup, configuration, and deployment of the resume-astro project. It is integral to the repository's architecture by defining the necessities for a production-ready application environment. |
| [package-lock.json](https://github.com/cdiaz2799/resume-astro/blob/main/infra/package-lock.json) | Provide a resume-based website and handle its infrastructure. The repository is primarily segregated into two components: infra' and website.The infra component manages the infrastructure of the application. It uses Pulumi, a modern infrastructure as code (IaC) platform, to provision and manage cloud infrastructure resources. The index.ts and repo.ts are crucial here, orchestrating configuration and deployment tasks, which are declared in the Pulumi.yaml and Pulumi.prod.yaml files.On the other hand, the website component focuses on executing the frontend of the project. It utilizes Astro, a front-end framework, to build the website. Important files in this section include astro.config.mjs, which contains Astro-specific configuration settings, components.json for defining reusable components, and the src directory, hosting the source code for the website's pages. Overall, this repository effectively separates concerns between application infrastructure and website development, allowing for a streamlined workflow and simplified maintenance. |
| [index.ts](https://github.com/cdiaz2799/resume-astro/blob/main/infra/index.ts) | Infra/index.ts establishes a GitHub repository and integrates it with Cloudflare services for website hosting and DNS management. It configures repository features, sets up Cloudflare Pages for continuous deployment from the repository, and creates DNS records for the deployed website on Cloudflare. |
| [Pulumi.prod.yaml](https://github.com/cdiaz2799/resume-astro/blob/main/infra/Pulumi.prod.yaml) | Defines configuration settings specific for the production environment in the resume-astro repository. It outlines destination URL, repository name, and the associated environment for deploying a personal resume on Google Cloud Platform with Cloudflare. |

</details>

<details closed><summary>.github</summary>

| File | Summary |
| --- | --- |
| [dependabot.yml](https://github.com/cdiaz2799/resume-astro/blob/main/.github/dependabot.yml) | Dependabot.yml in the.github directory orchestrates weekly automated checks for npm package updates, ensuring that the resume-astro repository stays current with its dependencies. This contributes to maintaining code quality and security within the project. |

</details>

<details closed><summary>website</summary>

| File | Summary |
| --- | --- |
| [components.json](https://github.com/cdiaz2799/resume-astro/blob/main/website/components.json) | Components.json configures the websites visual styling and path aliases. It sets the design style, enables TypeScript usage, configures Tailwind CSS with a base color and CSS variables, and defines path aliases for streamlined imports. Notably, it supports the new-york' style from the UI schema. |
| [.prettierrc.mjs](https://github.com/cdiaz2799/resume-astro/blob/main/website/.prettierrc.mjs) | Enhances code formatting in the website directory by utilizing the prettier-plugin-astro. Specifically targets.astro files and applies the astro parser for clean, organized and error-free codes. This contributes to more efficient and effective collaboration within the open-source project. |
| [package.json](https://github.com/cdiaz2799/resume-astro/blob/main/website/package.json) | Website/package.json serves as the roadmap detailing the mandatory dependencies and scripts for the web application in the resume-astro repository. It configures critical operations like development, build, and preview processes, while managing the versioning of the various JavaScript libraries used in the project. |
| [tsconfig.json](https://github.com/cdiaz2799/resume-astro/blob/main/website/tsconfig.json) | Defines TypeScript configuration settings for the website section of the resume-astro project. It sets fundamental compiler options, determining how JSX and imports are handled, and establishes project-specific paths for easier module referencing. |
| [package-lock.json](https://github.com/cdiaz2799/resume-astro/blob/main/website/package-lock.json) | The infra' folder and the website folder. The infra folder, judging by its contents and files like Pulumi.prod.yaml, Pulumi.yaml, package.json, and index.ts, seems to provide the infrastructure setup for the project. It likely handles the configuration and deployment of the project in various environments.On the other hand, the website folder appears to hold the code for the actual website. Files like astro.config.mjs suggest that this project is built using the Astro.js framework. The README.md might be providing essential information about the project, its structure, and how to run or contribute to it.In essence, this structure underscores a clear separation of concerns, with the infrastructure and actual website logic distinctly isolated. This approach allows for scalable and maintainable development, where infrastructure-related changes do not directly affect the websites code and vice versa. |
| [astro.config.mjs](https://github.com/cdiaz2799/resume-astro/blob/main/website/astro.config.mjs) | Astro.config.mjs configures the website sub-module in the resume-astro repository. It defines the site's URL, integrates react, tailwind, sitemap, and astro-page-insight plugins, and sets the base styles for tailwind to false. |
| [tailwind.config.mjs](https://github.com/cdiaz2799/resume-astro/blob/main/website/tailwind.config.mjs) | Tailwind.config.mjs configures Tailwind CSS for the website, specifying the content files, theme extensions, animations, and plugins. It uses a dark theme by default and supports animations from the tailwindcss-animate package. This configuration unit profoundly impacts the appearance and user interaction on the site. |

</details>

<details closed><summary>website.src</summary>

| File | Summary |
| --- | --- |
| [env.d.ts](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/env.d.ts) | Expands the typing environment for the website module with external references, enhancing TypeScripts understanding of custom definitions present in the Astro types file, thereby reinforcing type safety across the project. |
| [globals.css](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/globals.css) | Defines the base, component, and utility styles for the resume-astro web application. It sets global CSS variables for themes, such as background, foreground, card, primary, secondary, and border. In addition, it structures the body styling with layered CSS approach. |

</details>

<details closed><summary>website.src.pages</summary>

| File | Summary |
| --- | --- |
| [index.astro](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/pages/index.astro) | Architects a digital resume for user Christian Diaz. The code dynamically generates the resume's sections (Introduction, About, Work Experience, Education, Certifications, Skills) using modular components and content stored in collections, sorted as necessary. It also manages visual details like fade effects. |
| [robots.txt.ts](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/pages/robots.txt.ts) | Generates a `robots.txt` file for the website, defining rules for web crawlers and indicating the location of the sitemap. This contributes to SEO optimization by guiding search engines towards desired site content. |

</details>

<details closed><summary>website.src.lib</summary>

| File | Summary |
| --- | --- |
| [utils.ts](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/lib/utils.ts) | Leverages the power of tailwind-merge and clsx libraries for class composition in the resume-astro project's website component. Facilitates cleaner and efficient style management by delegating class merging and toggling to a dedicated function. |

</details>

<details closed><summary>website.src.layouts</summary>

| File | Summary |
| --- | --- |
| [Base.astro](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/layouts/Base.astro) | Provides the base layout for the website module of the resume-astro repository. It imports the NavBar component, fetches social media links, defines global styles, and sets up fundamental HTML structure. It also configures sitemap linking and supports dynamic page titling. |

</details>

<details closed><summary>website.src.components</summary>

| File | Summary |
| --- | --- |
| [Education.jsx](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/Education.jsx) | EducationCards showcases individual users educational backgrounds in an accordion-style interface. Leveraging the Next UI library, it dynamically displays school names, majors, and summaries while featuring school logos as avatars. This component enriches the resume-astro' project's user-centric and interactive design. |
| [Intro.astro](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/Intro.astro) | Integrates an interactive introduction component into the `resume-astro` repositorys website. It utilizes imported modules to animate an introductory section, displaying the users name with a waving emoji and rotating titles. The animations occur with a configurable delay to enhance user experience. |
| [ExperienceItem.jsx](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/ExperienceItem.jsx) | ExperienceItem.jsx generates an interactive, accordion-style display of work experiences in the website. This component fetches data like company name, logo, role, and tenure to provide a detailed, visually appealing overview of an individuals professional journey. |
| [About.astro](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/About.astro) | Leverages Astros server-side rendering features to dynamically fetch and present a bio section in the About' part of the resume website. It integrates a blur fade effect for component loading, with delays adjustable via props, enhancing the user experience with smooth visual transitions. |
| [Education.astro](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/Education.astro) | Highlights educational details on the resume-astro website, incorporating visual effects through BlurFade for engaging presentation. Utilizes EducationCards component to display education-specific content while providing customization through input properties like fade_delay and education_items. |
| [Skills.jsx](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/Skills.jsx) | SkillsDisplay within Skills.jsx, situated in the website/src/components directory, renders a visual representation of skills grouped according to their proficiency levels. With tailored color-coding per skill level, it provides a clear and engaging overview of the skill sets in the Astro-based resume website. |
| [Skills.astro](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/Skills.astro) | Generates a dynamic Skills section on the website, fetching and displaying skill data in distinct groups. It employs a BlurFade effect, delaying the appearance of each skill group for enhanced user interaction. Ensures seamless integration within the larger resume-astro repository. |
| [Work.astro](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/Work.astro) | Enriches the resume website with a dynamic Work Experience section, utilizing imported components like BlurFade for animations and Experience to detail each piece of work experience. The level of interactivity and visual delay are tailored using passed properties. |
| [NavBar.jsx](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/NavBar.jsx) | NavBar.jsx is a key component rendering the navigation bar for the website in the resume-astro repository. It features a brand link, home and resume links, and optional social media icons. This component is crucial to user navigation and accessibility across the site, enhancing overall user experience. |
| [CertCard.jsx](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/CertCard.jsx) | CertCard.jsx in the website/src/components folder provides an interactive card interface for displaying certification details. It leverages components from the @nextui-org/react library to create a pressable card with data like issuer, skills, issuance status and provides a detailed view on hover. |
| [Certs.astro](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/Certs.astro) | Generates the Certifications section of the resume website, utilizing a blurred fade-in effect and dynamically loading certification cards from provided data. The module leverages the reusable UI components, BlurFade and CertCard, to establish a responsive and interactive viewing experience. |
| [CertDetailCard.jsx](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/CertDetailCard.jsx) | CertDetailCard.jsx generates a customizable card component that visually represents certification details in the web application. It structures specific information like the title, issuer, summary, skills, issuance date, and a validation link, creating an intuitive and engaging user interface for each certification entry. |

</details>

<details closed><summary>website.src.components.ui</summary>

| File | Summary |
| --- | --- |
| [word-rotate.tsx](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/ui/word-rotate.tsx) | Within the resume-astro repository structure, the word-rotate.tsx interface, located in the website/src/components/ui/ directory, enables dynamic text rotation in the user interface. It manages a list of words, rotates them at a set duration, and applies custom animations using the Framer Motion library. |
| [blur-fade.tsx](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/ui/blur-fade.tsx) | BlurFade in the website/src/components/ui/ directory serves as an animation utility within the resume-astro repository. It employs Framer Motion to provide a blurred fading effect to designated components, with customizable variables such as duration, delay, blur, and more enhancing its adaptation capabilities. |
| [accordion.tsx](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/components/ui/accordion.tsx) | In the broader context of the resume-astro repository, the accordion.tsx under website/src/components/ui provides a collapsible accordion component. It leverages Radix UI primitives to create expandable sections with customizable headers and content, offering a key interactive element for the user interface of the website. |

</details>

<details closed><summary>website.src.content</summary>

| File | Summary |
| --- | --- |
| [config.ts](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/content/config.ts) | Defines content and data collections such as bio, experience, education, certifications, socials, and skills for a resume website. It outlines the schema for each collection, ensuring the structure and validation of the data it holds, contributing to greater ease in managing website content. |

</details>

<details closed><summary>website.src.content.socials</summary>

| File | Summary |
| --- | --- |
| [github.json](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/content/socials/github.json) | Maps the GitHub social element for the resume-astro website, defining the schema, social media name, associated link, and the logo icon to be used. Supports the personalization of website components and linkage configuration. |
| [linkedin.json](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/content/socials/linkedin.json) | Integrates LinkedIn socials into the resume-astro repository, linking to a specific LinkedIn profile and displaying the LinkedIn logo icon. This is defined within the website's source content under socials, adhering to a pre-defined schema located in the.astro directory. |

</details>

<details closed><summary>website.src.content.skills</summary>

| File | Summary |
| --- | --- |
| [skills.yaml](https://github.com/cdiaz2799/resume-astro/blob/main/website/src/content/skills/skills.yaml) | Establishes a detailed specification of professional skills within the resume-focused website. The data dictates the presentation of various proficiencies grouped by categories such as Cloud Infrastructure, Serverless, and CI/CD, enhancing the users qualitative career overview. |

</details>

---

##  Getting Started

###  Prerequisites

**JSON**: `version x.y.z`

###  Installation

Build the project from source:

1. Clone the resume-astro repository:
```sh
❯ git clone https://github.com/cdiaz2799/resume-astro
```

2. Navigate to the project directory:
```sh
❯ cd resume-astro/website
```

3. Install the required dependencies:
```sh
❯ ❯ npm ci
```

###  Usage

To run the project, execute the following command:

```sh
❯ ❯ npm run dev
```
