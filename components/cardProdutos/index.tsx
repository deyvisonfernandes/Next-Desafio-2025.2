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
        <div className="flex flex-col md:flex-row bg-white w-full items-center p-10 border-2 border-[#4bce5d] rounded-2xl">
            <div>
                <Image src={imagem}
                alt={titulo}
                width={1000}
                height={1000}
                className="max-h-[200px] max-w-[200px]  md:max-h-[450px] md:max-w-[450px] rounded-2xl flex-wrap"
                />
            </div>
            <div className="flex flex-col items-center md:items-baseline justify-between">
                <div className="flex flex-col items-center md:items-baseline gap-2 md:gap-5 md:p-2">
                <h1 className="font-bebasneue text-black text-4xl">{titulo}</h1>
                <p className="font-saira text-black text-xl">{descricao}</p>
                </div>
                <div className="flex flex-col md:flex-row items-center md:justify-between w-full p-2">
                <h1 className="font-bebasneue text-black font-black text-4xl">{preco}</h1>
                <Link href="/"><button className="font-bebasneue text-white bg-black w-full rounded-2xl text-2xl p-2">Ver mais</button></Link>
            </div>
            </div>
            
        </div>
    )
}