import { Card, CardHeader, CardBody, Chip, Divider } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);

const SkillsDisplay = ({ groups }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {groups.map((group, index) => (
        <Card key={index} isPressable={false}>
          <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
            <h3 className="font-bold text-xs">
              {group.icon && (
                <FontAwesomeIcon
                  className="pr-1.5 text-primary"
                  icon={group.icon}
                />
              )}
              {group.name}
            </h3>
          </CardHeader>
          <Divider />
          <CardBody className="overflow-visible py-2">
            <div className="flex flex-wrap justify-center gap-2">
              {group.skills.map((skill, skillIndex) => (
                <Chip
                  key={skillIndex}
                  variant="flat"
                  className="text-tiny text-zinc-400"
                >
                  {skill.name}
                </Chip>
              ))}
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default SkillsDisplay;
