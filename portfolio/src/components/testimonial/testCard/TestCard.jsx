// eslint-disable-next-line react/prop-types
function TestCard({ profile }) {
  return (
    <>
      <div className="mx-6 border rounded-lg lg:h-80 p-10 flex flex-col items-center justify-center gap-6 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="flex justify-center items-center gap-6">
          <div className="w-14 h-14 rounded-full border overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              /* eslint-disable-next-line react/prop-types*/
              src={profile.imgUrl}
              /* eslint-disable-next-line react/prop-types*/
              alt={profile.name}
            />
          </div>
          {/* eslint-disable-next-line react/prop-types*/}
          <h3 className="font-semibold">{profile.name}</h3>
        </div>
        {/* eslint-disable-next-line react/prop-types*/}
        <p className="text-xs md:text-base md:text-center">{profile.review}</p>
      </div>
    </>
  );
}

export default TestCard;
