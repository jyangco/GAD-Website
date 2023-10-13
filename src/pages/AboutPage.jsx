import React from 'react'

import Layout from '../components/Layout'

function AboutPage() {
    return (
        <Layout>
            <div className="mx-14 p-5 mobile-lg:!mx-5 mobile-lg:!p-2 h-[100vh] overflow-hidden">
                <div className="ribbon">
                    <strong className="ribbon-content text-4xl">Mission, Vision and GAD Goals</strong>
                </div>
                <div className='h-[70vh] mobile-lg:!h-[60vh] overflow-x-hidden overflow-y-auto'>
                    <section className='p-0 mobile-lg:!p-3'>
                        <div className="flex flex-wrap justify-between">
                            <div id="container-holder" className="mobile-lg:!w-[100%] mobile-lg:!my-5 w-[32%] shadow-lg border rounded-lg h-[50vh]">
                                <div className="text-container">
                                    <div className="text-center">
                                        <div id="text-content" className="translate-y-[-10%] mobile-lg:!translate-y-[-30%] mobile-lg:!h-[45vh] text-left mt-56 h-[50vh] p-5">
                                            By 2025, SEI shall be the GAD Leader in STEM Education
                                        </div>
                                        <i className="fas fa-chevron-down text-xl"></i>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <img className='w-[100px] pt-28' src={window.location.origin + '/vision.png'} alt=""/>
                                </div>
                                <div className='mt-7'/>
                                <div className="text-7xl text-center font-extrabold mobile-lg:!text-6xl">
                                    VISION
                                </div> 
                            </div>
                            <div id="container-holder" className="mobile-lg:!w-[100%] mobile-lg:!my-5 w-[32%] shadow-lg border rounded-lg h-[50vh]">
                                <div className="text-container">
                                    <div className="text-center">
                                        <div id="text-content" className="translate-y-[-20%] mobile-lg:!translate-y-[-50%] mobile-lg:!h-[45vh] text-left mt-56 h-[50vh] p-5">
                                            To mainstream GAD in the administration of undergraduate and graduate scholarship programs, advance specialized trainings, promotion of S&T culture and the development of innovative science education programs.
                                        </div>
                                        <i className="fas fa-chevron-down text-xl"></i>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <img className='w-[100px] pt-20' src={window.location.origin + '/mission.png'} alt=""/>
                                </div>
                                <div className='mt-3'/>
                                <div className="text-7xl text-center font-extrabold mobile-lg:!text-6xl">
                                    MISSION
                                </div>
                            </div>
                            <div id="container-holder" className="mobile-lg:!w-[100%] mobile-lg:!my-5 w-[32%] shadow-lg border rounded-lg h-[50vh]">
                                <div className="text-container">
                                    <div className="text-center">
                                        <div id="text-content" className="translate-y-[-35%] mobile-lg:!translate-y-[-70%] mobile-lg:!h-[45vh] text-left mt-56 h-[50vh] p-5">
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
                                <div className="text-7xl text-center font-extrabold mobile-lg:!text-6xl">
                                    GOALS
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr className='my-3' />
                    <div className="flex flex-wrap justify-between px-1">
                        <div className="mobile-lg:!w-[100%] mobile-lg:!my-5 w-[32%]">
                            <div className="text-left text-xl my-1"> Address </div>
                            <div className="text-left text-lg my-1 hover:text-sky-500 hover:cursor-pointer">
                                <a href="https://maps.app.goo.gl/xtqE7aeg8MUffv2K6" target="_blank">
                                    <i className="fas fa-map-marker-alt me-2"></i>
                                    1st and 2nd Levels, Philippine Science Heritage Bldg., DOST Complex Gen. Santos Ave., Bicutan, Taguig City, Philippines 1631
                                </a>
                            </div>
                        </div>
                        <div className="mobile-lg:!w-[100%] mobile-lg:!my-5 w-[32%]">
                            <div className="text-left text-xl my-1"> Contact Info </div>
                            <div className="text-left text-lg my-1 hover:text-sky-500 hover:cursor-pointer">
                                <i className="fas fa-phone-alt me-2"></i>
                                Tel. Nos.: (632) 837-1359/(632) 837-1925
                            </div>
                            <div className="text-left text-lg my-1 hover:text-sky-500 hover:cursor-pointer">
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gad@sei.dost.gov.ph" target="_blank">
                                    <i className="fas fa-at me-2"></i>
                                    Email: gad@dost.gov.ph
                                </a>
                            </div>
                            <div className="text-left text-lg my-1 hover:text-sky-500 hover:cursor-pointer">
                                <a href="https://www.sei.dost.gov.ph" target="_blank">
                                    <i className="far fa-globe me-2"></i>
                                    Website: https://sei.dost.gov.ph
                                </a>
                            </div>
                        </div>
                        <div className="mobile-lg:!w-[100%] mobile-lg:!my-5 w-[32%]">
                            <div className="text-left text-xl my-1"> Social Media </div>
                            <div className="text-left text-xl my-1">
                                <a href="https://www.facebook.com/SEIultravioletPH" target="_blank" className='hover:text-blue-600'>
                                    <i className="fab fa-facebook-square"></i> Facebook
                                </a>
                            </div>
                            <div className="text-left text-xl my-1">
                                <a href="https://www.instagram.com/sei_gad2022/?fbclid=IwAR1gDJTmyksJeF4ZNCCIkrRV-XhnMA4_ejr1wMYXTIbDhODCFvzUkHE8KJU" target="_blank" className='hover:text-fuchsia-600'>
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage