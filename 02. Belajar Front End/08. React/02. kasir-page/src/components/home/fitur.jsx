import React from "react";

const Fitur = (props) => {
    return (
        <>  
                <div className="flex ">
                    <div className="flex flex-col min-h-max max-w-sm bg-white rounded-lg shadow-lg overflow-hidden justify-between">
                        <img 
                        className="h-60 w-full object-cover"
                        src={props.src}/>
                        <h2 className="font-bold p-4 text-xl">{props.title}</h2>
                        <p className="px-4 pb-4">{props.desctiption}</p>
                        <button 
                            className="pb-4 px-4 font-bold text-teal-500 text-left">
                            Pelajari Selengkapnya
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 inline-block ms-2 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
        </>
    )
}

export default Fitur;