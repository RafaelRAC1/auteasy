async function fetchJSONData() {
    try {
        const res = await fetch("../resources/data/json/ambientes.json");
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
    const locais = await fetchJSONData();

    cards = document.getElementById("cards")

    function loadLocais() {
        locais.tipo.forEach((elemento) => {
            Object.keys(elemento).forEach((key) => {
                elemento[key].forEach((local) => {
                    cardDiv = document.createElement("div")
                    cardDiv.classList.add("card")

                    h2Card = document.createElement("h2")
                    h2Card.innerText = local.titulo
                    cardDiv.appendChild(h2Card)

                    spanCard = document.createElement("span")
                    spanCard.innerHTML =
                        `
            <i class="fa fa-info-circle" aria-hidden="true"></i> ${key}
            `
                    cardDiv.appendChild(spanCard)

                    tagsDiv = document.createElement("div")
                    tagsDiv.classList.add("tags")
                    local.tags.forEach((tag) => {
                        spanTag = document.createElement("span")
                        spanTag.innerText = tag;
                        tagsDiv.appendChild(spanTag)
                    })
                    cardDiv.appendChild(tagsDiv)

                    img = document.createElement("img");
                    img.src = local.imagem
                    cardDiv.appendChild(img)

                    descriptionDiv = document.createElement("div")
                    descriptionDiv.classList.add("description")
                    descriptionP = document.createElement("p")
                    descriptionP.innerText = local.descricao
                    descriptionDiv.appendChild(descriptionP)

                    descriptionUl = document.createElement("ul")
                    descriptionUl.innerHTML =
                        `
                <li>
                    <span>Telefone:</span> ${local.contato.telefone}
                </li>
                <li>
                    <span>Funcionamento:</span> ${local.funcionamento}
                </li>
                <li>
                    <span>Site:</span> <span style="color:rgb(40, 135, 199)">${local.contato.site}</span>
                </li>
                <li>
                    <span>Endereço:</span> ${local.endereco}
                </li>
            `
                    descriptionDiv.appendChild(descriptionUl)
                    cardDiv.appendChild(descriptionDiv)

                    buttonContainer = document.createElement("div")
                    buttonContainer.classList.add("button-container")
                    buttonContainer.innerHTML =
                        `
            <a href="${local.maps}">
                <button>Leve-me <i class="fa fa-car" aria-hidden="true"></i></button>
            </a>
            `
                    cardDiv.appendChild(buttonContainer)
                    cards.appendChild(cardDiv)
                });
            });
        });
        collectionOfCards = document.getElementsByClassName("card")

        observar(collectionOfCards)
    }

    loadLocais()
    /*
    <div class="card">
            <h2>TITULO ESTABELECIMENTO</h2>
            <span><i class="fa fa-info-circle" aria-hidden="true"></i> tipo de estabelecimento</span>
            <div class="tags">
                <span>lazer</span>
                <span>diversão</span>
                <span>calmo</span>
                <span>adaptado</span>
            </div>
            <img src="https://th.bing.com/th/id/OIP.AnOD3O01ip6odDpRlksFCgAAAA?rs=1&pid=ImgDetMain" alt="">
            <div class="description">
                <p>
                    Descricao do site, mete um lore ip[sum daqueles brabo mesmo, sabe?
                </p>
                <ul>
                    <li>
                        <span>Telefone:</span> 99999-9999
                    </li>
                    <li>
                        <span>Funcionamento:</span> Seg - Sex (8:00 - 15:00)
                    </li>
                    <li>
                        <span>Site:</span> www.google.com
                    </li>
                    <li>
                        <span>Endereço:</span> avenida palpaia, 42
                    </li>
                </ul>
            </div>
            <div class="button-container">
                <button>Leve-me <i class="fa fa-car" aria-hidden="true"></i></button>
            </div>
        </div>
    */

    encontrou = 0;
    selectTipo = document.getElementById("select-tipo")
    selectTipo.addEventListener("change", () => {
        console.log()
        if (selectTipo.value.toLowerCase() == "qualquer") {
            cards.innerHTML = ""
            loadLocais()
        }
        locais.tipo.forEach((elemento) => {
            Object.keys(elemento).forEach((key) => {
                if (key.toLowerCase() == selectTipo.value.toLowerCase()) {
                    cards.innerHTML = ""
                    elemento[key].forEach((local) => {
                        cardDiv = document.createElement("div")
                        cardDiv.classList.add("card")

                        h2Card = document.createElement("h2")
                        h2Card.innerText = local.titulo
                        cardDiv.appendChild(h2Card)

                        spanCard = document.createElement("span")
                        spanCard.innerHTML =
                            `
            <i class="fa fa-info-circle" aria-hidden="true"></i> ${key}
            `
                        cardDiv.appendChild(spanCard)

                        tagsDiv = document.createElement("div")
                        tagsDiv.classList.add("tags")
                        local.tags.forEach((tag) => {
                            spanTag = document.createElement("span")
                            spanTag.innerText = tag;
                            tagsDiv.appendChild(spanTag)
                        })
                        cardDiv.appendChild(tagsDiv)

                        img = document.createElement("img");
                        img.src = local.imagem
                        cardDiv.appendChild(img)

                        descriptionDiv = document.createElement("div")
                        descriptionDiv.classList.add("description")
                        descriptionP = document.createElement("p")
                        descriptionP.innerText = local.descricao
                        descriptionDiv.appendChild(descriptionP)

                        descriptionUl = document.createElement("ul")
                        descriptionUl.innerHTML =
                            `
                <li>
                    <span>Telefone:</span> ${local.contato.telefone}
                </li>
                <li>
                    <span>Funcionamento:</span> ${local.funcionamento}
                </li>
                <li>
                    <span>Site:</span><span style="rgb(40, 135, 199)">${local.contato.site}</span>
                </li>
                <li>
                    <span>Endereço:</span> ${local.endereco}
                </li>
            `
                        descriptionDiv.appendChild(descriptionUl)
                        cardDiv.appendChild(descriptionDiv)

                        buttonContainer = document.createElement("div")
                        buttonContainer.classList.add("button-container")
                        buttonContainer.innerHTML =
                            `
            <a href="${local.maps}">
                <button>Leve-me <i class="fa fa-car" aria-hidden="true"></i></button>
            </a>
            `
                        cardDiv.appendChild(buttonContainer)
                        cards.appendChild(cardDiv)
                        encontrou = 1
                    })
                }
            })
        })
        if (encontrou != 1 && selectTipo.value.toLowerCase() != "qualquer") {
            alert("Não existem locais deste tipo.")
        } else {
            encontrou = 0
        }
        collectionOfCards = document.getElementsByClassName("card")

        observar(collectionOfCards)
    })

    collectionOfCards = document.getElementsByClassName("card")

    observar(collectionOfCards)
}

function observar(cardCollection){
    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.3 
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("disappear");
                entry.target.classList.add("appear");
            } else {
                if (entry.boundingClientRect.top < 0) {
                    entry.target.classList.remove("disappear");
                    entry.target.classList.add("appear");
                } else {
                    entry.target.classList.remove("appear");
                    entry.target.classList.add("disappear");
                }
            }
        });
    }, options);
    
    Array.from(cardCollection).forEach(localCard => {
        observer.observe(localCard);
    }); 
}

main()




