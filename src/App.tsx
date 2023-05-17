import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Components/Contact";
import Create from "./Components/Create";
import Edit from "./Components/Edit";


function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="px-8 py-4 bg-cyan-100">Header</div>
      <div className="flex">
        <div
          className={`bg-zinc-200 h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } duration-300 relative`}
        >
          <span
            className={`absolute  right-[30px] cursor-pointer top-9 `}
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <div className=" mt-[50px] w-full">
            <ul className="my-4">
              <li className="py-4">
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/charts">Charts and Map</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 px-4 w-[100%] ">
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
