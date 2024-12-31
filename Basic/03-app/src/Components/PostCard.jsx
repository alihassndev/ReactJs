/* eslint-disable react/prop-types */
function PostCard(props) {
  return (
    <>
      <div className="flex flex-col w-full text-start bg-gray-300 p-10 rounded-lg shadow-md text-black hover:bg-gray-400 cursor-pointer">
        <h2>{props.item.title}</h2>
        <p>{props.item.body}</p>
      </div>
    </>
  );
}

export default PostCard;
