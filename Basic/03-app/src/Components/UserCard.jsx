/* eslint-disable react/prop-types */
function UserCard(props) {
  const data = props.data;
  const name = `${data.name.first} ${data.name.last}`;

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 p-10 border bg-white text-black rounded-2xl">
        {/* Display user image */}
        <img
          src={data.picture.large}
          className="w-fit rounded-full"
          alt="User"
        />
        <h2 className="font-bold">{name}</h2>
        <p className="font-semibold">Phone: {data.phone}</p>
        <p className="font-semibold">
          Location: {data.location.city}, {data.location.country}
        </p>
      </div>
    </>
  );
}

export default UserCard;
