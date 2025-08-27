
import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return(
        <div className="bg-white text-center w-full py-8 min-h-[10px] flex flex-col md:flex-row gap-12 justify-center md:justify-around
     border-t-2 border-t-[#4bce5d] 
        ">
            <span className=" md:w-40 font-saira font-semibold text-black text-center">©2025 Retro Sell - Todos os direitos reservados
            </span>
            <span className="flex justify-center items-center md:w-40">
                <Image 
                    src={'/logo/RETROSELL-LOGO.png'}
                    alt="Logo do Site"
                    width={1000}
                    height={1000}
                    className="w-50 h-10 rounded-xl"
                     />
            </span>
            
            <span className="md:w-40 flex flex-row  justify-center items-center gap-2">
                <Link href="https://www.facebook.com" target="_blank">
                <Image
                src={'/logo/facebookLogo.png'}
                alt="Logo Facebook"
                    width={1000}
                    height={1000}
                    className="w-16 h-15"
                />
                </Link>

                <Link href="https://www.twitter.com" target="_blank">
                <Image
                src={'/logo/twitterLogo.png'}
                alt="Logo Twitter"
                    width={1000}
                    height={1000}
                    className="w-16 h-12"
                />
                </Link>

                <Link href="https://www.instagram.com" target="_blank">
                <Image
                src={'/logo/instagramLogo.png'}
                alt="Logo Instagram"
                    width={1000}
                    height={1000}
                    className="w-16 h-15"
                />
                </Link>







            </span>

        </div>

    )
}