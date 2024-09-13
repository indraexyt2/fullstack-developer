import React from "react";
import LoginHandhone from "../fragments/login-handphone";
import LoginEmail from "../fragments/login-email";
import { useState } from "react";
import Navbar from "./navbar";

const LoginPage2 = () => {
    const [handPhoneLogin, sethandPhoneLogin] = useState(true);

    return (
        <>  
            <Navbar />
            <div className="w-full h-screen flex md:pt-14 flex-row ">
                <div className=" hidden lg:flex flex-col justify-center items-center flex-auto w-80 bg-slate-100 ">
                    <img className="pb-16" src="https://cdn.prod.website-files.com/5f17b3a6740e17c63ab5e642/62d7c876a5ed6f714de58317_id%20v2%20slide%204.png"/>
                    <h2 className="text-center font-bold text-xl text-slate-600 -mt-16 mb-2">Terima pembayaran nontunai</h2>
                    <p className="text-center px-4">Mudahkan pelanggan membayar pakai e-wallet melalui QRIS dan virtual account.</p>
                </div>
                <div className="flex flex-col flex-auto w-14 h-full bg-white pt-24 lg:pt-4 lg:justify-center items-center">
                    <h2 className="font-bold text-4xl text-teal-500 mb-2 block">KasirQ</h2>
                    <h3 className="font-semibold text-lg text-slate-600 block mb-7">Masuk ke Dashboard</h3>
                    <div className="grid grid-cols-2 space-x-1 mb-2">
                        <button onClick={() => sethandPhoneLogin(true)} className={`w-44 border-b-2 focus:border-teal-500 focus:border-b-2 py-2 w-18 text-left ${handPhoneLogin ? "border-teal-500 border-b-2" : ""}`}>No. Handphone</button>
                        <button onClick={() => sethandPhoneLogin(false)} className={`w-44 border-b-2 focus:border-teal-500 focus:border-b-2 py-2 w-18 text-left ${!handPhoneLogin ? "border-teal-500 border-b-2" : ""}`}>Email</button>
                    </div>
                        {handPhoneLogin ? <LoginHandhone /> : <LoginEmail />}
                </div>
                
            </div>
        </>
    )
}

export default LoginPage2;