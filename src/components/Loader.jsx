import React from 'react'

import Layout from './Layout'

function Loader() {
    return (
        <Layout>
            <div role="status" className="mx-14 p-5 animate-pulse mobile-lg:!mx-5 mobile-lg:!p-2 h-[100vh] overflow-hidden">
                <div className="mt-[100px] h-[86vh] overflow-y-auto">
                    <div className="flex">
                        <div className="w-25">
                            <div className="mobile-lg:max-w-[120px] mobile-lg:max-h-[120px] mobile-lg:py-8 mobile-lg:px-3 mobile-lg:mx-0 mx-5 w-[220px] h-[220px] px-5 py-[80px] text-3xl text-center bg-gray-200 rounded-full dark:bg-gray-700">
                            </div>
                        </div>
                        <div className="w-[100%] py-3">
                            <div className="h-24 mobile-lg:ms-3 mobile-lg:h-12 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-24 mobile-lg:ms-3 mobile-lg:h-12 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        </div>
                    </div>
                    <div className="mobile-lg:mt-1 mt-5 py-3 flex justify-start mobile-lg:justify-between overflow-x-auto">
                        <div className="mx-5 mobile-lg:mx-1 mobile-lg:p-8 mobile-lg:max-w-[50px] mobile-lg:max-h-[50px] px-7 py-8 w-[100px] h-[100px] rounded-full bg-gray-200 rounded-full dark:bg-gray-700">
                        </div>
                        <div className="mx-5 mobile-lg:mx-1 mobile-lg:p-8 mobile-lg:max-w-[50px] mobile-lg:max-h-[50px] px-7 py-8 w-[100px] h-[100px] rounded-full bg-gray-200 rounded-full dark:bg-gray-700">
                        </div>
                        <div className="mx-5 mobile-lg:mx-1 mobile-lg:p-8 mobile-lg:max-w-[50px] mobile-lg:max-h-[50px] px-7 py-8 w-[100px] h-[100px] rounded-full bg-gray-200 rounded-full dark:bg-gray-700">
                        </div>
                        <div className="mx-5 mobile-lg:mx-1 mobile-lg:p-8 mobile-lg:max-w-[50px] mobile-lg:max-h-[50px] px-7 py-8 w-[100px] h-[100px] rounded-full bg-gray-200 rounded-full dark:bg-gray-700">
                        </div>
                        <div className="mx-5 mobile-lg:hidden px-7 py-8 w-[100px] h-[100px] rounded-full bg-gray-200 rounded-full dark:bg-gray-700">
                        </div>
                        <div className="mx-5 mobile-lg:hidden px-7 py-8 w-[100px] h-[100px] rounded-full bg-gray-200 rounded-full dark:bg-gray-700">
                        </div>
                        <div className="mx-5 mobile-lg:hidden px-7 py-8 w-[100px] h-[100px] rounded-full bg-gray-200 rounded-full dark:bg-gray-700">
                        </div>
                        <div className="mx-5 mobile-lg:hidden px-7 py-8 w-[100px] h-[100px] rounded-full bg-gray-200 rounded-full dark:bg-gray-700">
                        </div>
                        <div className="mx-5 mobile-lg:hidden px-7 py-8 w-[100px] h-[100px] rounded-full bg-gray-200 rounded-full dark:bg-gray-700">
                        </div>
                        <div className="mx-5 mobile-lg:hidden px-7 py-8 w-[100px] h-[100px] rounded-full bg-gray-200 rounded-full dark:bg-gray-700">
                        </div>
                    </div>
                    <div className="py-3 flex flex-wrap justify-start mobile-lg:justify-between">
                        <div className="h-96 mobile-lg:h-80 mobile-lg:w-[33%] mobile-lg:m-0 w-[32%] m-2 bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-96 mobile-lg:h-80 mobile-lg:w-[33%] mobile-lg:m-0 w-[32%] m-2 bg-gray-200 dark:bg-gray-700"></div>
                        <div className="h-96 mobile-lg:h-80 mobile-lg:w-[33%] mobile-lg:m-0 w-[32%] m-2 bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Loader