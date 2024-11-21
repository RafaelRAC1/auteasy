const motivos = {
    "missao": "Garantir que as pessoas de Mogi das Cruzes tenham acesso democratizado a informações relacionadas a TEA",
    "visao": "Se tornar um site referencia nisso aqui.",
    "valores": "Respeito, inclusao, acessibilidade, inovacao"
}

btnNext = document.getElementById("btn-next");
btnPrevious = document.getElementById("btn-previous");
textContent = document.getElementById("text-content");
maTitle = document.getElementById("ma-title");
maIcon = document.getElementById("ma-icon");
item1 = document.getElementById("item-1");
item2 = document.getElementById("item-2");
item3 = document.getElementById("item-3");

current = 0;
previous = 2;
function changeTextNext() {
    switch (current) {
        case 0:
            textContent.innerText = motivos.missao
            maTitle.innerText = "Missão"
            maIcon.classList = "fa fa-flag"
            item3.style = ""
            item3.classList = ""
            item1.style.backgroundColor = "green"
            item1.classList = "tab-up"
            current = 1
            previous = 0
            break
        case 1:
            textContent.innerText = motivos.visao
            maTitle.innerText = "Visão"
            maIcon.classList = "fa fa-dot-circle-o"
            item1.style = ""
            item1.classList = ""
            item2.style.backgroundColor = "red"
            item2.classList = "tab-up"
            current = 2
            previous = 1
            break
        case 2:
            textContent.innerText = motivos.valores

            maTitle.innerText = "Valores"
            maIcon.classList = "fa fa-globe"
            item2.style = ""
            item2.classList = ""
            item3.style.backgroundColor = "teal"
            item3.classList = "tab-up"
            current = 0
            previous = 2
            break
    }
}

function changeTextPrevious() {
    switch (previous) {
        case 0:
            textContent.innerText = motivos.valores
            maTitle.innerText = "Valores"
            maIcon.classList = "fa fa-globe"
            item1.style = ""
            item1.classList = ""
            item3.style.backgroundColor = "teal"
            item3.classList = "tab-up"
            current = 0
            previous = 2
            break
        case 1:
            textContent.innerText = motivos.missao
            maTitle.innerText = "Missão"
            maIcon.classList = "fa fa-flag"
            item2.style = ""
            item2.classList = ""
            item1.style.backgroundColor = "green"
            item1.classList = "tab-up"
            current = 1
            previous = 0
            break
        case 2:
            textContent.innerText = motivos.visao
            maTitle.innerText = "Visão"
            maIcon.classList = "fa fa-dot-circle-o"
            item3.style = ""
            item3.classList = ""
            item2.style.backgroundColor = "red"
            item2.classList = "tab-up"
            current = 2
            previous = 1
            break
    }
}

btnNext.addEventListener("click", () => {
    changeTextNext();
    btnNext.childNodes[0].classList.remove("next")
    setTimeout(() => {
        btnNext.childNodes[0].classList.add("next")
    }, 0)
})
btnPrevious.addEventListener("click", () => {
    changeTextPrevious();
    btnPrevious.childNodes[0].classList.remove("previous")
    setTimeout(() => {
        btnPrevious.childNodes[0].classList.add("previous")
    }, 0)
})

window.onload = () => {
    changeTextNext();
};