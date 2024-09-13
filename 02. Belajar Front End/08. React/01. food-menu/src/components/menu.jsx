import React from 'react'
import 'preline'

function Menu(props) {
    return (
    <>
        <div className='flex p-5'>
            <div className="flex flex-col bg-white border shadow-sm rounded-xl w-100 sm:w-72 h-full">
                <img className="rounded-t-xl" src={props.FoodObj.image_url} alt="Card Image"></img>
                <div className="p-4 md:p-5 flex flex-col justify-between flex-grow">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">
                            {props.FoodObj.name}
                        </h3>
                        <p className="mt-1 text-gray-500">
                            {props.FoodObj.description}
                        </p>
                    </div>
                    <div className="mt-4">
                        <a className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                            {props.FoodObj.price}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Menu;
