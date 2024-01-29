// Evento de carregamento do DOM antes do JS
document.addEventListener('DOMContentLoaded', () => {

    // URL MAKE UP API
    const urlAPI = 'https://makeup-api.herokuapp.com/api/v1/products.json';

    // FUNÇÃO PARA PEGAR OS DADOS DOS PRODUTOS
    async function getProdutos(){
        try {
            const resp = await fetch(urlAPI);   //JSON
            const produto = await resp.json();  //ARRAY
            return produto;  
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        };
    };

    // Selecionar a DIV necessária para inserir os produtos
    const galeria = document.getElementById('galeria')

    // Função que renderiza cada produto a partir do template
    async function renderProdutos() {
        const produtos = await getProdutos()
        
        console.log(produtos)

        function template(produto) {
            return 
            `
                <div class="conteudo">
                    <img id="itemImg" src="${produto.image_link}">
                
                    <h3 id="itemName">${produto.name}</h3>
                
                    <p id="itemBrand">${produto.brand}</p>
                    
                    <ul>
                        <li> <i class="fa fa-star checked"> </i> </li>
                        <li> <i class="fa fa-star checked"> </i> </li>
                        <li> <i class="fa fa-star checked"> </i> </li>
                        <li> <i class="fa fa-star checked"> </i> </li>
                        <li> <i class="fa fa-star"> </i> </li>
                    </ul>
                </div>
            `
        }
        
        galeria.append(produtos.map(function (produto){
            template(produto)
        }))    
    }

    renderProdutos()
});          







    






//  product_type: 'eyeliner',
//  brand: 'nyx',
//  name: 'The Curve',
//  "brand":"dior" 