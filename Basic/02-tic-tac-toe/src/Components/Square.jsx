/* eslint-disable react/prop-types */
function Square(props) {
  return (
    <>
      <div>
        <p
          onClick={props.onClick}
          className="border h-24 w-full px-10 py-8 text-xl cursor-pointer"
        >
          {props.value}
        </p>
      </div>
    </>
  );
}

export default Square;
