import Nav from "../partials/nav";
const Signin = () => {
    return ( 
        <div className=" container ">
            <Nav/>
            <div className="grid grid-cols-2">
            <div className=" mx-32 mt-20 "> 
            <h1 className="text-indigo-500 text-sm uppercase font-bold w-80 font-mono">Welcome Back</h1> 
            <h3 className="mt-10 font-serif text-2xl">Login</h3>
            <form action="" className="mt-10" >
            <input type="Email" placeholder="Email" className="w-full text-sm border-2 rounded px-5 py-1 mb-5 border-black hover:border-indigo-500 text-black hover:text-black"/>
            <input type="password" placeholder="Password" className="w-full text-sm border-2 rounded px-5 py-1 mb-5 border-black hover:border-indigo-500 text-black hover:text-black"/>
             <div class="flex items-center justify-between">     
                
                <button type="submit" className=" border-2 rounded-lg px-5 py-1 border-indigo-500 hover:border-indigo-500 hover:bg-white  hover:text-black text-white bg-indigo-500">Submit</button>
                
                </div>
            </form>
    
            </div>
           <div className="transform translate-y-36 translate-x-28 rotate-12"> <img src="images/ml.jpg"  className="rounded-lg drop-shadow-lg" alt="MainImage" /></div>

            </div>

        </div>
     );
}
 
export default Signin;