import { Send, X } from "lucide-react";
import React, { useState } from "react";
import toast , {Toaster} from 'react-hot-toast'

const Sharebox = (props) => {
  const [userdata, setUser] = useState("");
  const [value, setValue] = useState();
  const [box, setBox] = useState(false);
  console.log("userdata", value);

  const sendFile = () => {
    
    const parsedresp = (data) => {
      if(data.success){
        toast.success(data.msg);
      }else{
        toast.error(data.msg)
      }
    }
    
    const response = (resp) => {
      resp.json().then(parsedresp);
    }
    
    fetch("http://localhost:4000/api/v1/sendFile" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userdata,
        url: props?.url,
      }),
    }).then(response)
    .catch((Error)=>{
      toast.error(Error.message);
    })


  }

  const searchUser = () => {
    const parsedresp = (data) => {
      console.log(data.user.email);
      if (data.success) {
        setValue(data?.user);
        setBox(true);
      } else {
        return;
      }
    };
    const response = (resp) => {
      resp.json().then(parsedresp);
    };
    fetch("http://localhost:4000/api/v1/searchUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userdata,
      }),
    })
      .then(response)
      .catch((err) => {
        console.log("Error occurred while posting the Login data ", err);
        return;
      });
  };
  const handelclose = () => {
    props.Share(false);
  };
  return (
    <div className="z-10 absolute flex bg-transparent justify-center items-center left-1/3 top-10 shadow-lg">
      <Toaster/>
      <article className="rounded-xl border border-gray-700 bg-gray-800 p-4 w-96">
        <div className="flex items-center justify-center gap-8">
          <X
            className="hover:bg-gray-700 rounded-xl ml-80 cursor-pointer"
            onClick={handelclose}
            size={20}
            color="red"
          />
        </div>

        <div className="mt-4 w-full flex justify-center items-center">
          <div className="w-full h-10 flex gap-2">
            <input
              className="p-2 bg-gray-600 rounded-md outline-none border w-3/4"
              type="text"
              placeholder="Search a user"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            <button
              onClick={searchUser}
              className="bg-blue-600 pr-5 pl-4 p-2 rounded-md text-white"
            >
              Search
            </button>
          </div>
        </div>
        {box && (
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="h-full flex items-center justify-between rounded-lg border border-gray-700 p-4 hover:border-pink-600"
              >
                <div>
                  <strong className="font-medium text-white">
                    {value?.name}
                  </strong>

                  <p className="mt-1 text-xs font-medium text-gray-300">
                    Sending to: {value?.email}
                  </p>
                </div>

                <Send size={32} onClick={sendFile} />
              </a>
            </li>
          </ul>
        )}
      </article>
    </div>
  );
};

export default Sharebox;
