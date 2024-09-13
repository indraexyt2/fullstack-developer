import React from "react";

const Hero = () => {
    return (
        <>  
            <div className="bg-slate-50 mt-16 p-5 font-montserrat shadow-sm">
                <div className="flex flex-col md:flex-row w-full h-auto p-2">
                    <div className="flex flex-col">
                        <div className="w-auto lg:px-20">
                            <h2 className="font-bold text-4xl text-slate-700 lg:px-14 pt-4 lg:pt-14 mt-2 leading-relaxed">Aplikasi Kasir Lengkap dan Terjangkau</h2>
                            <p className=" mt-3 lg:ms-14 p-1 leading-relaxed w-full lg:w-72">Semudah itu mengelola apa pun jenis usahanya. Karena Qasir bisa melakukan apa saja yang dibutuhkan usahamu.</p>
                            <button className="bg-teal-500 p-2 px-4 rounded-full text-white mt-5 lg:ms-14 hover:bg-teal-600 ">Coba Sekarang</button>
                            <button className="bg-transparent-500 p-2 px-4 rounded-full border-2 border-teal-500 hover:border-teal-700 text-teal-500 mt-5 ms-2">Beli Sekarang</button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full md:w-auto">
                        <img className="w-full md:w-auto justify-center" src="https://cdn.prod.website-files.com/5f17b3a6740e17c63ab5e642/64082bbb56bc2fa1dda1c53f_home-image.png" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;