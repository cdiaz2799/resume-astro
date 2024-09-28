import React from "react";
import { Card, CardHeader, CardBody, Chip } from "@nextui-org/react";

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
        <Card key={index}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{group.name}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <Chip
                  key={skillIndex}
                  color={skillLevelColors[skill.level] || "default"}
                  variant="flat"
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
