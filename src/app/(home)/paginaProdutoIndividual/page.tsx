import { ArrowBigLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page(){
    return(
        <div className="flex flex-col w-full">
            <div className="flex flex-row bg-black p-2 gap-2 items-center ">
                <Link href="/paginaProdutos" className="flex items-center bg-[#4bce5d] p-2 rounded-3xl"> <ArrowBigLeft className="flex text-white text-9xl bg-[#4bce5d] rounded-2xl items-center" /></Link>
                <h1 className="hidden md:flex font-bebasneue text-2xl text-white" >Retornar a página de produtos</h1>
            </div>



            <div className="flex flex-col md:flex-row w-full bg-black p-2 md:p-15 gap-10">
                  <div className="flex w-full md:w-1/2">
            <Image src="/produtos/supernintendo.png"
                            alt="Super Nintendo"
                            width={1000}
                            height={1000}
                            className=" h-[250px] md:h-[400px] w-full  flex-wrap border-1 border-black/20 object-cover"
                            />

            </div>
                <div className="flex flex-col  w-full md:w-1/2 gap-4">
                    <div className="font-bebasneue text-white text-6xl"><h1 className="border-b-1 border-b-[#4bce5d]">Console Super Nintendo</h1></div>
                    <div className="font-bebasneue text-[#4bce5d] text-5xl"><h2>R$500,00</h2></div>
                    <div className="font-saira text-white text-2xl">
                    <p>Reviva a nostalgia com o Super Nintendo Original! Gráficos clássicos em 16 bits, som icônico e uma biblioteca incrível com jogos lendários como Super Mario World e The Legend of Zelda. Diversão garantida! 90! </p>
                    </div>
                    <div className="w-full">
                        <button className="flex bg-black font-bebasneue text-white text-3xl w-full items-center justify-center border-2 border-[#4bce5d] rounded-2xl p-2 cursor-pointer">
                        Adicionar ao Carrinho</button>
                        </div>
                </div>


            </div>

        </div>
    )
}