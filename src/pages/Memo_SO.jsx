import React, {useState} from 'react'

import Layout from '../components/Layout'

function Memo_SO() {
    const [file, setFile] = useState("")
    const [show, setShow] = useState(false)
    const [typeOf, setTypeOf] = useState("memo")
    const [memoTab, setMemoTab] = useState("-mb-1 activeTab")
    const [soTab, setSOTab] = useState("")

    const SetFilePath = (el) => {
        setFile(el)
        setShow(true)
    }

    const SetToMemo = (e) => {
        e.preventDefault()
        setTypeOf('memo')
        setMemoTab('-mb-1 activeTab')
        setSOTab('')
        setShow(false)
    }

    const SetToSO = (e) => {
        e.preventDefault()
        setTypeOf('so')
        setMemoTab('')
        setSOTab('-mb-1 activeTab')
        setShow(false)
    }

    return (
        <Layout>
            <div className="mx-14 p-5 mobile-lg:!mx-5 mobile-lg:!p-2 h-[100vh] overflow-auto">
                <div className="ribbon">
                    <strong className="ribbon-content text-4xl"> IEC Materials / MEMO & SO </strong>
                </div>
                <div className="flex justify-between">
                    <div className="w-[50%] p-2">
                        <div className="card p-2">
                            <div className="flex justify-start">
                                <div onClick={SetToMemo} className={"hover:cursor-pointer bg-white p-2 me-1 text-xl border-r-2 border-l-2 border-t-2 rounded-t-lg " + memoTab}>Memorandums</div>
                                <div onClick={SetToSO} className={"hover:cursor-pointer bg-white p-2 text-xl border-r-2 border-l-2 border-t-2 rounded-t-lg " + soTab}>Special Orders</div>
                            </div>
                            {typeOf == 'memo' ? 
                                <div className="border-2 p-2 h-[64vh] overflow-auto">
                                    <div className="w-[85%] mx-auto">
                                        <p className="text-2xl font-bold my-4"> 2023 </p>
                                        <ul className="list-inside list-disc text-xl">
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/MO/DOST_WMC_2023.pdf')}> DOST Women's Month Celebration </li>
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/MO/GAD_Recognition_Ceremony.pdf')}> Participation for the GAD Recognition Ceremony </li>
                                        </ul>
                                        <p className="text-2xl font-bold my-4"> 2022 </p>
                                        <ul className="list-inside list-disc text-xl">
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/MO/MEMO_GAD.pdf')}> Online Training: Allocation, Utilization and Audit of GAD Funds for NGAs, GFIs, GOCCs, Water Districts and Electric Cooperatives </li>
                                        </ul>
                                        <p className="text-2xl font-bold my-4"> 2020 </p>
                                        <ul className="list-inside list-disc text-xl">
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/MO/memoGst2020.pdf')}> Gender Sensitivity Training </li>
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/MO/memoGat2020.pdf')}> Gender Analysis Training </li>
                                        </ul>
                                        <p className="text-2xl font-bold my-4"> 2019 </p>
                                        <ul className="list-inside list-disc text-xl">
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/MO/memoVAW2019.pdf')}> 18-Day Campaign to End Violence Against Women (VAW) </li>
                                        </ul>
                                    </div>
                                </div> :
                                <div className="border-2 p-2 h-[64vh] overflow-auto">
                                    <div className="w-[85%] mx-auto">
                                        <p className="text-2xl font-bold my-4"> 2023 </p>
                                        <ul className="list-inside list-disc text-xl">
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/SO/creation_dost_sei_gad_committee_sei_women_stem_arts.pdf')}> Creation of DOST-SEI GAD Committee for the Conduct of "SEI Women in STEM and Arts"  </li>
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/SO/gfps_assembly.pdf')}> Participation of Selected SEI GAD Focal Point System (GFPS) Members in the conduct of the DOST GAD Focal Point Assembly </li>
                                        </ul>
                                        <p className="text-2xl font-bold my-4"> 2022 </p>
                                        <ul className="list-inside list-disc text-xl">
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/SO/sOGfps2022.pdf')}> Reconstitution of DOST-SEI GAD Focal Point System (GFPS) </li>
                                        </ul>
                                        <p className="text-2xl font-bold my-4"> 2021 </p>
                                        <ul className="list-inside list-disc text-xl">
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/SO/sOGfps2021.pdf')}> Reconstitution of DOST-SEI GAD Focal Point System (GFPS) </li>
                                        </ul>
                                        <p className="text-2xl font-bold my-4"> 2019 </p>
                                        <ul className="list-inside list-disc text-xl">
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/SO/sORpWomenForum2019.pdf')}> Designating Resource Persons for the conduct of the 2019 Women Inspiring Women Forum </li>
                                        </ul>
                                        <p className="text-2xl font-bold my-4"> 2018 </p>
                                        <ul className="list-inside list-disc text-xl">
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/SO/sOSeiWomenForum2018.pdf')}> Designation of SEI Personnel, Women Inspiring Women Forum </li>
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/SO/sORPGenderFairLang2018.pdf')}> Designation of Resource Person for the Orientation on the use of Gender-Fair Language </li>
                                        </ul>
                                        <p className="text-2xl font-bold my-4"> 2017 </p>
                                        <ul className="list-inside list-disc text-xl">
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/SO/bWorkplacePolicy2017.pdf')}> Breastfeeding in the Workplace Policy </li>
                                        </ul>
                                        <p className="text-2xl font-bold my-4"> 2016 </p>
                                        <ul className="list-inside list-disc text-xl">
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/SO/SO_GADWCeleb.pdf')}> National Women's Month Celebration </li>
                                            <li className="text-sky-500 p-1 hover:cursor-pointer" onClick={() => SetFilePath('/PDF/SO/SO_GADNSTW.pdf')}> NSTW GAD Activity </li>
                                        </ul>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-[40%] mx-auto p-2">
                        {show ? 
                            <iframe 
                                className='w-[100%] h-[70vh] border-4 border-purplehaze' 
                                src={window.location.origin + file + '#toolbar=1&view=fit'} 
                            /> : ""
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Memo_SO