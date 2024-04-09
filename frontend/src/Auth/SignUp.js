import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import toast , {Toaster} from 'react-hot-toast'; 
import {EyeOff,Eye} from 'lucide-react'



const SignUp = () => {
  const [showPassword,setShowPassword] =  useState(false);
  const [showsPassword,setShowsPassword] =  useState(false);
  const [Fname, setFname] = useState();
  const [Lname, setLname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [OTP, setOTP] = useState(false);
  const [otpValue, setotpValue] = useState();
  const [disbaleds, setDisbaleds] = useState(true);
  const [editable, setEditable] =useState(true);


  const router = useNavigate();

  const verifyOTP = (e) => {
    e.preventDefault();
    
    const parsedresp = (data) => {
      console.log("User data is : ", data);
      if (data.success) {
        setDisbaleds(false);
        setEditable(false)
        toast.success(data.message);
      }else{
        toast.error(data.message);
      }
    };

    const response = (resp) => {
      resp.json().then(parsedresp);
    };

    fetch("http://localhost:4000/api/v1/verifyOtp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp: otpValue,
        email: email,
      }),
    })
      .then(response)
      .catch((e) => {
        console.log(e.message);
      });
  };

  const sendOtp = (e) => {
    e.preventDefault();


    const parsedresp = (data) => {
      console.log("User data is : ", data);
      if (data.success) {
        setOTP(true);
          toast.success(data.message); 
      }else{
        toast.error(data.message);
      }
    };

    const response = (resp) => {
      resp.json().then(parsedresp);
    };

    fetch("http://localhost:4000/api/v1/sendOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(response)
      .catch((e) => {
        console.log(e.message);
      });
  };

  const RegisterHandeler = (e) => {
    e.preventDefault();


    const parsedresp = (data) => {
      console.log("User data is : ", data);

      if(data.success === false){
        toast.error(data.message);
      }else{
        toast.success(data.message);
        setInterval(() => {
          router('/Login')
        }, 2000);
      }
      
    };
    const response = (resp) => {
      resp.json().then(parsedresp);
    };
    fetch("http://localhost:4000/api/v1/Signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        name: Fname + " " + Lname,
        number: phonenumber,
      }),
    })
      .then(response)
      .catch(console.log("Error occurred while posting the data"));
  };
  return (
    <section className="bg-white">

      
        <Toaster/>
      
      
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <div className="hidden lg:relative lg:block lg:p-12">
            <span className="sr-only">Home</span>
            <svg
              className="h-8 sm:h-10"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                fill="currentColor"
              />
            </svg>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Fz Transfer ✈️
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Kuch toh h Fz Transfer me.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2>
            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>

                <input
                  type="text"
                  onChange={(event) => {
                    setFname(event.target.value);
                  }}
                  className="mt-1 w-full border h-10 p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  onChange={(event) => {
                    setLname(event.target.value);
                  }}
                  className="mt-1 w-full border h-10 p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <div>
                  <div className="flex">
                    <input
                      type="email"
                      disabled = {!editable}
                      onChange={(event) => {
                        setemail(event.target.value);
                      }}
                      className={`${ !editable ? "bg-gray-400 text-white cursor-not-allowed rounded-md" : "bg-white"} mt-1 w-full border h-10 p-4 rounded-l-md border-gray-200  text-sm text-gray-700 shadow-sm`}
                    />
                    {OTP ? null:(
                    <button
                      className="border border-black w-32 h-10  mt-1 rounded-r-md bg-gray-900 text-white"
                      onClick={sendOtp}
                    >
                      Verify Email
                    </button>
                  )}
                  </div>

                  {OTP && (
                    <div className="col-span-6">
                      <label
                        className="block text-sm mt-2 font-medium text-gray-700"
                      >
                        OTP
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          autoComplete="new-password"
                          onChange={(event) => {
                            setotpValue(event.target.value);
                          }}
                          className="mt-1 w-full h-10 border p-4 rounded-l-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />

                        {OTP ? (
                          <button
                            className={`${disbaleds === false? "bg-green-600":"bg-gray-900"} border border-black w-32 mt-1 h-10 rounded-r-md  text-white`}
                            onClick={verifyOTP}
                          >
                            Verify OTP
                          </button>
                        ) : null}

                      </div>
                    </div>
                  )}

                </div>
              </div>

              <div className="col-span-6 relative">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Password{" "}
                </label>

                <input
                  type= {showPassword ? "password":"text"}
                  autoComplete="new-password"
                  onChange={(event) => {
                    setpassword(event.target.value);
                  }}
                  className="mt-1 w-full border h-10 p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                {showPassword===false?<EyeOff onClick={()=>{setShowPassword(true)}} size={22} color='black' className='absolute top-8 right-5'/> : <Eye onClick={()=>{setShowPassword(false)}} size={22} color='black' className='absolute top-8 right-5' /> }
              </div>
              <div className="col-span-6 relative">
                <label
                  htmlFor="Confirm Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Confirm Password{" "}
                </label>

                <input
                  type={showsPassword ? "password":"text"}
                  onChange={(event) => {
                    setconfirmPassword(event.target.value);
                  }}
                  className="mt-1 w-full border h-10 p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                {showsPassword===false?<EyeOff onClick={()=>{setShowsPassword(true)}} size={22} color='black' className='absolute top-8 right-5'/> : <Eye onClick={()=>{setShowsPassword(false)}} size={22} color='black' className='absolute top-8 right-5' /> }
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="PhoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Phone Number{" "}
                </label>

                <input
                  type="text"
                  onChange={(event) => {
                    setphonenumber(event.target.value);
                  }}
                  className="mt-1 w-full border h-10 p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  disabled={disbaleds}
                  onClick={RegisterHandeler}
                  className={`${
                    disbaleds === true ? "cursor-not-allowed" : null
                  } inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500`}
                >
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <a href="/Login" className="text-gray-700 underline">
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignUp;
