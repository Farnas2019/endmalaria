import Nav from "../partials/nav";
const Home = () => {
    return ( 
       <div>
             <Nav/>
           <div className=" mt-20 grid grid-cols-2 overflow-hidden  ">           
            <div className=" mx-32 "> 
            <h1 className="text-indigo-500 text-4xl uppercase font-bold w-80 font-mono">Let's Roll back malaria From Africa</h1> 
            <h3 className="mt-40 font-serif">With the Help of Experts</h3>
            <form action="" className="mt-10 flex space-x-6" >
                <input type="Email" placeholder="Email" className="border-2 rounded-lg px-5 py-1 border-indigo-500 focus:border-indigo-500 hover:border-indigo-500 text-black hover:text-black"/>
                <button type="submit" className=" border-2 rounded-lg px-5 py-1 border-indigo-500 hover:border-indigo-500 hover:bg-white  hover:text-black text-white bg-indigo-500">Submit</button>
            </form>
            <button className="border-2 mt-8 rounded-lg px-5 py-1 border-indigo-500  hover:border-indigo-500 hover:bg-white  hover:text-black text-black ">Get Started</button>
            </div>
           <div className="transform translate-y-36 translate-x-28 rotate-12"> <img src="images/ml.jpg"  className="rounded-lg drop-shadow-lg" alt="MainImage" /></div>
           {/* <img src="images/ml.jpg" className="rounded-lg rotate-45 transform-gpu "  alt="MainImage" /> */}
        </div>
       </div>
        
     );
}
 
export default Home;