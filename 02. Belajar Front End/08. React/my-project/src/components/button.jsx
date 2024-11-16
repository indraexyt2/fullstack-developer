import React from 'react'

const Button = ({ num, onClick, activeTab }) => {
  return (
    <div>
        <button
            onClick={onClick}
            className={`w-12 border-b-2 pb-1 ${activeTab === num ? 'border-teal-600' : ''}`}>
            Tab { num + 1 }
        </button>
    </div>
  )
}

export default Button
