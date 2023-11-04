import React from 'react'
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
export default function Header() {

  const location = useLocation();
  console.log(location.pathname);

  const navigate = useNavigate();
  console.log(navigate)



  function pathMatchroute(route) {

    if (route === location.pathname) {
      return true
    }

  }
  return (
    <div className=" bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center  px-3  max-w-6xl mx-auto">
        <div>

          <img src="https://t4.ftcdn.net/jpg/03/02/13/01/360_F_302130170_pb6lx55ypUu8hfQwpCsCbzTUUNGMHUBx.jpg" alt="logo"
            className="h-12 cursor-pointer" onClick={() => navigate("/")}></img>



        </div>
        <div>
          <ul className="flex space-x-10">
            <li className={`cursor-pointer py-3  text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent${pathMatchroute("/") && "text-black border-b-blue-500"}`} onClick={() => navigate("/")}>Home</li>

            <li className={` cursor-pointer py-3  text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent${pathMatchroute("/posts") && "text-black border-b-blue-500"}`} onClick={() => navigate("/posts")} > Posts</li>


            <li className={`cursor-pointer py-3  text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent${pathMatchroute("/signup") && "text-black border-b-blue-500"}`} onClick={() => navigate("/signup")} > Sign_up</li>


            <li className={`cursor-pointer py-3  text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent${pathMatchroute("/offers") && "text-black border-b-blue-500"}`} onClick={() => navigate("/offers")}>Offers</li>
          </ul>
        </div>
      </header >
    </div >
  )
}
