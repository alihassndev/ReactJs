import { WORK } from "../../utils/data";
import WorkCard from "./workCard/WorkCard";

function Work() {
  return (
    <>
      <div id="work" className="my-24 w-[80vw] mx-auto flex flex-col gap-10">
        <h1 className="text-2xl font-semibold">Work Experience</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {WORK.map((item) => (
            <WorkCard key={item.title} details={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Work;
