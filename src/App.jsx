import React from 'react'

import Layout from './components/Layout'

import './App.css'

function App() {
    return (
        <Layout>
            <div className="section">
                <video loop autoPlay>
                    <source src='https://sei.dost.gov.ph/wmc/video/nwmc2022.mp4' type='video/mp4' />
                </video>
            </div>
            <hr className='my-5' />
            <div className="container mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus saepe alias sequi corporis qui dignissimos! Dignissimos fuga, eaque quos consequuntur voluptatem aperiam ut harum quae ipsum repellendus asperiores expedita!
            </div>
        </Layout>
    )
}

export default App