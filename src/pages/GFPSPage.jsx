import React from 'react'

import Layout from '../components/Layout'

function GFPSPage() {
    return (
        <Layout>
            <div className="mx-14 p-5 mobile-lg:!mx-5 mobile-lg:!p-2 h-[100vh] overflow-hidden">
                <div className="ribbon">
                    <strong className="ribbon-content text-4xl">GFPS Committee</strong>
                </div>
                <div className='h-[74vh] mobile-lg:!h-[60vh] overflow-x-hidden overflow-y-auto'>
                    <section className='px-0 py-5'>
                        <div className="text-left text-4xl font-bold font-serif my-5">
                            EXECUTIVE COMMITTEE
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-[50%] p-4 mobile-lg:!w-[100%]">
                                <div className="flex justify-end mobile-lg:!justify-center">
                                    {/* incase of new member copy this and change the details */}
                                    <div className="content">
                                        <div className="flip-card">
                                            <div className="inner">
                                                <div className="front">
                                                    <img id="photo" className="rounded-3xl" src={window.location.origin + '/TWG/Dr.Biyo.png'}></img>
                                                </div>
                                                <div className="back rounded-3xl">
                                                    <div className="text-center text-xl font-sans">
                                                        <p className="m-0 italic"> Dr. Josette T. Biyo </p>
                                                        <p className="m-0"> Director, SEI </p>
                                                        <p className="m-0"> Chairperson </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end here */}
                                </div>
                            </div>
                            <div className="w-[50%] p-4 mobile-lg:!w-[100%]">
                                <div className="flex justify-start mobile-lg:!justify-center">
                                    <div className="content">
                                        <div className="flip-card">
                                            <div className="inner">
                                                <div className="front">
                                                    <img id="photo" className="rounded-3xl" src={window.location.origin + '/TWG/Engr.Albert.png'}></img>
                                                </div>
                                                <div className="back rounded-3xl">
                                                    <div className="text-center text-xl font-sans">
                                                        <p className="m-0 italic"> Engr. Albert G. Mariño </p>
                                                        <p className="m-0"> Deputy Director, SEI </p>
                                                        <p className="m-0"> Member </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[33%] p-4 mobile-lg:!w-[100%]">
                                <div className="flex justify-center">
                                    <div className="content">
                                        <div className="flip-card">
                                            <div className="inner">
                                                <div className="front">
                                                    <img id="photo" className="rounded-3xl" src={window.location.origin + '/TWG/SirGavina.png'}></img>
                                                </div>
                                                <div className="back rounded-3xl">
                                                    <div className="text-center text-xl font-sans">
                                                        <p className="m-0 italic"> Peter Gerry P. Gavina </p>
                                                        <p className="m-0"> Chief, STSD </p>
                                                        <p className="m-0"> Member </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[33%] p-4 mobile-lg:!w-[100%]">
                                <div className="flex justify-center">
                                    <div className="content">
                                        <div className="flip-card">
                                            <div className="inner">
                                                <div className="front">
                                                    <img id="photo" className="rounded-3xl" src={window.location.origin + '/TWG/SirBue.jpg'}></img>
                                                </div>
                                                <div className="back rounded-3xl">
                                                    <div className="text-center text-xl font-sans">
                                                        <p className="m-0 italic"> Philip J. Bue </p>
                                                        <p className="m-0"> Chief, FAD </p>
                                                        <p className="m-0"> Member </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[33%] p-4 mobile-lg:!w-[100%]">
                                <div className="flex justify-center">
                                    <div className="content">
                                        <div className="flip-card">
                                            <div className="inner">
                                                <div className="front">
                                                    <img id="photo" className="rounded-3xl" src={window.location.origin + '/TWG/MaamGayya.png'}></img>
                                                </div>
                                                <div className="back rounded-3xl">
                                                    <div className="text-center text-xl font-sans">
                                                        <p className="m-0 italic"> Cynthia T. Gayya </p>
                                                        <p className="m-0"> Chief, SEID </p>
                                                        <p className="m-0"> Member </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='p-0 py-5'>
                        <div className="text-left text-4xl font-bold font-serif my-5">
                            TECHNICAL WORKING GROUP
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-[100%] p-4 mobile-lg:!w-[100%]">
                                <div className="flex justify-center">
                                    <div className="content">
                                        <div className="flip-card">
                                            <div className="inner">
                                                <div className="front">
                                                    <img id="photo" className="rounded-3xl" src={window.location.origin + '/TWG/MaamdeLara.png'}></img>
                                                </div>
                                                <div className="back rounded-3xl">
                                                    <div className="text-center text-xl font-sans">
                                                        <p className="m-0 italic"> Liezl M. de Lara </p>
                                                        <p className="m-0"> Chairperson </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[25%] p-4 mobile-lg:!w-[100%]">
                                <div className="flex justify-center">
                                    <div className="content">
                                        <div className="flip-card">
                                            <div className="inner">
                                                <div className="front">
                                                    <img id="photo" className="rounded-3xl" src={window.location.origin + '/TWG/MaamMiniao.png'}></img>
                                                </div>
                                                <div className="back rounded-3xl">
                                                    <div className="text-center text-xl font-sans">
                                                        <p className="m-0 italic"> Jemmalyn Miniao-Saga </p>
                                                        <p className="m-0"> Member </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[25%] p-4 mobile-lg:!w-[100%]">
                                <div className="flex justify-center">
                                    <div className="content">
                                        <div className="flip-card">
                                            <div className="inner">
                                                <div className="front">
                                                    <img id="photo" className="rounded-3xl" src={window.location.origin + '/TWG/MaamGayas.png'}></img>
                                                </div>
                                                <div className="back rounded-3xl">
                                                    <div className="text-center text-xl font-sans">
                                                        <p className="m-0 italic"> Jobelle P. Gayas </p>
                                                        <p className="m-0"> Member </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[25%] p-4 mobile-lg:!w-[100%]">
                                <div className="flex justify-center">
                                    <div className="content">
                                        <div className="flip-card">
                                            <div className="inner">
                                                <div className="front">
                                                    <img id="photo" className="rounded-3xl" src={window.location.origin + '/TWG/MaamAgbuis.png'}></img>
                                                </div>
                                                <div className="back rounded-3xl">
                                                    <div className="text-center text-xl font-sans">
                                                        <p className="m-0 italic"> Maria Elena Constantito-Agbuis </p>
                                                        <p className="m-0"> Member </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[25%] p-4 mobile-lg:!w-[100%]">
                                <div className="flex justify-center">
                                    <div className="content">
                                        <div className="flip-card">
                                            <div className="inner">
                                                <div className="front">
                                                    <img id="photo" className="rounded-3xl" src={window.location.origin + '/TWG/MaamAquino.png'}></img>
                                                </div>
                                                <div className="back rounded-3xl">
                                                    <div className="text-center text-xl font-sans">
                                                        <p className="m-0 italic"> Malen Joy Belgado-Aquino </p>
                                                        <p className="m-0"> Member </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[25%] p-4 mobile-lg:!w-[100%]">
                                <div className="flex justify-center">
                                    <div className="content">
                                        <div className="flip-card">
                                            <div className="inner">
                                                <div className="front">
                                                    <img id="photo" className="rounded-3xl" src={window.location.origin + '/TWG/MaamEsquivel.png'}></img>
                                                </div>
                                                <div className="back rounded-3xl">
                                                    <div className="text-center text-xl font-sans">
                                                        <p className="m-0 italic"> Susana F. Esquivel </p>
                                                        <p className="m-0"> Member </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[25%] p-4 mobile-lg:!w-[100%]">
                                <div className="flex justify-center">
                                    <div className="content">
                                        <div className="flip-card">
                                            <div className="inner">
                                                <div className="front">
                                                    <img id="photo" className="rounded-3xl" src={window.location.origin + '/TWG/MaamMedina.png'}></img>
                                                </div>
                                                <div className="back rounded-3xl">
                                                    <div className="text-center text-xl font-sans">
                                                        <p className="m-0 italic"> Joana Teresa Y. Medina </p>
                                                        <p className="m-0"> Member </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[25%] p-4 mobile-lg:!w-[100%]">
                                <div className="flex justify-center">
                                    <div className="content">
                                        <div className="flip-card">
                                            <div className="inner">
                                                <div className="front">
                                                    <img id="photo" className="rounded-3xl" src={window.location.origin + '/TWG/MaamManila.png'}></img>
                                                </div>
                                                <div className="back rounded-3xl">
                                                    <div className="text-center text-xl font-sans">
                                                        <p className="m-0 italic"> Mary Ann A. Manila </p>
                                                        <p className="m-0"> Member </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[25%] p-4 mobile-lg:!w-[100%]">
                                <div className="flex justify-center">
                                    <div className="content">
                                        <div className="flip-card">
                                            <div className="inner">
                                                <div className="front">
                                                    <img id="photo" className="rounded-3xl" src={window.location.origin + '/TWG/MPRecio.png'}></img>
                                                </div>
                                                <div className="back rounded-3xl">
                                                    <div className="text-center text-xl font-sans">
                                                        <p className="m-0 italic"> Madelyn P. Recio </p>
                                                        <p className="m-0"> Secretariat </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default GFPSPage