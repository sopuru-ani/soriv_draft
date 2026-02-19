import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link to={"/survey"}>Survey Button</Link>
      <Link to={"/about"}>About</Link>
    </>
  );
}

export default Home;
