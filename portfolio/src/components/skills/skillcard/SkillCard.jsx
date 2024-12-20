// eslint-disable-next-line react/prop-types
function SkillCard({ title, iconUrl, isActive, onclick }) {
  return (
    <>
      <div
        className={`${
          isActive ? "active" : ""
        } border border-blue-600 p-4 relative cursor-pointer text-center rounded-lg transition-all duration-300`}
        onClick={() => onclick()}
      >
        <div>
          <img src={iconUrl} alt={title} />
        </div>

        <span>{title}</span>
      </div>
    </>
  );
}

export default SkillCard;
