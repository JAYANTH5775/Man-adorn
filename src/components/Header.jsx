import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"
export default function Header() {

  const location = useLocation();
  const navigate = useNavigate()
  console.log(location.pathname)

  function pathMathRoute(route) {
    if (route == location.pathname) {
      return true
    }

  }
  return (

    <div className="bg-white border-b-shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>


          <img onClick={() => navigate("/")} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD8UlEQVR4AWLAAxgBldcDrCVLFIXhM7Zt27Zt89m2bdu2bfuFz+bYtq96/iTrJis70xeVfGmcOrWrundVd6OkHbfFqbgfL+MVvCqv6Nz9qkNdFdpQW8UqpWx/IB7B02q8FyojlmrohzPxrP4zMLZZlFJa28q4B89gcMoVKo0yKe0M1X/vsQ6XLmrw7vgIh4VLWVbbQ5WROB8z0MjOH6a2uoUYqcGH4VO0sktXFl6qoidOxs34AIlZg2Osfmu1OTR2It6f7qpYS8flrE55XIOvsAR5HlTHWciVXRhk/6+ttrvHnChh9/wjG3lZ6+2J+A8xYLaC5she7NH5fTgstNVaMap47JI6uAeHhZG3wR8WdD+ytE0ky67GbizFKvyMwRaojOXEvVBsTTVlbJy3H1vgvRZ0E/7ET7geV+NJfIg3cQOuRB3rgAUklt8ezdnBIUFaIdsu9wb8g9/wgYK9qvpeymvbFV68A4PxiK9wT+f31JLjLAXfhdUa8TbslgQ/K2DJsHKWQfOQxDHnnkY7ZE4VH301LLMO7ENisnX+aNVvgFiao3EI6tl/Wn7c+9Er/NgZOxUkMTnIVYc+Ut1aCtAIQ9BDI6uKNulXgHVEyfgyKocfa+N7BUs0tZarU4lcpbpN0AUXqcGntUBdjotjtlupprqZV1IS5SYF+hGzMAfPqFNXwEs9dND5Achof1jsQLgVT4BM1ujDtoHy4BONspdGuh3zdekrwUs51c3oljQNbcbyTOxALHfhV41kghpfogSqGJ77ZbRtj3a2vqQXdeCVtPmquZzgXExVg5vwrF2l5qpfF6XRUQvTDWgTBxdvgSVhavkWi1BfeZDoNtyKofrvYThKt+gkLMZGDLOFKTUJNQ1T5+uJSNTYHdrPtSX5OIzBf1iHPM2WFXiyKNPwVJwWgsZys0Z7gS1EOUjkWyxVwBHq1LsYZe2mLkRxKY6lkjrQE5dglT0f9mqbpf3X8Rn+xy7MtpxKXYrjw6hk2E5W0ApKrg1IZCWytN2NJLjURu1tDlJMlfA4tvM10UbJN0nL7D78i/XYj2wLmKsrslXHn6c8jp/GoDjl7sVhYU5X1XzPqBNTde8e9KCyD3uVGzvsCjUIb0UL4wtJfCVr7Z3wojo9tewegX/D21K2XYUsnZ9v/2+Dj/zZEzOzGz5F7dCJtPW8Hg7Dz/b43oPETLK6nyqGYh76tXyoKra2wDGLYwMlMQD34C38g+fslrZRm0M8VvE+TPS2pG0856Wq5JeFRf0wiZ2ognvt06y4ZSiex73F+TSLOeFz9mmcpiSsFlc3neuF09XpRzEo1ClWiZ/n7XCqvfU8gWfkCZ27V3XaFfXz/CBqGSolK0HK7QAAAABJRU5ErkJggg==" alt="man adron" className="h-5 cursor-pointer"></img>


        </div>
        <div>
          <ul className="flex space-x-10">


            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-transparent${pathMathRoute("/") && "text-black  border-b-red-500"}`}>
              Home
            </li>

            <li className={`cursor-pointer  py-3 text-sm font-semibold text-gray-400 border-b-transparent${pathMathRoute("/posts") && "text-black  border-b-red-500"}`} onClick={() => navigate("/posts")}>
              posts
            </li>

            <li className={`cursor-pointer  py-3 text-sm font-semibold text-gray-400 border-b-transparent${pathMathRoute("/signin") && "text-black  border-b-red-500"}`}>
              Signin
            </li>
          </ul>
        </div>
      </header >

    </div >
  )
}
