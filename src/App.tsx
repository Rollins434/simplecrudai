import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Components/Contact";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import DashBoard from "./Components/DashBoard";
import "leaflet/dist/leaflet.css";

function App() {
  const [open, setOpen] = useState(true);


  const client = new QueryClient();

  return (
    <>
      <div className="px-8 

 text-2xl bg-white-100 py-2 shadow-lg  text-black text-center ">Contact Page</div>
      <div className="flex ">
        <div
          className={`bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]  border-#ccc-1px sidebar   p-5 pt-8 ${
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

          <div className=" mt-[50px] w-[full]">
            <ul className="my-4">
              <li className="py-4">
                <Link to="/contact" className={`hover:font-bold duration-100  `}>{
                open ? "Contact" : <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              </>
                }</Link>
              </li>
              <li>
                <Link to="/charts" className="hover:font-bold duration-100">{
                open ? "Charts and Maps" : <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              
              </>
                }</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 px-4 flex-1 bg-zinc-100">
          <QueryClientProvider client={client}>

          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/create" element={<Create />} />
            <Route path="/charts" element={<DashBoard />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
          </QueryClientProvider>
        </div>
      </div>
    </>
  );
}

export default App;
