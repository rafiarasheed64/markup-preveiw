import React, { useEffect, useState } from 'react'

const Markup = () => {
    const [input,setInput] = useState()
    const [result,setResult] = useState()
    useEffect(()=>{
        setResult(input)
    }, [input])
  return (
    <div class='flex flex-col items-center p-10'>
        <h1 class='text-4xl font-bold text-blue-600'>MARKUP PREVEIW</h1>
        <div class='flex mt-5 w-5/12 border-solid border-2 border-black'>
            <textarea class='p-5 border-solid border-2 border-sky-500' onChange={(e)=> setInput(e.target.value)} name="" id="" cols="30" rows="10" placeholder='Type to see the result'></textarea>
            <div class='p-5'>
                <p>{result}</p>
            </div>
        </div>
    </div>
  )
}

export default Markup