import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
} from "@nextui-org/react";
import { CertDetailCard } from "@/components/CertDetailCard";

export default function CertCard({ certs }) {
  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
      {certs.map((cert, index) => (
        <Popover showArrow placement="top" id={index}>
          <PopoverTrigger>
            <Card shadow="sm" key={index} isPressable as="button">
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={cert.data.title}
                  className="w-full object-contain h-[140px]"
                  src={cert.data.logo.src}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{cert.data.title}</b>
                <p className="text-default-500">{cert.data.issuer}</p>
              </CardFooter>
            </Card>
          </PopoverTrigger>
          <PopoverContent>
            <CertDetailCard
              title={cert.data.title}
              issuer={cert.data.issuer}
              summary={cert.body}
              skills={cert.data.skills}
              link={cert.data.validationLink}
            />
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
