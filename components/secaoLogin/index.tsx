import { ArrowBigLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Login(){
    return(
        <div className="flex flex-col w-full md:w-1/3 bg-white border-1 p-5 gap-8 border-[#4bce5d] rounded-2xl">
            <div className="flex flex-row gap-10 justify-between items-center" >
                <Link href="/"><ArrowBigLeft/></Link>
                
                
                <Image 
                        src={'/logo/RETROSELL-LOGO.png'}
                        alt="Logo do Site"
                        width={1000}
                        height={1000}
                        className="w-35 h-10"
                         />
            </div>

            <div className="flex flex-col w-full gap-5 p-4">
                <div className="font-bebasneue text-4xl">Fazer Login</div>
                <input type="text"  placeholder="Nome"
                 className="font-saira text-xl p-2 rounded-3xl border-1 border-black/50 "/>
                
                <input type="text" placeholder="Email"
                 className="font-saira text-xl p-2 rounded-3xl border-1 border-black/50 " />
                
                <input type="password" placeholder="Senha"
                 className="font-saira text-xl p-2 rounded-3xl border-1 border-black/50" />
                 <div className="flex items-center md:justify-between flex-col md:flex-row gap-2 md:gap-0">
                  <Link href="/cadastro" className="w-full md:w-1/3">
                  <button className="font-bebasneue text-3xl p-1 bg-[#4bce5d] rounded-4xl w-full cursor-pointer">Cadastro</button>
                  </Link>  
                <button className="font-bebasneue text-3xl p-1 bg-[#4bce5d] rounded-4xl w-full md:w-1/4 cursor-pointer">Login</button>
                
            </div>
            </div>
            
        </div>
    )
}