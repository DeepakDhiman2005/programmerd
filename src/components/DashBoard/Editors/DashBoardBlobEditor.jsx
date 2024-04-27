"use client"
import React from 'react';

// next
import Image from 'next/image';

// components
import BlobItemEditor from './BlobItemEditor';

const DashBoardBlobEditor = ({title=""}) => {
    return <>
        <div className='fixed top-0 left-0 z-50 w-full h-full'>
            <div className='w-full h-full flex justify-center items-center backdrop-brightness-75 backdrop-opacity-25'>
                <div className='bg-white flex justify-start items-start flex-col w-3/4 h-1/2 border border-solid border-slate-50 shadow-md shadow-slate-50 rounded-md p-3 overflow-y-scroll'>

                    <h2 className="font-semibold text-slate-800 mb-4 flex justify-between items-center text-2xl">{title}</h2>
                    
                    <BlobItemEditor>
                        <Image src={"/logo.svg"} alt="image" width={300} height={300} />
                    </BlobItemEditor>
                </div>
            </div>
        </div>
    </>
}

export default DashBoardBlobEditor;