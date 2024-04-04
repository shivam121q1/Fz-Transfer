import { X } from "lucide-react";
import React,{useState} from "react";

const Sharebox = (props) => {
  const [user, setUser] = useState("");
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
            <a
              href="#"
              className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
            >
              <strong className="font-medium text-white">User A</strong>

              <p className="mt-1 text-xs font-medium text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                consequuntur deleniti, unde ab ut in!
              </p>
            </a>
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
