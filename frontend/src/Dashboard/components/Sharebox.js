import { X } from "lucide-react";
import React,{useState} from "react";

const Sharebox = (props) => {
  const [user, setUser] = useState("");

  const searchUser = ( )=>{
    const parsedresp = (data) => {
      console.log(data)
      if(data.success){
        // setName(data.)
        
      }  
      else{
        
      }   
    }
    const response = (resp) => {
        resp.json().then(parsedresp);
    }
    fetch("http://localhost:4000/api/v1/searchUser" ,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "email": user
            
          
          }) 
    }).then(response).catch((err)=>{
      console.log("Error occurred while posting the Login data ",err);
      return;
    })


  }
  const handelclose = () => {
    props.Share(false);
  };
  return (
    <div className="z-10 absolute flex bg-transparent justify-center items-center left-1/3 top-10 shadow-lg">
      <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
        <div className="flex items-center justify-center gap-8">
          <div className="w-3/4 flex">
            <input
              className="p-2 bg-gray-600 rounded-md outline-none border w-full"
              type="text"
              placeholder="Search a user"
              onChange={(e)=>{setUser(e.target.value)}}
            />
          </div>
          <X
            className="hover:bg-gray-700 rounded-xl cursor-pointer"
            onClick={handelclose}
            size={20}
            color="red"
          />
        </div>

        <ul className="mt-4 space-y-2">
          <li>
            <button onClick={searchUser} className="bg-blue-600">Search user</button>
          </li>

          <li>
            <a
              href="#"
              className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
            >
              <strong className="font-medium text-white">Project B</strong>

              <p className="mt-1 text-xs font-medium text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente cumque saepe sit.
              </p>
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Sharebox;
