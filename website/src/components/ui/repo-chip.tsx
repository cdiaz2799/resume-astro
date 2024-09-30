import { Chip, Link } from "@nextui-org/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
interface Props {
  link: string;
}

export default function RepoChip({ link }: Props) {
  return (
    <Chip
      // @ts-ignore
      variant="shadow"
      color="primary"
      startContent={<GitHubLogoIcon />}
      as={Link}
      isExternal={true}
      href={link}
    >
      View on GitHub
    </Chip>
  );
}
