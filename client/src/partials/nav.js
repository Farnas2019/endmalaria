import { Link } from "react-router-dom";
const Nav = () => {
  return (  
    <div className="bg-white shadow-md h-20 w-screen sticky">
     <Link to={"/"}><div className="text-indigo-500 mx-20 "><h1>Farhan</h1></div></Link>
        <ul className="list h-24 w-1/2 absolute left-80 top-8 font-serif flex space-x-16">
          <Link to={"/about"}><li>About</li></Link>
          <Link to={"/howitworks"}><li>How It works</li></Link>
          <Link  to={"/healthtips"}><li>Health Tips</li></Link>
          <Link to={"/healthblogs"}><li>Health Blogs</li></Link>
        </ul>
        <Link to={"/login"}><button className=" border-2 rounded-lg px-5 py-1 border-indigo-500 hover:border-indigo-500 hover:bg-white hover:text-black text-white mx-6 bg-indigo-500 float-right ">Login</button></Link>
        <Link to={"/signup"}><button className=" border-2 rounded-lg px-5 py-1 border-indigo-500 float-right text-black hover:bg-indigo-500 mx-6 hover:text-white">Signup</button> </Link>

      </div>
   
  );
}
 
export default Nav;