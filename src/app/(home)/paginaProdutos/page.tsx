import CardProduto from "@/components/cardProdutos";

export default function Page(){
    return(

        <div>
        <div className="flex flex-col md:flex-row sticky top-15 bg-black w-full p-2 md:justify-between md:items-center">
            <div className="hidden md:flex font-bebasneue text-white text-3xl w-1/2">Produtos em nosso estoque</div>
            <div className="flex flex-row gap-5 p-2 w-full md:w-1/2 md:justify-end">
                <input type="text" placeholder="Procure um produto..." className="bg-white rounded-xl w-70 md:w-1/2 p-2" />
                <button className="bg-[#4bce5d] font-bebasneue rounded-xl text-2xl p-1 cursor-pointer">Buscar</button>
            </div>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 w-full bg-white p-2 md:p-10 gap-5">
            <CardProduto imagem ="/produtos/supernintendo.png" 
            titulo="Console Super Nintendo"
            descricao="Reviva a nostalgia com o Super Nintendo Original! Gráficos clássicos em 16 bits, som icônico e uma biblioteca incrível com jogos lendários...."
            preco="R$500,00"
            />
            <CardProduto imagem ="/produtos/macbook.png" 
            titulo="Macbook Unibody 2009"
            descricao="Um verdadeiro ícone da Apple, com estilo e funcionalidade a um preço acessível!"
            preco="R$3500,00"
            />
            <CardProduto imagem ="/produtos/ps2.png" 
            titulo="Playstation 2"
            descricao="Diversão sem limites com centenas de jogos clássicos como GTA San Andreas, God of War e Resident Evil."
            preco="R$600,00"
            />
            <CardProduto imagem ="/produtos/videocassete.png" 
            titulo="Video Cassete"
            descricao="Design retrô, funcionamento perfeito, pronto para matar a saudade dos anos 80 e 90."
            preco="R$800,00"
            />
        </div>



        </div>
    )
}