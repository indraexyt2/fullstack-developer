import React from "react";
import { Link } from "react-router-dom";

const LoginEmail = () => {

    const TestLogin = (event) => {
        event.preventDefault()
        const Email = document.getElementById("email").value;
        const Pin = document.getElementById("pin").value;

        const EmailUser = localStorage.getItem("email");
        const PinUser = localStorage.getItem("pin");
        if (Email == EmailUser && Pin == PinUser) {
            window.location.href = "/";
        } else {
            alert("Email atau Pin yang anda masukkan salah");
        }
    }

    return (
        <> 
            <div className="">
            
                    <form onSubmit={TestLogin} className="mt-3 w-96 px-3">
                        <div className="flex flex-col">
                            <input 
                                className="flex-grow placeholder:text-sm rounded-md border-slate-500 focus:border-0 focus:ring-teal-500"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Aktif"/>
                            <input 
                                className="block flex-grow mt-5 rounded-md m"
                                type="number" 
                                name="pin"
                                id="pin"
                                placeholder="No. Pin" />
                            <button type="submit" className="bg-teal-500 flex-grow mt-5 rounded-md p-2 text-white font-medium px-6 hover:bg-teal-600 tracking-tight">
                                Masuk
                            </button>
                        </div>
                        
                    </form>
                    <div className="mt-4 text-sm text-center text-slate-600">
                        <a href="#">Lupa Pin?</a>
                    </div>
                    <div className="mt-10 text-center">
                        Belum punya akun? <Link className="text-teal-500 font-semibold" to="/register">Buat Akun</Link>
                    </div>
            </div>
        </>
    )
}

export default LoginEmail;