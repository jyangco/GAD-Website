import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'

function IECMaterials() {
    return (
        <Layout>
            <div className="mx-14 p-5 mobile-lg:!mx-5 mobile-lg:!p-2 h-[100vh] overflow-hidden">
                <div className="ribbon">
                    <strong className="ribbon-content text-4xl"> IEC Materials </strong>
                </div>
                <section className='px-0 h-[74vh] mobile-lg:!h-[65vh] overflow-y-auto overflow-x-hidden'>
                    <div className="flex flex-wrap justify-start">
                        <Link className="text-decoration-none" to="/IEC-Materials/Gallery">
                            <div id="folder" className="mobile-lg:mx-1 mobile-lg:p-1 mx-2 p-2 hover:bg-sky-50 hover:cursor-pointer w-[200px] mobile-lg:!w-[150px] h-[full] text-center rounded-lg">
                                <i className="fad fa-folders text-9xl mobile-lg:!text-8xl"></i>
                                <div className='text-xl font-bold text-2xl'> GALLERY </div>
                            </div>
                        </Link>
                        <div id="folder" className="mobile-lg:mx-1 mobile-lg:p-1 mx-2 p-2 hover:bg-sky-50 hover:cursor-pointer w-[200px] mobile-lg:!w-[150px] h-[full] text-center rounded-lg">
                            <i className="fad fa-folders text-9xl mobile-lg:!text-8xl"></i>
                            <div className='text-xl font-bold text-2xl'> SPECIAL ORDERS/ MEMORANDUMS </div>
                        </div>
                        <div id="folder" className="mobile-lg:mx-1 mobile-lg:p-1 mx-2 p-2 hover:bg-sky-50 hover:cursor-pointer w-[200px] mobile-lg:!w-[150px] h-[full] text-center rounded-lg">
                            <i className="fad fa-folders text-9xl mobile-lg:!text-8xl"></i>
                            <div className='text-xl font-bold text-2xl'> PUBLICATIONS </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default IECMaterials