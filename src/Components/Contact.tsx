import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IContact } from "../Interface/contact.type";

import { useAppSelector } from "../source/store";
import List from "./List";
import { IPerson } from "../source/features/personSlice";

const Contact = () => {
  // const [showPage, setShowPage] = useState("nocontact");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create");
  };

  const personData = useAppSelector((state) => state.person.persons);

  return (
    <div className="w-[100%] content-center ">
      <div className="text-1xl flex flex-col gap-10  items-center ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 max-w-sm"
          onClick={handleClick}
        >
          Create Contact
        </button>

        <div className="px-6 pt-4 pb-2">
          {personData && personData.length > 0 ? (
            <List data={personData} />
          ) : (
            <h2>No Content Added</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
