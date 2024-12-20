import { SkILLS } from "../../utils/data";
import SkillCard from "./skillcard/SkillCard";

function Skills() {
  return (
    <>
      <div>
        <h2>Technical Proficiency</h2>

        <div>
          <div>
            {SkILLS.map((item) => (
              <SkillCard
                key={item.title}
                iconUrl={item.iconUrl}
                title={item.title}
              />
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Skills;
