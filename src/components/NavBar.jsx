import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";

const iconMap = {
  GitHubLogoIcon: GitHubLogoIcon,
  LinkedInLogoIcon: LinkedInLogoIcon,
};

export default function NavBar({ socials }) {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm pb-5">
      <Navbar
        shouldHideOnScroll
        className="mt-4 relative max-w-2xl w-full border border-zinc-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-zinc-900 dark:border-zinc-700"
      >
        <NavbarBrand>
          <Link href="/" color="foreground">
            <span>Christian Diaz</span>
          </Link>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>
            <Link href="/" color="foreground">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/resume.pdf"
              color="foreground"
              download="Christian Diaz.pdf"
              showAnchorIcon
              anchorIcon={<DownloadIcon />}
            >
              Resume
            </Link>
          </NavbarItem>
        </NavbarContent>
        {socials && (
          <NavbarContent justify="end">
            {socials.map((s) => {
              const IconComponent = iconMap[s.data.icon];
              return (
                <NavbarItem id={s.id}>
                  <Link href={s.data.link} isExternal aria-label={s.data.name}>
                    <title>{s.data.name}</title>
                    <IconComponent />
                  </Link>
                </NavbarItem>
              );
            })}
          </NavbarContent>
        )}
      </Navbar>
    </header>
  );
}
