async function fetchJSONData() {
    try {
        const res = await fetch("../resources/data/json/responsavel.json");
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data; 
    } catch (error) {
        console.error("Unable to fetch data:", error);
    }
}

async function main() {
    const myjson = await fetchJSONData();

    function clickQuestaoEvent(element) {
        element.addEventListener("click", (event) => {
            if (event.target.tagName != "DIV") {
                questaoParent = event.target.parentElement.parentElement
                if (questaoParent.children[1].classList.contains("hidden")) {
                    questaoParent.children[1].classList.remove("hidden")
                    questaoParent.children[1].classList.add("fadein")
                    questaoParent.children[0].children[0].classList.remove("unselected")
                    questaoParent.children[0].children[0].classList.add("selected-question")
                } else {
                    questaoParent.children[1].classList.add("hidden")
                    questaoParent.children[0].children[0].classList.remove("selected-question")
                    questaoParent.children[0].children[0].classList.add("unselected")
                }
            }
        })
    }
    
    questao = document.getElementsByClassName("questao")
    for (i = 0; i < questao.length; i++) {
        clickQuestaoEvent(questao[i])
    }
    
    const suporte = document.getElementById("suporte")
    
    function loadSuporte() {
        myjson.abas[1].suporte.forEach((e) => {
            /*
            <div class="suporte-linha">
                <div class="questao">
                    <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
                    <span>O que é Transtorno de Espectro Autista (TEA)?</span>
                </div>
                <div class="resposta hidden">
                    <div class="resposta-content">
                        <span>Resposta da pergunta 1 para o projeto</span>
                    </div>
                </div>
             </div>
            */
            suporteLinhaDiv = document.createElement("div")
            suporteLinhaDiv.classList.add("suporte-linha")
    
            questaoDiv = document.createElement("div")
            questaoDiv.classList.add("questao")
            questaoDiv.innerHTML =
                `
                        <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
                        <span>${e.pergunta}</span>
                    `
            suporteLinhaDiv.appendChild(questaoDiv)
    
            respostaDiv = document.createElement("div")
            respostaDiv.classList.add("resposta")
            respostaDiv.classList.add("hidden")
            respostaDiv.innerHTML =
                `
                        <div class="resposta-content">
                            <span>${e.resposta}</span>
                        </div>
                    `
            suporteLinhaDiv.appendChild(respostaDiv)
    
            suporte.appendChild(suporteLinhaDiv)
    
            clickQuestaoEvent(suporteLinhaDiv)
        })
    }
    
    cardsId = document.getElementById("cards-id")
    cardsId.innerHTML = ""
    
    function loadJogos() {
        /*
        <div class="small-card">
            <div class="image-container">
                <img src="https://th.bing.com/th/id/OIP.q9wDx6YABxExZ4SnKmUMNwHaFt?rs=1&pid=ImgDetMain" alt="">
            </div>
            <div class="description">
                <div class="description-title">
                    <h3>
                        Pamonha Online <i class="fa fa-external-link" aria-hidden="true"></i>
                    </h3>
                </div>
                <div class="description-text">
                    <span>
                        O game definitivo
                    </span>
                </div>
            </div>
        </div>
        */
        myjson.abas[0].recursos[0].jogos.forEach((jogo) => {
            smallCard = document.createElement("div")
            smallCard.classList.add("small-card")
            smallCard.innerHTML =
                `
                       <div class="image-container">
                            <img src="${jogo.imagem}" alt="">
                        </div>
                        <div class="description">
                            <div class="description-title">
                                <h3>
                                    ${jogo.titulo} <a href="${jogo.link}"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                                </h3>
                            </div>
                            <div class="description-text">
                                <span>
                                    ${jogo.descricao}
                                </span>
                            </div>
                        </div> 
                    `
            cardsId.appendChild(smallCard)
        })
    }
    
    loadJogos()
    
    moduloOutside = document.getElementById("modulo-outside")
    moduloJogos = document.getElementById("modulo-games")
    
    jogos = document.getElementById("jogos")
    jogos.addEventListener("click", () => {
        moduloOutside.style.display = "flex"
        moduloJogos.style.display = "flex"
    })
    
    fecharModalJogos = document.getElementById("fechar-modal-jogos")
    fecharModalJogos.addEventListener("click", () => {
        moduloOutside.style.display = "none"
        moduloJogos.style.display = "none"
    })
    
    moduloVideos = document.getElementById("modulo-videos")
    videosId = document.getElementById("videos-id")
    videosId.innerHTML = "";
    
    function loadVideos() {
        myjson.abas[0].recursos[1].videos.forEach((video) => {
            videosId.innerHTML +=
                `
                       <li>
                            <a href="${video.link}">
                                ${video.titulo}
                            </a>
                            <span>(${video.autor}, ${video.ano}) [${video.duracao}]</span>
                        </li>
                    `
        })
    }
    
    loadVideos()
    
    videos = document.getElementById("videos")
    videos.addEventListener("click", () => {
        moduloOutside.style.display = "flex"
        moduloVideos.style.display = "flex"
    })
    
    fecharModalVideos = document.getElementById("fechar-modal-videos")
    fecharModalVideos.addEventListener("click", () => {
        moduloOutside.style.display = "none"
        moduloVideos.style.display = "none"
    })
    
    moduloArtigos = document.getElementById("modulo-artigos")
    artigosId = document.getElementById("artigos-id")
    artigosId.innerHTML = "";
    
    function loadArtigos() {
        myjson.abas[0].recursos[2].artigos.forEach((artigo) => {
            artigosId.innerHTML +=
                `
                       <li>
                            <a href="${artigo.link}">${artigo.titulo}</a>
                            <span>(${artigo.autor}, ${artigo.ano}) [${artigo.paginas} pag.]</span>
                        </li>
                        `
        })
    }
    
    loadArtigos()
    
    artigos = document.getElementById("artigos")
    artigos.addEventListener("click", () => {
        moduloOutside.style.display = "flex"
        moduloArtigos.style.display = "flex"
    })
    
    fecharModalArtigos = document.getElementById("fechar-modal-artigos")
    fecharModalArtigos.addEventListener("click", () => {
        moduloOutside.style.display = "none"
        moduloArtigos.style.display = "none"
    })
    
    recursosId = document.getElementById("recursos")
    
    recursosTab = document.getElementById("suporte-tab")
    suporteTab = document.getElementById("recursos-tab")
    
    recursosTab.addEventListener("click", () => {
        if (!recursosTab.classList.contains("selected")) {
            suporteTab.classList.remove("selected")
            recursosTab.classList.add("selected")
            suporte.style.display = "flex"
            recursosId.style.display = "none"
        }
    })
    
    suporteTab.addEventListener("click", () => {
        if (!suporteTab.classList.contains("selected")) {
            recursosTab.classList.remove("selected")
            suporteTab.classList.add("selected")
            suporte.style.display = "none"
            recursosId.style.display = "flex"
        }
    })
    
    loadSuporte()
}

main();



