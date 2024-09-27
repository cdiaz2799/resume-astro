import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
export default function Experience({ workExperience }) {
  return (
    <Accordion selectionMode="multiple" variant="splitted">
      {workExperience.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label={item.data.company}
          startContent={
            <Avatar
              isBordered
              name={item.data.company}
              color="primary"
              radius="full"
              size="md"
              src={
                item.data.companyLogo.src
                  ? item.data.companyLogo.src
                  : undefined
              }
            />
          }
          title={item.data.company}
          subtitle={item.data.title}
        >
          <div className="flex min-h-0 flex-col gap-y-3">
            <p>
              <span>
                {item.data.startDate} - {item.data.endDate}
              </span>
            </p>
            <p>{item.data.summary}</p>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
