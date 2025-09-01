import Image from "next/image";
import Link from "next/link";


export default function HeroSection(){

    return(
        <div className="w-full flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-6 items-center gap-6 bg-black lg:p-10 ">
            <div className="flex flex-col justify-center gap-12 lg:col-span-3 p-8 md:p-16 h-auto lg:max-h-[700px] overflow-hidden">
                <div className="flex flex-col gap-6 leading-relaxed">
                    <h1 className="text-[#4bce5d] font-bebasneue text-2xl md:text-4xl lg:text-6xl 2xl:text-8xl 3xl:text-10xl
                    border-b-2 border-t-[#4bce5d]
                    ">
                    Aonde o passado volta a ser protagonista. </h1>
                    <h2 className="text-white font-saira
                    text-1xl md:text-2xl lg:text-3xl 2xl:text-6xl 3xl:text-8xl text-justify 
                    ">
                        Os melhores gadgets retrôs, em ótimo estado e em um preço melhor ainda estão aqui!
                    </h2>
                </div>
                <button className="bg-black border-1 border-[#4bce5d] w-full  md:w-1/2  cursor-pointer text-white font-bebasneue rounded-2xl p-2
                text-xl md:text-3xl lg:text-4xl 2xl:text-6xl 3xl:text-7xl
                flex text-center justify-center
                hover:backdrop-blur-3xl hover:drop-shadow-[#4bce5d] hover:drop-shadow-md

                ">
                    Cadastre-se aqui!
                </button>
            </div>

            <div className="bg-[#346d3b]
             lg:col-span-3 relative h-[400px] group flex justify-center p-8 rounded-2xl w-full">
            
            </div>

            

        </div>
    )
}