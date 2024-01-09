import React,{ useState} from 'react'

const Main = () => {
    const [cnt,setCnt] = useState(0);
    const [margin,setMargin] = useState(1);

  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold font-mono uppercase bg-gray-200 w-full text-center p-4 shadow-lg shadow-gray-400'>React Counter</h1>
        <div className='flex flex-col mt-4 bg-gray-400 text-white items-center justify-center m-4 px-2 sm:px-8 pt-2 pb-10 md:px-10 rounded-md'>
            {/* Count */}
            <h2 className='text-4xl'>{cnt}</h2>
            {/* Subtract or add */}
            <div className='flex items-center'>
                <button onClick={() => setCnt(cnt-parseInt(margin))} type='button' className='m-2 px-4 py-1 bg-gray-200 rounded-md text-black'>-</button>
                <button onClick={() => setCnt(prev => prev+parseInt(margin))} type='button' className='m-2 px-4 py-1 bg-gray-200 rounded-md text-black'>+</button>
            </div>
            <div className='flex space-x-2'>
                <p>Increment/Decrement by: </p>
                <input onChange={(e) => setMargin(e.target.value)} value={margin} type="number" className='text-black focus:outline-none remove-arrow w-10'/>
            </div>
            <button onClick={() => setCnt(0)} type='button' className='m-2 px-6 py-2 bg-sky-500 hover:bg-sky-200 text-white hover:text-black rounded-lg'>Reset</button>
        </div>
    </div>
  )
}

export default Main