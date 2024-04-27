"use client"
import React, {useRef} from 'react';

// icons
import Button from '@/components/Button';

const BlobItemEditor = ({children}) => {
    return <>
        <div className='flex flex-col justify-center relative items-start border-solid border border-transparent hover:border-slate-300 rounded-sm w-full hover:cursor-pointer h-full'>
            <div className='flex justify-end items-center absolute m-2 top-0 right-0 overflow-hidden'>
                <Button color="red">Delete</Button>
            </div>
            <div>{children}</div>
        </div>
    </>
}

export default BlobItemEditor;