import { useState } from "react";
import { SkILLS } from "../../utils/data";
import SkillCard from "./skillcard/SkillCard";
import SkillInfoCard from "./skillInfoCard/SkillInfoCard";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(SkILLS[0]);

  const handleSelectedSkills = (data) => {
    setSelectedSkill(data);
  };

  return (
    <>
      <div id="skills" className="my-24 w-[80vw] mx-auto flex flex-col gap-20">
        <h2 className="text-2xl font-semibold">Technical Proficiency</h2>

        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="flex-1 w-full grid grid-cols-2 gap-10 order-2 lg:order-1">
            {SkILLS.map((item) => (
              <SkillCard
                key={item.title}
                iconUrl={item.iconUrl}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onclick={() => {
                  handleSelectedSkills(item);
                }}
              />
            ))}
          </div>
          <div className="flex-1 flex justify-end items-center w-full order-1 lg:order-2">
            <SkillInfoCard
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
