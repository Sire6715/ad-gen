import React from "react";
import imgMob from "./assets/images/pattern-divider-mobile.svg"
import dice from "./assets/images/icon-dice.svg"
import { data } from "autoprefixer";
import axios from "axios";


export default function Advice() {
    const [advice, setAdvice] = React.useState([

    ])

    React.useEffect(() => {
        axios.get("https://api.adviceslip.com/advice")
            .then((res) => setAdvice(res.data.slip))
    }, [])


    const newAdvice = async () => {
        const res = await axios.get("https://api.adviceslip.com/advice");

        setAdvice(res.data.slip)
    }



    return (
        <div className="flex flex-col space-x-6 items-center justify-center h-screen w-screen m-auto p-4 font-manrope relative">
            <div className="relative text-center bg-DarkGrayishBlue xs:w-[80%] xs:max-w-[100%] md:w-[42%] md:max-w-[100%] break-words p-8 rounded-md">
                <h1 className="xs:text-[10px] text-[12px] text-NeonGreen">ADVICE #{advice.id}</h1>
                <p className='font-semibold text-[30px] xs:text-[30px] h-auto text-LightCyan leading-9 antialiased my-4 md:m-auto md:w-[65%]'>"{advice.advice}"</p>
                <img className="m-auto" src={imgMob} alt="seperator" />
                <button className="p-3 bg-NeonGreen rounded-full absolute max-w-[20%] my-0 mx-auto bottom-[-9px] translate hover:bg-LightNeonGreen hover:shadow-lg hover:shadow-[ #52ffa8]" onClick={newAdvice}><img src={dice} /></button>
            </div>
            <p className="absolute bottom-[20px] text-neutral-50 text-[10px]">Challenge by <span className="text-blue-600">Frontend Mentor</span>. Coded by <span className="text-blue-600">sire</span>.</p>
        </div>

    )
}