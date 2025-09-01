import Card from "./card";

export default function SobreNos(){
    return(
        <div className="flex flex-col w-full h-auto p-10 gap-10">
            <div className=" flex flex-col md:flex-row w-full font-bebasneue justify-center gap-10">
                <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-9xl text-black font-semibold">
                Sobre Nós
                </h1>
                <h2 className="font-saira font-semibold
                 md:text-xl xl:text-2xl 2xl:text-5xl ">
                    Somos um grupo de amantes de tecnologia e queremos preservar a história dela. Recebemos e coletamos todo
tipo de gadget dos anos 80/90/2000 e afins, analisamos seu estado, consertamos caso necessário e 
disponibilizamos aqui, satisfazendo memórias afetivas ou apenas curiosidade de outros como nós.
                </h2>
                
                </div>
            
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 justify-center">
            <div className="border-b-2 border-b-[#4bce5d] lg:border-b-0 lg:border-r-2 lg:border-r-[#4bce5d]">
                <Card title="Missão" description="Temos a missão de preservar a tecnologia, sua história e seu valor compartilhando elas com as novas e velhas gerações."/></div>
            <div className="border-b-2 border-b-[#4bce5d] lg:border-b-0 lg:border-r-2 lg:border-r-[#4bce5d]"> 
                <Card title="Visão" description="Queremos nos tornar um grande acervo para quem gosta de tecnologia, atribuindo preços justos e facilitando o acesso amplo a ela." /></div>
            <div>
                <Card title="Valores" description="
            Honestidade,
            Clareza,
            Comprometimento,
            Excelência,
            Empatia" /></div>
        </div>
        </div>
    )
}