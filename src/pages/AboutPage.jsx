import React from 'react'

import Layout from '../components/Layout'

function AboutPage() {
    return (
        <Layout>
            <div className="container mx-auto p-5">
                <section className='p-0 mb-5'>
                    <div className="flex justify-between">
                        <div id="container-holder" className="w-[32%] shadow rounded-lg h-[50vh]">
                            <div className="text-container">
                                <div className="text-center">
                                    <div id="text-content" className="translate-y-[-5vh] text-left mt-56 h-[50vh] p-5">
                                        By 2025, SEI shall be the GAD Leader in STEM Education
                                    </div>
                                    <i className="fas fa-chevron-down text-xl"></i>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img className='w-[100px] pt-28' src={window.location.origin + '/vision.png'} alt=""/>
                            </div>
                            <div className='mt-7'/>
                            <div className="text-7xl text-center font-extrabold">
                                VISION
                            </div> 
                        </div>
                        <div id="container-holder" className="w-[32%] shadow rounded-lg h-[50vh]">
                            <div className="text-container">
                                <div className="text-center">
                                    <div id="text-content" className="translate-y-[-10vh] text-left mt-56 h-[50vh] p-5">
                                        To mainstream GAD in the administration of undergraduate and graduate scholarship programs, advance specialized trainings, promotion of S&T culture and the development of innovative science education programs.
                                    </div>
                                    <i className="fas fa-chevron-down text-xl"></i>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img className='w-[100px] pt-20' src={window.location.origin + '/mission.png'} alt=""/>
                            </div>
                            <div className='mt-3'/>
                            <div className="text-7xl text-center font-extrabold">
                                MISSION
                            </div>
                        </div>
                        <div id="container-holder" className="w-[32%] shadow rounded-lg h-[50vh]">
                            <div className="text-container">
                                <div className="text-center">
                                    <div id="text-content" className="translate-y-[-13vh] text-left mt-56 h-[50vh] p-5">
                                        <ol className="list-decimal ps-5">
                                            <li className="p-1"> Developed gender responsive S&T human resource programs </li>
                                            <li className="p-1"> Established GAD Knowledge Management System </li>
                                            <li className="p-1"> Strengthened GAD (CODI, GFPS) mechanism </li>
                                            <li className="p-1"> Intensified campaigns and intervention programs to provide equal opportunities for both male and female in accessing and availing DOST STEAM scholarship programs </li>
                                        </ol>
                                    </div>
                                    <i className="fas fa-chevron-down text-xl"></i>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img className='w-[150px] pt-24' src={window.location.origin + '/goal.png'} alt=""/>
                            </div>
                            <div className='mt-5'/>
                            <div className="text-7xl text-center font-extrabold">
                                GOALS
                            </div>
                        </div>
                    </div>
                </section>
                <hr className='my-5' />
            </div>
        </Layout>
    )
}

export default AboutPage