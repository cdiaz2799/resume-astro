import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { CertDetailCard } from "@/components/CertDetailCard";

export default function CertCard({
  title,
  logo,
  issuer,
  skills,
  body,
  validationLink,
}) {
  return (
    <Popover showArrow placement="top">
      <PopoverTrigger>
        <Card shadow="sm" isPressable as="button">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={title}
              className="w-full object-contain h-[140px]"
              src={logo}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{title}</b>
            <p className="text-default-500">{issuer}</p>
          </CardFooter>
        </Card>
      </PopoverTrigger>
      <PopoverContent>
        <CertDetailCard
          title={title}
          issuer={issuer}
          summary={body}
          skills={skills}
          link={validationLink}
        />
      </PopoverContent>
    </Popover>
  );
}
