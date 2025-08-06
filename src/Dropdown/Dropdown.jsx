import React, { useState } from 'react'
import Dropdownbutton from './Dropdownbutton';


const Dropdown = ({buttonText,className = "",icon  }) => {
    const [open,setopen]= useState(false);

    const  togglecdropdown=()=> {
        setopen((open)=> !open);
    };
  return (
    <div >
        <Dropdownbutton className={` ${className}  bg-white  rounded md:gap-2 shadow-md border cursor-pointer`}  toggle={togglecdropdown} open={open} icon={icon} >{buttonText}</Dropdownbutton>
        
    </div>
  )
}

export default Dropdown;