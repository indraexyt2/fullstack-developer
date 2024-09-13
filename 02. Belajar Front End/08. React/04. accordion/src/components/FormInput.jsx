import React from 'react'
const FormInput = ( {onChangeName, onChangeEmail, onSubmit}) => {

    return (
        <>
            <div className='flex flex-row gap-5'>
                    <div className='flex flex-col'>
                        <label 
                            className='ms-0.5'
                            htmlFor="nama">
                                Nama
                        </label>
                        <input 
                            className='focus:outline-0 bg-slate-100 rounded-md py-1 px-2'
                            type="text"
                            name='nama'
                            id='nama'
                            placeholder='Nama Lengkap'
                            onChange={(e) => onChangeName(e.target.value)}/>
                    </div>
                    <div className='flex flex-col'>
                        <label 
                            htmlFor="email"
                            className='ms-0.5'>
                            Email
                        </label>
                        <input 
                            className='focus:outline-0 bg-slate-100 rounded-md py-1 px-2'
                            type="email"
                            name='email'
                            id='email'
                            placeholder='Email Aktif' 
                            onChange={(e) => onChangeEmail(e.target.value)}/>
                    </div>
                    <div className='flex flex-col-reverse'>
                        <button 
                            className='bg-slate-100 rounded-md py-1 px-2'
                            onClick={onSubmit}>
                                Submit
                        </button>
                    </div>
             </div>
        </>
    )
}

export default FormInput;