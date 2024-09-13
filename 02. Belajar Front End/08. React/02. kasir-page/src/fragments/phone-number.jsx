import React from "react"
import 'flowbite'
const FormNumber = () => {
    return (
        <>  <div>
                <label 
                        className="block"
                        htmlFor="nomor-hp">
                        No. HP Aktif
                </label>
                <div className="relative">
                    <input 
                        className="rounded-md h-10  w-80 md:w-72 bg-slate-100 px-3 py-4 ps-20 border border-none focus:ring-teal-500"
                        type="number" 
                        name="nomor-hp" 
                        id="nomor-hp" 
                        placeholder="82xxxxxxxxx"
                    />
                    <div 
                        className="absolute inset-y-0 left-0">
                        <select 
                            className="rounded-l-md bg-slate-300 h-10 py-1 px-2 border-none w-18"
                            name="kode-negara" 
                            id="kode-negara">
                                
                            <option value="+62">+62</option>
                            <option value="+62">+1</option>
                            <option value="+62">+23</option>

                        </select>
                    </div>
                
                </div>
            </div>
        </>
    )
}

export default FormNumber;