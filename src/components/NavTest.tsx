import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      {/* <nav className="w-full px-4 flex md:flex-row md:justify-between items-center border-b-2 border-b-accent">
        <div>
          <i className="py-4 md:text-lg font-bold border-t-4 border-t-transparent">
            SOR-IV
          </i>
        </div>
        <div className="w-[50%] max-w-150 flex md:flex-row md:justify-around">
          <Link to={"/"}>
            <p className="py-4 font-semibold border-t-4 border-t-app-blue">
              Home
            </p>
          </Link>
          <Link to={"/about"}>
            <p className="py-4 font-semibold border-t-4 border-t-transparent">
              About
            </p>
          </Link>
          <Link to={"/resources"}>
            <p className="py-4 font-semibold border-t-4 border-t-transparent">
              Resources
            </p>
          </Link>
          <Link to={"/contact"}>
            <p className="py-4 font-semibold border-t-4 border-t-transparent">
              Contact Us
            </p>
          </Link>
          <Link to={"/survey"}>
            <p className="py-4 font-semibold border-t-4 border-t-transparent">
              Survey
            </p>
          </Link>
        </div>
      </nav> */}
      <nav className="w-full h-15 bg-white z-2 px-4 flex md:flex-row md:justify-between items-center border-b-2 border-b-accent fixed">
        <div className="h-full">
          <i className="h-full md:text-lg font-bold border-t-4 border-t-transparent flex items-center">
            SOR-IV
          </i>
        </div>
        <div className="w-[50%] h-full max-w-150 flex md:flex-row md:justify-around">
          <Link to={"/"}>
            <p className="h-full font-semibold border-t-4 border-t-app-blue flex items-center">
              Home
            </p>
          </Link>
          <Link to={"/about"}>
            <p className="h-full font-semibold border-t-4 border-t-transparent flex items-center">
              About
            </p>
          </Link>
          <Link to={"/resources"}>
            <p className="h-full font-semibold border-t-4 border-t-transparent flex items-center">
              Resources
            </p>
          </Link>
          <Link to={"/contact"}>
            <p className="h-full font-semibold border-t-4 border-t-transparent flex items-center">
              Contact Us
            </p>
          </Link>
          <Link to={"/survey"}>
            <p className="h-full font-semibold border-t-4 border-t-transparent flex items-center">
              Survey
            </p>
          </Link>
        </div>
      </nav>
      <div className="w-full h-15"></div>
    </>
  );
}

export default Nav;
