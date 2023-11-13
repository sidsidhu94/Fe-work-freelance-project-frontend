import React from "react";
import { GrAdd } from "react-icons/gr";
import { Link } from "react-router-dom";

const AddWork = () => {
  return (
    <Link to="/addwork" >
    <div
      className="relative
    cursor-pointer
    hover:opacity-70
    transition
    border-dashed
    border-2
    
    border-neutral-300
    flex
    flex-col
    justify-center
    items-center
    gap-4
    text-neutral-600
    w-72
    h-72
     rounded-lg
     "
     
    
    >
      <GrAdd />
      Add your work here
    </div>
    </Link>
  );
};

export default AddWork;
