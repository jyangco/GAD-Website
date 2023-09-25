import React from 'react'
import { Link } from 'react-router-dom'

function SubHeader() {
    return (
        <nav className="w-full h-12 bg-purplehaze border-b-2 border-slate-950 sticky top-0">
            <div className="container mx-auto">
                <div className="flex justify-center text-xl py-2 font-bold">
                    <Link to={'/'} className='text-decoration-none px-4 border-x-2 border-l-4 hover:bg-slate-200 hover:text-black'> HOME </Link>
                    <button className='px-4 border-x-2 hover:bg-slate-200 hover:text-black'> IEC MATERIALS </button>
                    <button className='px-4 border-x-2 hover:bg-slate-200 hover:text-black'> PROGRAMS/PROJECTS/ACTIVITIES </button>
                    <Link to={'/About-Page'} className='text-decoration-none px-4 border-x-2 border-r-4 hover:bg-slate-200 hover:text-black'> ABOUT </Link>
                </div>
            </div>
        </nav>
    )
}

export default SubHeader