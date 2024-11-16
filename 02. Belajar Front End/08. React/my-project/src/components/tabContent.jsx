import React from 'react'

const Content = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h2 className='text-lg font-semibold mt-2'>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  )
}

export default Content;
