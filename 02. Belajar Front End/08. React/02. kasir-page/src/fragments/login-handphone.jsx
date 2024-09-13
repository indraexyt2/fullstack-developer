import React from "react";
import { Link } from "react-router-dom";

const LoginHandhone = () => {
    return (  
        <>
            <div>
                <div>
                    <form className="mt-3 w-96 px-3">
                        <div className="flex">
                            <select 
                                className="inline-block rounded-md w-24 me-2 border-slate-500 ring-0 focus:ring-teal-500 focus:ring-1 focus:border-0"
                                name="kode-negara" 
                                id="kode-negara">
                                    <option value="ID">+62</option>
                                    <option value="MY">+23</option>
                                    <option value="IN">+22</option>
                            </select>
                            <input 
                                className="flex-grow placeholder:text-sm rounded-md border-slate-500 focus:border-0 focus:ring-teal-500"
                                type="number"
                                placeholder="No. Handphone"/>
                        </div>
                        <input 
                            className="block w-full mt-5 rounded-md m"
                            type="number" 
                            placeholder="No. Pin"
                            max="8" />
                        <button className="bg-teal-500 w-full mt-5 rounded-md p-2 text-white font-medium px-6 hover:bg-teal-600 tracking-tight">
                            Masuk
                        </button>
                    </form>
                    <div className="mt-4 text-sm text-center text-slate-600">
                        <a href="#">Lupa Pin?</a>
                    </div>
                    <div className="mt-10 text-center">
                        Belum punya akun? <Link className="text-teal-500 font-semibold" to="/register">Buat Akun</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginHandhone;