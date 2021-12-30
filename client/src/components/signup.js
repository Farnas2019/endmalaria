import Nav from "../partials/nav";
const Signin = () => {
    return ( 
        <div className=" container ">
        <Nav/>
        <div className="grid grid-cols-2">
        <div className=" mx-32 mt-20 "> 
        <h1 className="text-indigo-500 text-sm uppercase font-bold w-80 font-mono">Welcome</h1> 
        <h3 className="mt-10 font-serif text-2xl">Sign Up</h3>
        <form action="" className="mt-10" >
        <div className="names flex space-x-1  w-full">
            <input type="text" placeholder="First Name" className=" text-sm border-2 rounded px-3 py-1 mb-5 border-black hover:border-indigo-500 text-black hover:text-black w-1/2"/>
            <input type="text" placeholder="First Name" className="text-sm border-2 rounded px-3 py-1 mb-5 border-black hover:border-indigo-500 text-black hover:text-black w-1/2"/>
        </div>
            <input type="Email" placeholder="Email" className=" text-sm border-2 rounded px-5 py-1 mb-5 border-black hover:border-indigo-500 text-black hover:text-black w-full"/>
            <input type="password" placeholder="Password" className=" text-sm border-2 rounded px-5 py-1 mb-5 border-black hover:border-indigo-500 text-black hover:text-black w-full"/>
            <svg width="48" height="43" className=" float-right -mt-14 relative"  fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M39.6594 20.649C34.5637 15.3188 29.1652 12.5417 24.0189 12.5417C18.8727 12.5417 13.4742 15.3188 8.3784 20.649C7.87387 21.1417 7.87387 21.9032 8.3784 22.3959C13.4742 27.6813 18.8727 30.4584 24.0189 30.4584C29.1652 30.4584 34.5637 27.6813 39.6594 22.3511C40.1135 21.8584 40.1135 21.1417 39.6594 20.649ZM24.0189 28.6667C19.6295 28.6667 14.7355 26.1136 10.1947 21.5001C14.7355 16.8865 19.6295 14.3334 24.0189 14.3334C28.4084 14.3334 33.3023 16.8865 37.8431 21.5001C33.3023 26.1136 28.4084 28.6667 24.0189 28.6667ZM24.0189 16.1251C20.689 16.1251 17.9645 18.5438 17.9645 21.5001C17.9645 24.4563 20.689 26.8751 24.0189 26.8751C27.3488 26.8751 30.0733 24.4563 30.0733 21.5001C30.0733 18.5438 27.3488 16.1251 24.0189 16.1251ZM24.0189 25.0834C21.799 25.0834 19.9827 23.4709 19.9827 21.5001C19.9827 19.5292 21.799 17.9167 24.0189 17.9167C26.2389 17.9167 28.0552 19.5292 28.0552 21.5001C28.0552 23.4709 26.2389 25.0834 24.0189 25.0834Z" fill="#032D23"/>
            </svg>

            
            <div className=" flex space-x-6">
            <div className="remember">
                <input type="checkbox" name="rememberme" className="border-2" />
                <label htmlFor="chekbox"> Remember Me</label>
            </div>
            <div className="forgot">
                <h2>Forgot Password</h2>
            </div>
        </div>
        <div class="flex items-center justify-between">     
            <button type="submit" className=" border-2 rounded-lg px-5 py-1 border-indigo-500 hover:border-indigo-500 hover:bg-white  hover:text-black text-white bg-indigo-500">Submit</button>
        </div>
        </form>
       
        </div>
        </div>
        <div className="transform translate-y-36 translate-x-28 rotate-12"> <img src="images/ml.jpg"  className="rounded-lg drop-shadow-lg" alt="MainImage" /></div>

         </div>
     );
}
 
export default Signin;