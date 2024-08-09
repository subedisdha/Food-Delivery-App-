import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";




function Signup() {

    const [firstname,setfirstname] = useState("");
    const [lastname,setlastname] = useState("");
    const [phoneno,setphoneno] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [confirmpassword,setconfirmpassword] = useState("");

    
    const [firstnamehandle,setfirstnamehandle] = useState("");
    const [lastnamehandle,setlastnamehandle] = useState("");
    const [phonenohandle,setphonenohandle] = useState("");
    const [emailhandle,setemailhandle] = useState("");
    const [passwordhandle,setpasswordhandle] = useState("");
    const [confirmpasswordhandle,setconfirmpasswordhandle] = useState("");

    function validateEmail(emailtesting) {
        // Regular expression for validating email addresses
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(emailtesting);
      }

    function validatepassword(passwordtesting) {
        // Regular expression for validating password
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return regex.test(password);
      }



    const handlesignup=(e)=>{
        e.preventDefault();
        console.log(firstname + lastname + phoneno + email + password + confirmpassword);
        if(firstname =="" || firstname == null){
            setfirstnamehandle("Empty field");
        }
        else if(firstname.length <= 2){
            setfirstnamehandle("Length must be greater than 2 characters");
        }
        else{
            setfirstnamehandle("");
        }
        //last name
        if(lastname == "" || lastname == null){
            setlastnamehandle("Empty field");
        }
        else if(lastname.length <=2){
            setlastnamehandle("Length must be greater than 2 characters");
        }
        else{
            setlastnamehandle("");
        }
        // phone number
        if(phoneno == "" || phoneno == null){
            setphonenohandle("Empty Field");
        }
        else if(phoneno.length !=10){
            setphonenohandle("Length must be of Ten digit")
        }
        else{
            setphonenohandle("");
        }
        // email
        if(email == "" || email == null){
            setemailhandle("Empty Email Field");
        }
        else if(!validateEmail(email)){
            setemailhandle("Write in Email format");
        }
        else{
            setemailhandle("");
        }
        //password
        if(password== "" || password == null){
            setpasswordhandle("Empty password field");
        }
        else if(!validatepassword(password)){
            setpasswordhandle("At least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long")
        }
    }
    // const [name,setname] = useState("");
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
    // 
  return (
    <>
    {/* main div */}
    <div className='flex flex-row bg-gradient-to-r from-red-400 via-orange-300 to-green-200 h-[100vh]'>
        {/* blur div */}
        <div className=' md:block hidden w-1/5 '>
            <div className='w-full flex justify-center'>
            <img className=" w-28 "  src="./foodiefinderlogo.png" alt=""/>
            </div>
            <p className='font-bold text-white'>Welcome to our Sign Up page.</p>
        </div>

        {/* form div */}
        <div className=' md:px-20  px-5 lg:w-1/2 w-full  md:rounded-2xl bg-slate-300'>
        <div>
            <div className='w-full md:hidden  flex justify-center'>
                <img className=" w-28 "  src="./foodiefinderlogo.png" alt=""/>
            </div>

            <p className='text-orange-600 text-3xl font-semibold'>SignUp Here</p>
        <form method='post'> 
        <div className='flex flex-col justify-start text-left'>
            <label id='firstname'>First Name</label>
            <input onChange={(e)=>{setfirstname(e.target.value)}}  type='text' placeholder='First Name' className='border border-orange-900 focus:outline-none rounded-xl px-3 py-1.5' name='name'/>
            <span className='text-red-400 text-sm'>{firstnamehandle}</span>
        </div>
        <div className='flex flex-col justify-start text-left'>
            <label id='firstname'>Last Name</label>
            <input onChange={(e)=>{setlastname(e.target.value)}} type='text' placeholder='Last Name' className='border border-orange-900 focus:outline-none rounded-xl px-3 py-1.5' name='name'/>
            <span className='text-red-400 text-sm'>{lastnamehandle}</span>
        </div> 
        <div className='flex flex-col justify-start text-left'>
            <label id='email'>Phone Number</label>
            <input onChange={(e)=>{setphoneno(e.target.value)}} type='number' placeholder='Phone Number' className='border border-orange-900 focus:outline-none rounded-xl px-3 py-1.5' name='number'/>
            <span className='text-red-400 text-sm'>{phonenohandle}</span>
        </div>
        
        <div className='flex flex-col justify-start text-left'>
            <label id='email'>Email</label>
            <input onChange={(e)=>{setemail(e.target.value)}} type='text' placeholder='Email' className='border border-orange-900 focus:outline-none rounded-xl px-3 py-1.5' name='email'/>
            <span className='text-red-400 text-sm'>{emailhandle}</span>
        </div>
        <div className='flex  flex-col justify-start text-left'>
            <label id='email'>Password</label>
            
            <div className='bg-white rounded-xl flex justify-between items-center pr-2 border border-orange-900'>
            <input onChange={(e)=>{setpassword(e.target.value)}} ref={togglepassword} type='password' placeholder='Password' className='focus:outline-none rounded-xl px-3 py-1.5' name='password'/>

           
        

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

             
            <label id='email'>Confirm Password</label>
            <input onChange={(e)=>{setconfirmpassword(e.target.value)}} type='password' placeholder='Confirm Password' className='border border-orange-900 focus:outline-none rounded-xl px-3 py-1.5' name='password'/>
            <span className='text-red-400 text-sm'>{confirmpasswordhandle}</span>

        </div>
        

        <div className='flex my-3 justify-center'>
        <button type = "submit" onClick={handlesignup} className='self-start bg-green-500 border-spacing-2 border border-yellow-700 rounded-full px-4 py-2 text-left'>Sign Up</button>
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

export default Signup