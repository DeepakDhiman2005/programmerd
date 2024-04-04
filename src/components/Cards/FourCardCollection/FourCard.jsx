"use client"
import React, { useEffect, useState } from 'react';
import FourCardChild from './FourCardChild';

/**
 * 
 * @param data and title => title: String, data: {title: "", desc: "", image: "", href: ""} 
 * @returns 
 */
const FourCard = ({ data=null, title="" }, key="") => {
    // useState
    const [Layer1, setLayer1] = useState([]);
    const [Layer2, setLayer2] = useState([]);

    useEffect(()=> {
        if(data !== null){
            // console.log(data);
            setLayer1([
                {title: data[0].title, desc: data[0].desc, href: data[0].href, image: data[0].image},
                {title: data[1].title, desc: data[1].desc, href: data[1].href, image: data[1].image}
            ]);
            setLayer2([
                {title: data[2].title, desc: data[2].desc, href: data[2].href, image: data[2].image},
                {title: data[3].title, desc: data[3].desc, href: data[3].href, image: data[3].image}
            ]);
        }
    }, [data]);

    return <>
        <div key={key} className='flex flex-col justify-center items-center p-4 m-3 border border-solid rounded-md'>
            <h2 className='text-xl text-slate-900 font-bold w-[95%] text-start mb-3'>{title}</h2>
            {/* layer1 */}
            <div className='flex justify-between items-center mb-3'>
                {
                    Layer1.map(({image, href, title, desc}, i)=>{
                        return <FourCardChild key={"FourCardChild"+key+i} image={image} href={href} title={title} desc={desc} />
                    })
                }
            </div>
            {/* layer2 */}
            <div className='flex justify-between items-center'>
                {
                    Layer2.map(({image, href, title, desc}, i)=>{
                        return <FourCardChild key={"FourCardChild"+key+i}  image={image} href={href} title={title} desc={desc} />
                    })
                }
            </div>
        </div>
    </>
}

export default FourCard;