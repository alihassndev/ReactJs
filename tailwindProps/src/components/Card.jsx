// eslint-disable-next-line react/prop-types
function Card({ username, hashtxt = "#124" }) {
  // eslint-disable-next-line react/prop-types
  // console.log(username, hashtxt);
  return (
    <>
      <div className="mt-5 w-60 flex flex-col rounded-xl bg-black min-h-[19rem] overflow-hidden">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex gap-3 items-center justify-start">
            <h1 className="text-sm font-bold">Name: </h1>
            <h3>{username}</h3>
          </div>
          <div className="flex justify-between ">
            <h1 className="font-bold text-sm">Bored ape nft accidental</h1>
            <h1 className="text-sm">Price</h1>
          </div>
          <div className="flex  justify-between">
            {/* <p>{hashtxt || "#123"}</p> */}
            <p>{hashtxt}</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
