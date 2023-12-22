import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'
import Loader from '../components/Loader'
import Modal from '../components/Modal'

import { images } from '../components/images'

function NWMC() {
    const [ year, setYear ] = useState(2023)
    const [ loading, setLoading ] = useState(true)
    const [ show, setShow ] = useState(false)
    const [ selectedPic, setSelectedPic] = useState("")

    const selectYear = (e) => {
        setYear(e)
    }

    const openModal = (e) => {
        setSelectedPic(e)
        setShow(true)
    }

    const closeModal = (e) => {
        e.preventDefault()
        setShow(false)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    if (loading == true) {
        return(
            <Loader/>
        )
    }

    return (
        <Layout>
            <Modal show={show} handleClose={closeModal}>
                <div className="wrapper-images position-relative">
                    <img className='w-auto mobile-lg:w-[90vw] h-[70vh] mobile-lg:h-auto' src={window.location.origin + selectedPic} />
                </div>
            </Modal>
            <div className="mx-14 p-5 mobile-lg:!mx-5 mobile-lg:!p-2 h-[100vh]">
                <div className="mt-[100px] h-[86vh] overflow-y-auto">
                    <Link className="float-left text-decoration-none text-black text-xl" to="/IEC-Materials/Gallery">
                        <i className="fas fa-long-arrow-left"></i>
                    </Link>
                    <div className="flex">
                        <div className="w-25 mobile-lg:py-4">
                            <div className="mx-5 mobile-lg:max-w-[100px] mobile-lg:max-h-[100px] mobile-lg:py-8 mobile-lg:px-3 mobile-lg:text-xl w-[220px] h-[220px] px-5 py-[80px] text-3xl text-center rounded-full border border-violet border-[5px]">
                                NWMC
                            </div>
                        </div>
                        <div className="w-75">
                            <div className="mobile-lg:text-2xl text-8xl mobile-lg:p-1 px-10 py-5">
                                National Women's Month Celebration
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 mobile-lg:mt-0 mobile-lg:text-sm py-3 flex justify-start overflow-x-auto">
                        <div onClick={() => selectYear(2023)} className="mx-5 mobile-lg:mx-1 mobile-lg:py-4 mobile-lg:px-3 mobile-lg:max-w-[60px] mobile-lg:max-h-[60px] px-7 py-8 w-[100px] h-[100px] px-7 py-8 w-[100px] h-[100px] rounded-full border border-slate-400 border-[5px] hover:border-slate-200 hover:cursor-pointer">
                            2023
                        </div>
                        <div onClick={() => selectYear(2022)} className="mx-5 mobile-lg:mx-1 mobile-lg:py-4 mobile-lg:px-3 mobile-lg:max-w-[60px] mobile-lg:max-h-[60px] px-7 py-8 w-[100px] h-[100px] px-7 py-8 w-[100px] h-[100px] rounded-full border border-slate-400 border-[5px] hover:border-slate-200 hover:cursor-pointer">
                            2022
                        </div>
                        <div onClick={() => selectYear(2021)} className="mx-5 mobile-lg:mx-1 mobile-lg:py-4 mobile-lg:px-3 mobile-lg:max-w-[60px] mobile-lg:max-h-[60px] px-7 py-8 w-[100px] h-[100px] px-7 py-8 w-[100px] h-[100px] rounded-full border border-slate-400 border-[5px] hover:border-slate-200 hover:cursor-pointer">
                            2021
                        </div>
                    </div>
                    {year == 2021 ? 
                        <div className="py-3 flex flex-wrap justify-start overflow-y-hidden">
                            {images.properties.filter(data => data.year == 2021).map(val => 
                                val.files.filter(data => data.event == "NWMC").map(value =>
                                    value.path.map((imagePath, ndx) => 
                                        <img onClick={() => openModal(imagePath)} key={ndx} className='w-[33%] h-[500px] border mobile-lg:h-32' src={window.location.origin + imagePath} />
                                    )
                                )
                            )}
                        </div> :
                    year == 2022 ?
                        <div className="py-3 flex flex-wrap justify-start overflow-y-hidden">
                            {images.properties.filter(data => data.year == 2022).map(val => 
                                val.files.filter(data => data.event == "NWMC").map(value =>
                                    value.path.map((imagePath, ndx) => 
                                        <img onClick={() => openModal(imagePath)} key={ndx} className='w-[33%] h-[500px] border mobile-lg:h-32' src={window.location.origin + imagePath} />
                                    )
                                )
                            )}
                        </div> :
                    year == 2023 ?
                        <div className="py-3 flex flex-wrap justify-start overflow-y-hidden">
                            {images.properties.filter(data => data.year == 2023).map(val => 
                                val.files.filter(data => data.event == "NWMC").map(value =>
                                    value.path.map((imagePath, ndx) => 
                                        <img onClick={() => openModal(imagePath)} key={ndx} className='w-[33%] h-[500px] border mobile-lg:h-32' src={window.location.origin + imagePath} />
                                    )
                                )
                            )}
                        </div> : ""
                    }
                </div>
            </div>
        </Layout>
    )
}

export default NWMC