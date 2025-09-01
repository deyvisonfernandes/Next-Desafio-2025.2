type CardProps = {
    title: string;
    description: string;
}
export default function Card({title, description}: CardProps){
    return (
        <div className="flex flex-col items-center justify-center gap-3 p-5 2xl:gap-10 2xl:p-20">
            <h1 className="text-center text-2xl font-bebasneue text-[#4bce5d]
             md:text-3xl  xl:text-4xl 2xl:text-6xl">
                {title}</h1>
            <p className="text-center text-1xl font-saira font-semibold text-black line-clamp-6 
            md:text-2xl xl:text-3xl 2xl:text-5xl">
                {description}</p>



        </div>
    )
}