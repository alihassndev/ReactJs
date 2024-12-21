// eslint-disable-next-line react/prop-types
function WorkCard({ details }) {
  return (
    <>
      <div className="group border px-6 py-8 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-900 hover:text-white">
        {/* eslint-disable-next-line react/prop-types */}
        <h1 className="text-lg font-semibold">{details.title}</h1>
        <h3 className="bg-blue-600 w-fit py-1 px-3 rounded-md my-3 text-sm">
          {/* eslint-disable-next-line react/prop-types */}
          {details.date}
        </h3>

        <ul className="ms-5">
          {/* eslint-disable-next-line react/prop-types */}
          {details.responsibilities.map((res, index) => (
            <li className="list-disc" key={index}>
              {res}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default WorkCard;
