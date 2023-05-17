import React from "react";
import { IPerson, deltePerson } from "../source/features/personSlice";
import { useAppDispatch } from "../source/store";
import { Link, useNavigate } from "react-router-dom";

type listData = {
  data: IPerson[];
};
const List = (props: listData) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleDelete = (id: any) => {
    dispatch(deltePerson(id));
  };
  const handleEdit = (id: any) => {
    navigate(`/edit/${id}`);
  };
  return (
    <>
      <div className="flex flex-wrap gap-5 ">
        {props.data.map((data) => {
          return (
            //   <div key={data.id}>
            //     <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            //       FirstName : {data.firstName}
            //     </h5>
            //     <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            //       LastName : {data.lastName}
            //     </h5>

            //   </div>
            <div
              key={data.id}
              className="w-[250px] px-3 py-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="mb-2 text-sm  tracking-tight text-gray-900 dark:text-white">
                FirstName - {data.firstName}
              </h5>
              <h5 className="mb-2 text-sm  tracking-tight text-gray-900 dark:text-white">
                LastName - {data.lastName}
              </h5>

              <div className="flex gap-5">
                <Link to={`/edit/${data.id}`} >
              
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  
                >
                  Edit
                </button>
                </Link>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => handleDelete(data.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
