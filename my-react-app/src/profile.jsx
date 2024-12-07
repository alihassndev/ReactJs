function Profile() {
  const url = "./src/assets/ali-8.jpg";

  const handleClick = (e) => (e.target.style.display = "none");

  return (
    <img
      style={{
        width: "150px",
        height: "200px",
        objectFit: "cover",
        objectPosition: "center bottom",
        cursor: "pointer",
      }}
      src={url}
      alt="Ali"
      onClick={(e) => handleClick(e)}
    />
  );
}

export default Profile;
