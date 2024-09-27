import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
export default function EducationCards({ education_items }) {
  return (
    <Accordion
      selectionMode="multiple"
      variant="splitted"
      defaultExpandedKeys={["0"]}
    >
      {education_items.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label={item.data.school}
          startContent={
            <Avatar
              isBordered
              name={item.data.school}
              color="primary"
              radius="full"
              size="md"
              src={item.data.logo.src ? item.data.logo.src : undefined}
            />
          }
          title={item.data.school}
          subtitle={item.data.major}
        >
          <div className="flex min-h-0 flex-col gap-y-3">
            <p>{item.data.summary}</p>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
