async function fetchJSONData() {
    try {
        const res = await fetch("../resources/data/json/comunidade.json");
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
        locais.Comunidade.forEach((elemento) => {
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
                    <i class="fa fa-info-circle" aria-hidden="true"></i> ${local.tipo}
                    `
                    cardDiv.appendChild(spanCard)

                    imgDiv = document.createElement("div")
                    imgDiv.classList.add("image-container")
                    img = document.createElement("img");
                    img.src = local.imagem
                    imgDiv.appendChild(img)

                    socialMediaDiv = document.createElement("div")
                    socialMediaDiv.classList.add("midia-social")
                    socialMediaUl = document.createElement("ul")
                    if (local.plataformas.whatsapp != "") {
                        socialMediaUl.innerHTML +=
                            `
                        <li>
                            <a href="${local.plataformas.whatsapp}" target="_blank">
                                <i class="fa fa-whatsapp" aria-hidden="true"></i>
                            </a>
                        </li>
                        `
                    }
                    if (local.plataformas.facebook != "") {
                        socialMediaUl.innerHTML +=
                            `
                        <li>
                            <a href="${local.plataformas.facebook}" target="_blank">
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>
                        </li>
                        `
                    }
                    if (local.plataformas.email != "") {
                        socialMediaUl.innerHTML +=
                            `
                        <li>
                            <a href="mailto:${local.plataformas.email}" target="_blank">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </a>
                        </li>
                        `
                    }
                    socialMediaDiv.appendChild(socialMediaUl)
                    imgDiv.appendChild(socialMediaDiv)
                    cardDiv.appendChild(imgDiv)

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
                    <span>Site:</span> <a href="https://${local.contato.site}" target="_blank">${local.contato.site} <i class="fa fa-external-link" aria-hidden="true"></i></a>
                </li>
                `
                    if (local.endereco.toLowerCase() != "online" && local.endereco.toLowerCase() != "funcionamento") {
                        descriptionUl.innerHTML +=
                            `
                <li>
                    <span>Funcionamento:</span> ${local.funcionamento}
                </li>
                <li>
                    <span>Endereço:</span> ${local.endereco}
                </li>
                `
                    }
                    descriptionDiv.appendChild(descriptionUl)
                    cardDiv.appendChild(descriptionDiv)

                    if (key.toLocaleLowerCase() != "online") {
                        buttonContainer = document.createElement("div")
                        buttonContainer.classList.add("button-container")
                        buttonContainer.innerHTML =
                            `
                        <a href="${local.maps}">
                            <button>Leve-me <i class="fa fa-car" aria-hidden="true"></i></button>
                        </a>
                        `
                        cardDiv.appendChild(buttonContainer)
                    }
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
            <h2>APAE ONLINE</h2>
            <span><i class="fa fa-info-circle" aria-hidden="true"></i> ONG Online</span>
            <div class="image-container">
                <img src="https://th.bing.com/th/id/OIP.AnOD3O01ip6odDpRlksFCgAAAA?rs=1&pid=ImgDetMain" alt="">
                <div class="midia-social">
                    <ul>
                        <li>
                            <a href="">
                                <i class="fa fa-whatsapp" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>
                        <li>
                            <a href="">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="description">
                <p>
                    Descricao do site, mete um lore ip[sum daqueles brabo mesmo, sabe?
                </p>
                <ul>
                    <li>
                        <span>Telefone:</span> 99999-9999
                    </li>
                    <li>
                        <span>Site:</span> www.google.com <i class="fa fa-external-link" aria-hidden="true"></i>
                    </li>
                </ul>
            </div>
        </div>
    */

    encontrou = 0;
    selectTipo = document.getElementById("select-tipo")
    selectTipo.addEventListener("change", () => {
        if (selectTipo.value.toLowerCase() == "qualquer") {
            cards.innerHTML = ""
            loadLocais()
        }
        locais.Comunidade.forEach((elemento) => {
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
                    <i class="fa fa-info-circle" aria-hidden="true"></i> ${local.tipo}
                    `
                        cardDiv.appendChild(spanCard)

                        imgDiv = document.createElement("div")
                        imgDiv.classList.add("image-container")
                        img = document.createElement("img");
                        img.src = local.imagem
                        imgDiv.appendChild(img)

                        socialMediaDiv = document.createElement("div")
                        socialMediaDiv.classList.add("midia-social")
                        socialMediaUl = document.createElement("ul")
                        if (local.plataformas.whatsapp != "") {
                            socialMediaUl.innerHTML +=
                                `
                        <li>
                            <a href="${local.plataformas.whatsapp}" target="_blank">
                                <i class="fa fa-whatsapp" aria-hidden="true"></i>
                            </a>
                        </li>
                        `
                        }
                        if (local.plataformas.facebook != "") {
                            socialMediaUl.innerHTML +=
                                `
                        <li>
                            <a href="${local.plataformas.facebook}" target="_blank">
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>
                        </li>
                        `
                        }
                        if (local.plataformas.email != "") {
                            socialMediaUl.innerHTML +=
                                `
                        <li>
                            <a href="mailto:${local.plataformas.email}" target="_blank">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </a>
                        </li>
                        `
                        }
                        socialMediaDiv.appendChild(socialMediaUl)
                        imgDiv.appendChild(socialMediaDiv)
                        cardDiv.appendChild(imgDiv)

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
                            <span>Site:</span> <a href="https://${local.contato.site}" target="_blank">${local.contato.site}<i class="fa fa-external-link" aria-hidden="true"></i></a>
                        </li>
                        `
                        if (local.endereco.toLowerCase() != "online" && local.endereco.toLowerCase() != "funcionamento") {
                            descriptionUl.innerHTML +=
                                `
                            <li>
                                <span>Funcionamento:</span> ${local.funcionamento}
                            </li>
                            <li>
                                <span>Endereço:</span> ${local.endereco}
                            </li>
                            `
                        }
                        descriptionDiv.appendChild(descriptionUl)
                        cardDiv.appendChild(descriptionDiv)

                        if (key.toLocaleLowerCase() != "online") {
                            buttonContainer = document.createElement("div")
                            buttonContainer.classList.add("button-container")
                            buttonContainer.innerHTML =
                                `
                        <a href="${local.maps}" target="_blank">
                            <button>Leve-me <i class="fa fa-car" aria-hidden="true"></i></button>
                        </a>
                        `
                            cardDiv.appendChild(buttonContainer)
                        }
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

