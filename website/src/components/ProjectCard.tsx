import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import RepoChip from "./ui/repo-chip";
interface Props {
  title: string;
  slug: string;
  subtitle?: string;
  repo?: string;
  description: string;
  tags?: string[];
  image?: string;
}

export default function ProjectCard({
  title,
  slug,
  subtitle,
  repo,
  description,
  tags,
  image,
}: Props) {
  return (
    <Card
      className="max-w-[400px]"
      // @ts-ignore
      isPressable={true}
      as={Link}
      href={"projects/" + slug}
    >
      {image && (
        <Image
          alt={title + " Screenshot"}
          radius="sm"
          src={image}
          className="object-cover h-80"
        />
      )}
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          {subtitle && (
            <p className="text-small text-default-500">{subtitle}</p>
          )}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <Divider />
      <CardFooter>{repo && <RepoChip link={repo} />}</CardFooter>
    </Card>
  );
}
