import { ArrowBigLeft } from "lucide-react";
import Image from "next/image";

export default function Cadastro(){
    return(
        <div className="flex flex-col w-full md:w-1/3 bg-white border-1 p-5 gap-10 border-[#4bce5d] rounded-2xl">
            <div className="flex flex-row gap-10 justify-between items-center" >
                <ArrowBigLeft/>
                
                <Image 
                        src={'/logo/RETROSELL-LOGO.png'}
                        alt="Logo do Site"
                        width={1000}
                        height={1000}
                        className="w-35 h-10"
                         />
            </div>

            <div className="flex flex-col w-full gap-5 p-4">
                <div className="font-bebasneue text-4xl">Cadastro</div>
                <input type="text"  placeholder="Nome"
                 className="font-saira text-xl p-2 rounded-3xl border-1 border-black/50 "/>
                
                <input type="text" placeholder="Email"
                 className="font-saira text-xl p-2 rounded-3xl border-1 border-black/50 " />
                
                <input type="password" placeholder="Senha"
                 className="font-saira text-xl p-2 rounded-3xl border-1 border-black/50" />
                 <input type="password" placeholder="Confirmar Senha"
                 className="font-saira text-xl p-2 rounded-3xl border-1 border-black/50" />
                 
                 <div className="flex items-center md:justify-end flex-col md:flex-row gap-2 md:gap-0">
                <button className="font-bebasneue text-3xl p-1 bg-[#4bce5d] rounded-4xl w-full md:w-1/2 cursor-pointer">Cadastrar-se</button>
                
            </div>
            </div>
            
        </div>
    )
}