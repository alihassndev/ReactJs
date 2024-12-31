import { useEffect, useState } from "react";
import { getPosts, getRandomUser } from "./api";
import "./App.css";
import PostCard from "./Components/PostCard";
import UserCard from "./Components/UserCard";

function App() {
  const [data, setData] = useState(null);
  const [userData, setUser] = useState();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    getRandomUser().then((user) => setUser(user.results[0]));
  }, [clicked]);

  console.log(userData);

  const toggle = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="flex flex-col gap-10 w-[80vw] mx-auto">
        <h1>API Fetching</h1>

        <div className="flex flex-col gap-6">
          {userData && <UserCard data={userData} />}

          <button className="bg-white text-black" onClick={toggle}>
            Refresh
          </button>
        </div>

        <div className="flex flex-col gap-8">
          {data ? (
            data.map((item, index) => (
              <div key={index}>
                <PostCard item={item} />
              </div>
            ))
          ) : (
            <p>No Data Found 😥</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
