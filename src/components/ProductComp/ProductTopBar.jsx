"use client"
import React, { useRef } from "react";

// icons
import { MdKeyboardArrowLeft } from "react-icons/md"; // left
import { MdKeyboardArrowRight } from "react-icons/md"; // right

// components
import ProductTopBarCard from "./ProductTopBarCard";
import HoverCircleButton from "../Buttons/HoverCircleButton";

const ProductTopBar = () => {
    // useRef
    const ProductScrollRef = useRef(null);

    // functions
    const LeftScroll = () => {
        try{
            ProductScrollRef.current.scrollBy(-45, 0);
        }catch(err){}
    }

    const RightScroll = () => {
        try{
            ProductScrollRef.current.scrollBy(45, 0);
        }catch(err){}
    }
    
    return <div className="flex justify-center items-center relative p-3">
        <HoverCircleButton color="blue" className="absolute left-2 block lg:hidden" onClick={LeftScroll}>
            <MdKeyboardArrowLeft size={"25px"} color="white" />
        </HoverCircleButton>

        <div ref={ProductScrollRef} className="bg-white border border-solid flex overflow-x-scroll scroll-0 justify-around items-center rounded-sm shadow-md shadow-slate-200 p-3 w-full">
            <ProductTopBarCard image="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/j/d/o/v15-g4-thin-and-light-laptop-lenovo-original-imagq57gsgyxxasy.jpeg?q=70" title="Laptops" />

            <ProductTopBarCard image="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70" title="mobiles" />

            <ProductTopBarCard image="https://rukminim2.flixcart.com/image/612/612/xif0q/cpu/s/a/t/3-intel-core-i3-4150-4th-generation-16gb-ram-512gb-ssd-wifi-0-original-imagywgzs45eyfke.jpeg?q=70" title="Cpu" />

            <ProductTopBarCard image="https://rukminim2.flixcart.com/image/612/612/k5vcya80pkrrdj/speaker/laptop-desktop-speaker/c/t/z/zebronics-fame-2-0-channel-original-imafkjb9pesgmyzw.jpeg?q=70" title="Speaker" />

            <ProductTopBarCard image="https://rukminim2.flixcart.com/image/612/612/l3929ow0/regionalbooks/b/a/f/shreemad-bhagwat-geeta-original-imageeufsk4ds57y.jpeg?q=70" title="Books" />

            <ProductTopBarCard image="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/g/g/r/-original-imagzvhsqgmz26bg.jpeg?q=70" title="SmartWatch" />

            <ProductTopBarCard image="https://media.direct.playstation.com/is/image/sierialto/PS5-Disc-Slim-New-Hero-1" title="PS5" />

            <ProductTopBarCard image="https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/gaming-keyboard/f/4/t/evofox-fireblade-led-backlit-amkette-original-imagrzmxfs5ua6pz.jpeg?q=70" title="keyboard" />

            <ProductTopBarCard image="https://rukminim2.flixcart.com/image/312/312/xif0q/television/o/j/s/32rt1022-thomson-original-imagpu4vshz5gsgm.jpeg?q=70" title="T.V" />

            <ProductTopBarCard image="https://rukminim2.flixcart.com/image/612/612/l1tmf0w0/physical-game/r/s/d/no-standard-edition-ps5-grand-theft-auto-v-full-game-ps5-original-imagdb7brucyfrqf.jpeg?q=70" title="Games" />

            <ProductTopBarCard image="https://masterblogging.com/wp-content/uploads/2023/09/hostinger-discount.png" title="Hosting" />
        </div>

        <HoverCircleButton color="blue" className="absolute right-2 block lg:hidden" onClick={RightScroll}>
            <MdKeyboardArrowRight color="white" size={"25px"} />
        </HoverCircleButton>
    </div>
}

export default ProductTopBar;