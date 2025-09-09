
import Link from "next/link"
import Image from "next/image"
export default function Page(){
    return(
        <div className="bg-black flex flex-col lg:flex-row p-4 lg:p-12 gap-20 ">

            <div className="bg-black flex flex-col w-full lg:w-1/2 drop-shadow-2xl rounded-2xl ">
            <div className="bg-black w-full p-2 rounded-2xl"><h1 className="font-bebasneue text-[#4bce5d] text-3xl lg:4xl">Entre em contato conosco!</h1></div>
            <div className="bg-white backdrop-blur-md flex flex-col  w-full gap-5 p-3 rounded-2xl">
                <input type="text" placeholder="Nome" className="border-1 border-black/20 text-xl p-2  font-saira font-semibold rounded-2xl" />
                <input type="text" placeholder="Email"  className="border-1 border-black/20  text-xl p-2 font-saira font-semibold rounded-2xl" />
                <input type="text" placeholder="Assunto"  className="border-1 border-black/20  text-xl p-2 font-saira font-semibold rounded-2xl " />
                <textarea name="" id="" placeholder="Digite aqui sua mensagem..." className="border-1 border-black/20  text-xl p-2 font-saira font-semibold rounded-2xl "></textarea>
                <button className="flex align-center self-end font-bebasneue font-semilbold bg-black text-[#4bce5d] p-2 w-fit text-2xl md:text-3xl cursor-pointer rounded-2xl">Enviar</button>

            </div>
            
            </div>

            <div  className="bg-black flex flex-col w-full lg:w-1/2 border-2 border-black drop-shadow-2xl rounded-2xl">
                <div className="bg-black w-full p-2 rounded-2xl">
                    <h1 className="font-bebasneue text-[#4bce5d] text-3xl lg:4xl">Nossas redes:</h1></div>
                <div className=" bg-white grid grid-cols-2 justify-center gap-5 lg:gap-20 p-4 rounded-2xl">
            <Link href="https://www.linkedin.com" target="_blank" className="flex flex-col border-1 border-black/20 items-center rounded-2xl justify-between gap-5 hover:shadow-2xl hover:shadow-[#4bce5d]">
                <Image
                src={'/logo/linkedinLogo.png'}
                alt="Logo Linkedin"
                    width={1000}
                    height={1000}
                    className="w-20 h-20"
                />
                <h1 className="font-bebasneue font-medium text-2xl md:text-3xl">/in/retrosell</h1>
                </Link>
                
                <Link href="https://www.facebook.com" target="_blank" className="flex flex-col border-1 border-black/20 items-center rounded-2xl justify-between gap-5 hover:shadow-2xl hover:shadow-[#4bce5d]">
                <Image
                src={'/logo/facebookLogo.png'}
                alt="Logo Facebook"
                    width={1000}
                    height={1000}
                    className="w-16 h-16"
                />
                <h1 className="font-bebasneue font-medium text-2xl md:text-3xl">/retrosell</h1>
                </Link>

                <Link href="https://www.twitter.com" target="_blank" className="flex flex-col border-1 border-black/20 items-center rounded-2xl justify-between gap-5 hover:shadow-2xl hover:shadow-[#4bce5d]">
                <Image
                src={'/logo/twitterLogo.png'}
                alt="Logo Twitter"
                    width={1000}
                    height={1000}
                    className="w-16 h-16"
                />

                <h1 className="font-bebasneue font-medium text-2xl md:text-3xl">@retrosell</h1>
                </Link>

                <Link href="https://www.instagram.com" target="_blank" className="flex flex-col border-1 border-black/20 items-center rounded-2xl justify-between gap-5 hover:shadow-2xl hover:shadow-[#4bce5d]">
                <Image
                src={'/logo/instagramLogo.png'}
                alt="Logo Instagram"
                    width={1000}
                    height={1000}
                    className="w-16 h-16"
                />
                <h1 className="font-bebasneue font-medium text-2xl md:text-3xl">@retrosell</h1>
                </Link>
                </div>
            </div>


        </div>
    )
}