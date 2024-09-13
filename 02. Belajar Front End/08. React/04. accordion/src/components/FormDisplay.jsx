import React from "react";

const FormDisplay = ( {nama, email} ) => {
    return (
        <>
            <div className="flex flex-col mt-5 ms-0.5 space-y-2">
                <h2 className="mb-2">Data Anda</h2>
                <p>Nama Anda : {nama}</p>
                <p>Email Anda : {email}</p>
            </div>
        </>
    )
}

export default FormDisplay;