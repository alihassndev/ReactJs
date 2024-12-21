// eslint-disable-next-line react/prop-types
function SkillInfoCard({ heading, skills }) {
  return (
    <>
      <div className="border border-blue-600 w-[100%] py-12 px-16 rounded-xl">
        <h2 className="text-2xl font-semibold mb-8">{heading}</h2>
        <div className="flex flex-col gap-6">
          {/* eslint-disable-next-line react/prop-types*/}
          {skills.map((s) => (
            <div className="flex flex-col gap-2" key={s.skill}>
              <h2>{s.skill}</h2>
              <div
                className={`h-3 border border-blue-600 rounded-full overflow-hidden w-full`}
              >
                <div
                  style={{ width: `${s.percentage}` }}
                  className={`h-full bg-blue-600`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SkillInfoCard;
