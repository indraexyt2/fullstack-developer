import React from 'react'
import 'flowbite'
import Input from '../fragments/input';
import FormNumber from '../fragments/phone-number';
import { UserIcon  } from '@heroicons/react/24/solid'
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const LoginPage = () => {

    const RegisUser = (e) => {
        e.preventDefault()
        console.log(e.target.email.value)
        localStorage.setItem("email", e.target.email.value)
        localStorage.setItem("password", e.target.password.value)
        localStorage.setItem("pin", e.target.pin.value)

    }

    return (
        <>  
        <Navbar />
            <div className='grid justify-center font-montserrat mt-20'>
                <div className='p-5 h-auto w-full'>
                    <h2 className='text-center font-bold text-3xl'>Daftar Akun</h2>
                    <p className='text-center mb-5'>Sudah punya akun? <Link className='text-teal-500 font-semibold' to="/login">Login Disini</Link></p>
                    <div className='grid'>
                        <form onSubmit={RegisUser}>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 justify-center'>
                                <Input 
                                    for="nama-lengkap" 
                                    type="text" 
                                    name="nama-lengkap" 
                                    id="nama-lengkap" 
                                    placeholder="Nama Lengkap"
                                >
                                    Nama Lengkap
                                </Input>

                                <Input 
                                    for="email"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="invalid:text-red-600 invalid:focus:ring-red-600"
                                >
                                    Email
                                </Input>
                                <Input 
                                    for="password"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                >
                                    Password
                                </Input>

                                <Input  
                                    for="konfirmasi-password"
                                    type="password"
                                    name="konfirmasi-password"
                                    id="konfirmasi-password"
                                    placeholder="Konfirmasi Password"
                                >
                                    Konfirmasi Password
                                </Input>
                                <FormNumber />
                                <Input
                                    for="kode-refferal"
                                    type="number"
                                    name="kode-refferal"
                                    id="kode-refferal"
                                    placeholder="Kode Refferal"
                                > Kode Refferal
                                </Input>
                                <Input
                                    for="pin"
                                    type="number"
                                    name="pin"
                                    id="pin"
                                    placeholder="Pin"
                                > Kode Refferal
                                </Input>
                                <div>
                                    <label className='block' htmlFor="username">Username</label>
                                    <div className="relative">
                                        <input 
                                            className='rounded-md w-full h-10 ps-12 bg-slate-100 px-3 py-4 placeholder:text-sm border border-none focus:ring-teal-500'
                                            type="text" 
                                            name="username" 
                                            id="username"
                                            placeholder='Username' />
                                        <div className="absolute inset-y-0 left-0 p-2 bg-slate-200 rounded-l-md">
                                         <UserIcon className="size-6 text-teal-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-80 md:w-full mt-3'>
                                <input className='mb-0.5 text-teal-500 focus:ring-0 focus:border-none rounded-sm' type="checkbox" name="term" id="term" />
                                <label className='ms-2' htmlFor="term">Saya menyetujui Syarat Ketentuan & Kebijakan Privasi</label>
                            </div>
                            <button className='w-80 md:w-full mt-3 bg-teal-600 p-2 rounded-md text-white font-semibold' type="submit">Daftar Sekarang</button>

                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;