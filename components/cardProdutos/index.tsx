import Image from "next/image";
import Link from "next/link";

type ProdutoProps ={
    imagem: string;
    titulo: string;
    descricao: string;
    preco: string;
}

export default function CardProduto({imagem, titulo, descricao, preco}: ProdutoProps){
    return(
        <div className="flex flex-col md:flex-row bg-white w-full items-center p-5 border-1 gap-5 border-[#4bce5d] rounded-2xl">
            <div className=" w-1/2">
                <Image src={imagem}
                alt={titulo}
                width={1000}
                height={1000}
                className="h-[100px] w-[100px]  lg:h-[150px] lg:w-[150px] rounded-2xl flex-wrap border-1 border-black/20 object-cover"
                />
            </div>
            <div className="flex flex-col items-center h-1/2 md:items-baseline justify-between">
                <div className="flex flex-col items-center md:items-baseline gap-2 md:gap-5">
                <h1 className="font-bebasneue text-black text-4xl line-clamp-1 border-b-2 border-b-[#4bce5d]">{titulo}</h1>
                <p className="font-saira text-black text-xl line-clamp-2 ">{descricao}</p>
                </div>
                <div className="flex flex-col md:flex-row items-center md:justify-between w-full p-2">
                <h1 className="font-bebasneue text-black font-black text-4xl">{preco}</h1>
                <Link href="/"><button className="font-bebasneue text-white bg-black w-full rounded-xl text-2xl p-2 cursor-pointer hover:text-[#4bce5d] hover:brightness-90 hover:shadow-2xl hover:shadow-[#4bce5d]">Ver mais</button></Link>
            </div>
            </div>
            
        </div>
    )
}