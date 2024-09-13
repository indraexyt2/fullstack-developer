import React from "react";

const Input = (props) => { 
    return (
        <>
             <div className='grid grid-cols-1 w-full md:w-72'>
                <label className='block font-th' 
                htmlFor={props.for}
                >{props.children}
                </label>
                <input 
                    className={`rounded-md h-10 bg-slate-100 px-3 py-4 placeholder:text-sm border border-none focus:ring-teal-500 ${props.className}`}
                    type={props.type} 
                    name={props.name} 
                    id={props.id} 
                    placeholder={props.placeholder} />
            </div>
        </>
    )
}

export default Input;