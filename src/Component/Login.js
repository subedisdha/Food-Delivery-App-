import React, { useEffect, useRef ,useState} from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";




function Login() {
    // data take for backend
    //error message send after
    //validate and send to backend
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [emailhandle, setemailhandle] = useState("");
    const [passwordhandle, setpasswordhandle] = useState("");
    // onChange={(e) => setpassword(e.target.value)} value={password}
    function validateEmail(emailtesting) {
        // Regular expression for validating email addresses
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(emailtesting);
    }

    const handledata = (e) => {
        e.preventDefault();
        console.log(email +" "+ password);

        if(email == "" || email == null){
            setemailhandle("Empty Email Field");
        }
        else if(!validateEmail(email)){
            setemailhandle("Write email format");
        }
        if(password == "" || password == null){
            setpasswordhandle("empty password field");
        }
    }
   
    
    // useRef: no reload, manipulate the property of an element
    const togglepassword = useRef(null);
   
    const showicon = useRef(null);
    const hideicon = useRef(null);
    //toggle function
    const toggle = ()=> {
        if(togglepassword.current.type === "text"){
            togglepassword.current.type = "password";
            showicon.current.style.display = "none";
            hideicon.current.style.display = "block";
        }
        else{
            togglepassword.current.type = "text";
            showicon.current.style.display = "block";
            hideicon.current.style.display = "none";

        }
       
    }
  return (
    <>
    {/* main div */}
    <div className='flex flex-row bg-black h-[100vh]'>
        {/* blur div */}
        <div className=' md:block hidden w-2/5 bg-cover ' style={{backgroundImage:'url("https://images.pexels.com/photos/3028127/pexels-photo-3028127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'}}>
            <div className='w-full flex justify-center'>
            <img className=" w-28 "  src="./foodiefinderlogo.png" alt=""/>
            </div>
            <p className='font-bold text-white'>Welcome to our LogIn page.</p>
        </div>

        {/* form div */}
        <div className=' md:px-20  px-5 lg:w-1/2 w-full  md:rounded-2xl bg-slate-300'>
        <div>
            <div className='w-full md:hidden  flex justify-center'>
                <img className=" w-28 "  src="./foodiefinderlogo.png" alt=""/>
            </div>

            <p className='text-orange-600 text-3xl font-semibold'>Login Here</p>
        <form method='post'> 
       
        
        <div className='flex flex-col justify-start text-left'>
            <label id='email'>Email</label>
            <input onChange={(e) => setemail(e.target.value)} value={email} type='text' placeholder='Email' className='border border-orange-900 focus:outline-none rounded-xl px-3 py-1.5' name='email'/>
            <span className='text-red-400 text-sm'>{emailhandle}</span>
        </div>
        <div className='flex  flex-col justify-start text-left'>
            <label id='email'>Password</label>
            
            <div className='bg-white rounded-xl flex justify-between items-center pr-2 border border-orange-900'>
            <input ref={togglepassword} onChange={(e) => setpassword(e.target.value)} value={password} type='password' placeholder='Password' className='focus:outline-none rounded-xl px-3 py-1.5' name='password'/>

            <Link onClick={toggle} ref = {showicon}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            </Link>

             {/* eye close icon*/}
             <Link onClick={toggle} ref={hideicon} className='hidden' >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
            </Link>
            </div>
            <span className='text-red-400 text-sm'>{passwordhandle}</span>
        </div>
        

        <div className='flex my-3 justify-center'>
        <button type = "submit" onClick={handledata} className='self-start bg-green-500 border-spacing-2 border border-yellow-700 rounded-full px-4 py-2 text-left'>Sign In</button>
        </div>
       

        </form>
        </div>



     
        <div className='border border-t-1 border-orange-500 mx-4 mt-4'>

        </div>
            <p>or Sign Up using</p>
            <div className=' gap-4 flex items-center justify-center '>
            
                <Link><FaFacebook className='fill-blue-600' size={30} /></Link>
                <Link><MdOutgoingMail className='fill-red-600' size={34} /></Link>
            </div>
        </div>

    </div>
    </>
  )
}

export default Login