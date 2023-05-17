import React, { useState } from "react";
import { useAppDispatch } from "../source/store";
import { addPerson } from "../source/features/personSlice";
import { useNavigate } from "react-router-dom";

// type Props ={
//   showContactPage: (value:string) => any
// }

const Create = () => {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [status, setStatus] = useState<any>("");

  function handleFname(e: any) {
    setFname(e.target.value);
  }
  function handleLname(e: any) {
    setLname(e.target.value);
  }
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const submitForm = (event: any) => {
    // Preventing the page from reloading
    event.preventDefault();
    dispatch(
      addPerson({
       
      id:Math.floor(Math.random() * 100),
        fname: fname,
        lname: lname,
        status: status,
      })
    );
    setFname("")
    setLname("")
    setStatus(false)
    navigate("/contact")
  };

  return (
    <div className="w-[500px] mx-auto items-center ">
      <div className="text-1xl flex flex-col gap-10 justify-center ">
        <div className="px-6 pt-8 pb-2 mt-14 border">
          <form onSubmit={submitForm}>
            {/* <label >FirstName</label> */}
            <div className="flex gap-5 mb-5">
              <label>FirstName</label>

              <input
                type="text"
                value={fname}
                required
                onChange={handleFname}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex gap-5">
              <label>LastName</label>
              <input
                type="text"
                value={lname}
                required
                onChange={handleLname}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex gap-2 my-4 justify-center">
              <input
                type="radio"
                name="status"
                value="Active"
                onChange={(e) => setStatus(e.target.value)}
              />{" "}
              Active
              <input
                type="radio"
                name="status"
                value="Inactive"
                onChange={(e) => setStatus(e.target.value)}
              />{" "}
              Inactive
            </div>
            <div>
              <div className="text-center">
                <button className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 ">
                  Save Contact
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
