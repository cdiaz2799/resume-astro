import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Link,
} from "@nextui-org/react";

export const CertDetailCard = ({ title, issuer, summary, skills, link }) => {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {issuer}
            </h4>
            <h5 className="text-small tracking-tight text-default-500">
              {title}
            </h5>
          </div>
        </div>
        <Button
          radius="full"
          size="sm"
          as={Link}
          href={link}
          isExternal={true}
          showAnchorIcon={true}
        >
          Validate
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px text-default-500">{summary}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-4">
          <p className="font-semibold text-default-600 text-small">Skills:</p>
          <div className="flex gap-2 overflow-x-auto">
            {skills.map((skill, index) => (
              <Chip key={index} size="sm">
                {skill}
              </Chip>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
