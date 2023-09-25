import React from 'react'
import { Link } from 'react-router-dom' 

function Header() {
    return (
        <nav className="w-full h-24 bg-haze border-b-2 border-slate-950">
            <div className="container mx-auto">
                <div className='container h-24 py-2 flex justify-between'>
                    <div className="w-25 flex">
                        <img className='h-full p-1' src={window.location.origin + '/SEI_LOGO.png'} />
                        <img className='h-full p-1' src={window.location.origin + '/GAD-Logo_3D-nobg.png'} />
                    </div>
                    <div className="flex text-xl py-2 font-bold">
                        <Link to={'/'} className='p-4 border-x-2 border-l-4 hover:bg-slate-200 hover:text-black'> HOME </Link>
                        <Link to={'#'} className='p-4 border-x-2 hover:bg-slate-200 hover:text-black'> IEC MATERIALS </Link>
                        <Link to={'#'} className='p-4 border-x-2 hover:bg-slate-200 hover:text-black'> PROGRAMS/PROJECTS/ACTIVITIES </Link>
                        <Link to={'/About-Page'} className='p-4 border-x-2 border-r-4 hover:bg-slate-200 hover:text-black'> ABOUT </Link>
                    </div>
                    {/* <div className="mx-12 font-bold text-5xl py-4 text-coffee">
                        DOST-SEI Gender And Development(GAD) Corner
                    </div> */}
                    {/* <div className="w-5 py-2 text-2xl">
                        <a href="https://www.facebook.com/SEIultravioletPH" target="_blank" className='hover:text-blue-600'>
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/sei_gad2022/?fbclid=IwAR1gDJTmyksJeF4ZNCCIkrRV-XhnMA4_ejr1wMYXTIbDhODCFvzUkHE8KJU" target="_blank" className='hover:text-fuchsia-600'>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

export default Header