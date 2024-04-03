"use client"
import React from "react";

const BarChart = () => {
    return <>
        <div key={"BarChartInDashBoard"} className="flex flex-col mt-4 mb-4 justify-center items-start border border-solid rounded-md border-slate-100 p-2 shadow-md shadow-slate-200">
            <section className="w-full">
                <h2 className="p-4 text-xl font-bold text-slate-950">Over All Traffic Your Website!</h2>
            </section>

            <section className="flex justify-center h-96 items-between w-full">
                {/* y-axies */}
                <div className="list-none flex flex-col justify-around h-full items-center w-[10%]">
                    <li className="p-2 text-slate-800">800</li>
                    <li className="p-2 text-slate-800">600</li>
                    <li className="p-2 text-slate-800">400</li>
                    <li className="p-2 text-slate-800">200</li>
                    <li className="p-2 text-slate-800">0</li>
                </div>
                <div className="flex flex-col justify-between max-h-full h-full items-start w-[90%]">
                    {/* graph */}
                    <div className="h-[90%] flex justify-around items-end w-full">
                        <div className="h-[50%] w-[24px] rounded-t ml-2 mr-2 bg-blue-600 cursor-pointer"></div>
                        <div className="h-[54%] w-[24px] rounded-t ml-2 mr-2 bg-blue-600 cursor-pointer"></div>
                        <div className="h-[48%] w-[24px] rounded-t ml-2 mr-2 bg-blue-600 cursor-pointer"></div>
                        <div className="h-[57%] w-[24px] rounded-t ml-2 mr-2 bg-blue-600 cursor-pointer"></div>
                    </div>
                    {/* x-axies */}
                    <div className="list-none flex justify-around w-full h-[10%] items-center">
                        <li className="p-2 text-slate-800">April</li>
                        <li className="p-2 text-slate-800">May</li>
                        <li className="p-2 text-slate-800">June</li>
                        <li className="p-2 text-slate-800">July</li>
                    </div>
                </div>
            </section>
        </div>
    </>
}

export default BarChart;