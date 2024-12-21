import "./skillcard.css";

// eslint-disable-next-line react/prop-types
function SkillCard({ title, iconUrl, isActive, onclick }) {
  return (
    <>
      <div
        className={`${
          isActive ? "active" : ""
        } border border-purple-600 flex justify-center items-center py-6 lg:p-10 relative cursor-pointer text-center rounded-lg transition-all duration-300 hover:bg-purple-600 group`}
        onClick={() => onclick()}
      >
        <div>
          <img
            className="bg-purple-300 w-10 lg:w-16 lg:h-16 p-2 rounded-md absolute -left-4 -top-6 group-hover:bg-purple-100 transition-all duration-300"
            src={iconUrl}
            alt={title}
          />
        </div>

        <span className="text-xl">{title}</span>
      </div>
    </>
  );
}

export default SkillCard;
