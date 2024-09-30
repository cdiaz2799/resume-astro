import { Card, CardHeader, CardBody, Chip, Divider } from "@nextui-org/react";

const skillLevelColors = {
  beginner: "primary",
  intermediate: "secondary",
  advanced: "success",
  expert: "warning",
};

const SkillsDisplay = ({ groups }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {groups.map((group, index) => (
        <Card key={index} isPressable={false}>
          <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
            <h3 className="font-bold text-sm">{group.name}</h3>
          </CardHeader>
          <Divider />
          <CardBody className="overflow-visible py-2">
            <div className="flex flex-wrap justify-center gap-2">
              {group.skills.map((skill, skillIndex) => (
                <Chip
                  key={skillIndex}
                  color={skillLevelColors[skill.level] || "default"}
                  variant="flat"
                  className="text-xs text-zinc-400"
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
