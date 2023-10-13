import React, { useRef, useEffect } from 'react'
import Layout from '../components/Layout'

function PPA() {
    const divRefs = [useRef(), useRef(), useRef(), useRef()]

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                } 
                // else {
                //     entry.target.classList.remove('active')
                // }
            })
        })
        divRefs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current)
            }
        })
        return () => {
            divRefs.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current)
                }
            })
        }
    }, [])

    return (
        <Layout>
            <div className="mx-14 p-5 mobile-lg:!mx-5 mobile-lg:!p-2 h-[100vh] overflow-hidden">
                <div className="ribbon">
                    <strong className="ribbon-content text-4xl"> Program, Projects and Activities </strong>
                </div>
                <section className='px-0 h-[74vh] mobile-lg:!h-[55vh] overflow-y-auto overflow-x-hidden'>
                    <div className="view" ref={divRefs[0]}>
                        <div className='h-[74vh] border-b-4 my-2 p-3 mobile-lg:!h-full'>
                            <div className="flex flex-wrap">
                                <div className="w-[15%] mobile-lg:!w-[100%]">
                                    <div style={{textShadow:'8px -5px #800080'}} className="text-9xl mobile-lg:!text-8xl text-center break-all text-violet">
                                        2021
                                    </div>
                                </div>
                                <div className="w-[85%] mobile-lg:!w-[100%] h-[70vh] mobile-lg:!h-fit card px-4 rounded-e-3xl hover:shadow-2xl border-l-8 border-2 border-haze overflow-y-auto">
                                    <ul className="list-none">
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Production of New Information, Education and Communication Materials for Gender and Development
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Women in Science Feature Series in GAD Facebook Page
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Write shop for GAD Orientation of New Hires
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Participation of SEI employees in DOST-Wide/PCW Women’s Month Celebration
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Conducted DOST-SEI Women’s Month Celebration
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Participation in different activities of anti-Violence Against Women
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            onduct of Monthly GAD meetings
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Maintenance of Lactation Room
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Conduct of training workshop to craft SEI RA 11313 guidelines for GFPS and CODI
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Conduct of Gender Sensitivity Training for New Hires
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Establishment of VAW Deck/GAD Office
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            In-depth Gender Analysis Training/Workshop
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Development of GAD-focused assessment/evaluation tool for SEI-developed educational resources
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="view" ref={divRefs[1]}>
                        <div className='h-[74vh] border-b-4 my-2 p-3 mobile-lg:!h-full'>
                            <div className="flex flex-wrap">
                                <div className="w-[15%] mobile-lg:!w-[100%]">
                                    <div style={{textShadow:'8px -5px #800080'}} className="text-9xl mobile-lg:!text-8xl text-center break-all text-violet">
                                        2020
                                    </div>
                                </div>
                                <div className="w-[85%] mobile-lg:!w-[100%] h-[70vh] mobile-lg:!h-fit card px-4 rounded-e-3xl hover:shadow-2xl border-l-8 border-2 border-haze overflow-y-auto">
                                    <ul className="list-none">
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Conducted Online Gender Sensitivity Training for SEI Employees
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Conducted Online Gender Analysis Training for SEI Project Leaders
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Women in STEM Feature Series in GAD Facebook Page
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Conducted Online Webinar about RA11313 for SEI Employees and Clients
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Conducted the 2020 DOST-SEI Gender Mainstreaming Awards
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Conducted monthly GAD Meetings
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Participated and Shared Best Practices in the 2020 Gender and Development Focal Point Assembly
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="view" ref={divRefs[2]}>
                        <div className='h-[74vh] border-b-4 my-2 p-3 mobile-lg:!h-full'>
                            <div className="flex flex-wrap">
                                <div className="w-[15%] mobile-lg:!w-[100%]">
                                    <div style={{textShadow:'8px -5px #800080'}} className="text-9xl mobile-lg:!text-8xl text-center break-all text-violet">
                                        2019
                                    </div>
                                </div>
                                <div className="w-[85%] mobile-lg:!w-[100%] h-[70vh] mobile-lg:!h-fit card px-4 rounded-e-3xl hover:shadow-2xl border-l-8 border-2 border-haze overflow-y-auto">
                                    <ul className="list-none">
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Conducted Women’s Day forum
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Participation in activities of the National Women’s Month Celebration
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Conducted Monthly GAD Meetings
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Attended GAD Focal Point Assembly in Palawan last November 5-7, 2019
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Conducted Women Inspiring Women Forum
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Conducted GFPS-TWG Planning Workshop
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Conducted a film screening of BAGAHE in connection to the 18-day campaign toe End Violence Against Women
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Conducted Krav Maga self-defense training as a Campaign to End Violence Against Women
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Participated in the Training/Workshop on Gender Analysis
                                        </li>
                                        <li className="text-2xl my-2 mobile-lg:!text-base">
                                            Distributed GAD Kits during the Nulab Bus Roadtrip to Los Banos.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="view" ref={divRefs[3]}>
                        <div className='h-[74vh] border-b-4 my-2 p-3 mobile-lg:!h-full'>
                            <div className="flex flex-wrap">
                                <div className="w-[15%] mobile-lg:!w-[100%]">
                                    <div style={{textShadow:'8px -5px #800080'}} className="text-9xl mobile-lg:!text-8xl text-center break-all text-violet">
                                        2018
                                    </div>
                                </div>
                                <div className="w-[85%] mobile-lg:!w-[100%] h-[70vh] mobile-lg:!h-fit card px-4 rounded-e-3xl hover:shadow-2xl border-l-8 border-2 border-haze overflow-y-auto">
                                    <ul className="list-none">
                                        <li className='text-2xl my-2 mobile-lg:!text-base'>
                                            Partnership with the Philippine Business for Education in their STEMpower Our Girls initiative. 
                                        </li>
                                        <li className='text-2xl my-2 mobile-lg:!text-base'>
                                            Conduct of Women Inspiring Women Forum
                                        </li>
                                        <li className='text-2xl my-2 mobile-lg:!text-base'>
                                            Attended the Gender Summit 15 last June 18 and 19, in London, England and present during their parallel session
                                        </li>
                                        <li className='text-2xl my-2 mobile-lg:!text-base'>
                                            Conduct of #JuanaSays: A Talk on Magna Carta of Women
                                        </li>
                                        <li className='text-2xl my-2 mobile-lg:!text-base'>
                                            Participation of SEI personnel on DOST-Wide activities in celebration of the National Women’s Month
                                        </li>
                                        <li className='text-2xl my-2 mobile-lg:!text-base'>
                                            Participation of SEI personnel in different activities of during the Annual 19-Day Campaign to End Violence Against Women
                                        </li>
                                        <li className='text-2xl my-2 mobile-lg:!text-base'>
                                            Conducted Gender Sensitivity Training
                                        </li>
                                        <li className='text-2xl my-2 mobile-lg:!text-base'>
                                            Conducted Gender Fair Language Orientation for SEI’s Employees
                                        </li>
                                        <li className='text-2xl my-2 mobile-lg:!text-base'>
                                            Conducted monthly GAD TWG meetings
                                        </li>
                                        <li className='text-2xl my-2 mobile-lg:!text-base'>
                                            Attended the International GAD conference and/or GAD Focal Point Assemblies convened by PCW.
                                        </li>
                                        <li className='text-2xl my-2 mobile-lg:!text-base'>
                                            GAD related trainings for our GFPS members
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default PPA