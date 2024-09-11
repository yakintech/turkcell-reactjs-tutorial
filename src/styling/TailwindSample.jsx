import React from 'react'

function TailwindSample() {


    return <>
        {/* <div className='w-40 h-40 bg-red-500 border-solid'>
            Hello
        </div> */}
        <div className='flex space-x-4'>
            <div className='bg-red-500 w-1/3 h-16'>
                BOX-1
            </div>
            <div className='bg-red-500 w-1/3 h-16'>
                BOX-2
            </div>
            <div className=' bg-red-500 w-1/3 h-16'>
                BOX-3
            </div>
        </div>
        <hr />
        <div className='flex justify-center items-center h-56 w-56 border border-solid border-black'>
                Çağatay
        </div>
    </>
}

export default TailwindSample