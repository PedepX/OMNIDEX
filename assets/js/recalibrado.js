"use strict";

const aliens = [
    {
        nome: "Fogo Fátuo",
        especie: "Methanosiano",
        planeta: "Methanos",
        imagem: "./assets/images/recalibrado/FogoFátuo.webp",
        habilidades: [
            "Controla o fogo e a vegetação, podendo acelerar o crescimento de plantas",
            "Regenera o corpo e libera metano ou gás sonífero",
            "Alongamento e elasticidade corporal",
            "Imunidade ao fogo"
        ],
        aparencia:
            "Planta humanoide de pele verde e rosto escuro, cercado por estruturas vermelhas e amarelas que lembram chamas. Tem pés semelhantes a raízes, pétalas vermelhas nos ombros e espinhos nos braços e nas pernas.",
        aparicao:
            "O Retorno de Ben 10: Parte 1 — 1º episódio de Ben 10: Força Alienígena (2008). É a primeira aparição do Fogo Fátuo e a primeira transformação de Ben com o Omnitrix recalibrado.",
        predador:
            "Não Identificado"
    },
    {
        nome: "Eco Eco",
        especie: "Sonorosiano",
        planeta: "Sonorosia",
        imagem: "./assets/images/recalibrado/EcoEco.webp",
        habilidades: [
            "Emite gritos e ondas sonoras de alta intensidade",
            "Cria cópias de si mesmo",
            "Usa ecolocalização",
        ],
        aparencia:
            "Pequeno humanoide branco feito de silicone, com o corpo parecido com um amplificador. Possui um apêndice semelhante a um aparelho de música nas costas e faixas que lembram fitas cassete nas pernas.",
        aparicao:
            "O Retorno de Ben 10: Parte 2 — 2º episódio de Ben 10: Força Alienígena (2008). É a primeira aparição do Eco Eco e uma das primeiras transformações de Ben com o Omnitrix recalibrado.",
        predador: "Não Identificado"
    },
    {
        nome: "Enormossauro",
        especie: "Vaxasauriano",
        planeta: "Terradino",
        imagem: "./assets/images/recalibrado/Enormossauro.webp",
        habilidades: [
            "Superforça e resistência aprimorada",
            "Agilidade e capacidade de salto aprimoradas",
            "Pode crescer e aumentar ainda mais sua força",
            "Emite um rugido poderoso"
        ],
        aparencia:
            "Dinossauro humanoide de pele marrom e resistente. Ao crescer, destaca ainda mais suas placas semelhantes às de um estegossauro nas costas, na cabeça e na cauda.",
        aparicao:
            "O Retorno de Ben 10: Parte 2 — 2º episódio de Ben 10: Força Alienígena (2008). É a primeira aparição do Enormossauro e uma das primeiras transformações de Ben com o Omnitrix recalibrado.",
        predador: "Tyranópode, predador natural dos Vaxasaurianos."
    },
    {
        nome: "Arraia-a-Jato",
        especie: "Aerofibiano",
        planeta: "Aeropela",
        imagem: "./assets/images/recalibrado/ArraiaJato.webp",
        habilidades: [
            "Voo e natação em supervelocidade",
            "Dispara raios pelos olhos e pela cauda",
            "Sobrevive no espaço"
        ],
        aparencia:
            "Humanoide vermelho com aparência de arraia, olhos verdes e chifres amarelos entre eles. Tem marcas escuras no torso, estruturas semelhantes a guelras sob os braços e asas amarelas ligadas aos braços, usadas para voar e deslizar na água.",
        aparicao:
            "Tempo Fechado — 3º episódio de Ben 10: Força Alienígena (2008).",
        predador: "Não Identificado"
    },
    {
        nome: "Friagem",
        especie: "Necrofriggiano",
        planeta: "Kylmyys",
        imagem: "./assets/images/recalibrado/Friagem.webp",
        habilidades: [
            "Criocinese",
            "Voa e pode levitar",
            "Atravessa objetos ao tornar-se intangível",
            "Sobrevive no espaço e respira debaixo d'água",
        ],
        aparencia:
            "Humanoide semelhante a uma mariposa, de corpo escuro com marcas ciano. Suas quatro asas e antenas podem se dobrar como um manto com capuz, dando-lhe aparência fantasmagórica.",
        aparicao:
            "Uma Artimanha do Kevin — 4º episódio de Ben 10: Força Alienígena (2008).",
        predador: "Hipnótico, predador natural dos Necrofriggianos."
    },
    {
        nome: "Ártropode",
        especie: "Cerebrocrustaceano",
        planeta: "Encephalonus IV",
        imagem: "./assets/images/recalibrado/Artropode.webp",
        habilidades: [
            "Superinteligência, telepatia e telecinesia",
            "Gera e controla eletricidade e campos de força",
            "Levitação e escalada em paredes",
            "Pinças fortes"
        ],
        aparencia:
            "Crustáceo laranja semelhante a um caranguejo, com cabeça oval e uma faixa escura que separa a região do cérebro dos olhos e da boca. Tem duas grandes pinças e três pares de pernas.",
        aparicao:
            "Confusão no Cais — 7º episódio de Ben 10: Força Alienígena (2008).",
        predador: "Vicetopus, predador natural dos Cerebrocrustaceanos."
    },
    {
        nome: "Macaco-Aranha",
        especie: "Arachnichimp",
        planeta: "Aranhaschimmia",
        imagem: "./assets/images/recalibrado/MacacoAranha.webp",
        habilidades: [
            "Dispara teias e adere a superfícies sólidas",
            "Audição aprimorada",
            "Reflexos aprimorados"
        ],
        aparencia:
            "Macaco de pelo azul com quatro braços, quatro olhos escuros contornados de verde e cauda preta com duas listras azuis. Uma marca escura em forma de raio cruza o torso.",
        aparicao:
            "Do que são Feitas as Garotinhas? — 8º episódio de Ben 10: Força Alienígena (2008).",
        predador: "Tubarão de Raiz, predador natural dos Arachnachimp."
    },
    {
        nome: "Gosma",
        especie: "Polimorfo",
        planeta: "Viscosia",
        imagem: "./assets/images/recalibrado/Gosma.webp",
        habilidades: [
            "Muda de forma e controla a viscosidade do corpo",
            "Regeneração",
            "Produz e projeta limo, inclusive ácido",
            "O projetor antigravitacional controla seus movimentos"
        ],
        aparencia:
            "Ser humanoide feito de gosma. Usa um projetor antigravitacional para controlar os movimentos do corpo e conseguir falar.",
        aparicao:
            "A Manopla — 9º episódio de Ben 10: Força Alienígena (2008).",
        predador: "Não Identificado."
    },
    {
        nome: "Cromático",
        especie: "Crystalsapien",
        planeta: "Mor'Otesi",
        imagem: "./assets/images/recalibrado/Cromático.webp",
        habilidades: [
            "Absorve, desvia e projeta energia; também absorve mana",
            "Gera luz, raios ultravioletas, arco-íris e campos de força",
            "Voa e regenera o corpo",
            "Resiste a calor, radiação, eletricidade e possessão"
        ],
        aparencia:
            "Humanoide de cristal à base de silício, com corpo púrpura marcado por linhas escuras. Tem rosto e mãos magenta, um olho verde central e cristais magenta nas costas, no peito e no alto da cabeça.",
        aparicao:
            "Nem Tudo Que Reluz... — 5º episódio de Ben 10: Força Alienígena (2008).",
        predador: "Não Identificado"
    },
    {
        nome: "Alien X",
        especie: "Sapien Celestial",
        planeta: "Centro da Criação",
        imagem: "./assets/images/recalibrado/AlienX.webp",
        habilidades: [
            "Deforma a realidade, o espaço e o tempo",
            "Pode criar ou destruir um universo",
            "É capaz de realizar praticamente qualquer coisa que consiga imaginar"
        ],
        aparencia:
            "Humanoide negro salpicado de pontos brancos que lembram estrelas, com três saliências na testa e olhos verdes sem pupilas. O símbolo do Omnitrix fica no peito.",
        aparicao:
            "X = Ben + 2 — 39º episódio de Ben 10: Força Alienígena (2008).",
        predador: "Não Identificado."
    }
];

let currentAlien = 0;
let omnitrixActivated = false;
let activationInProgress = false;
let alienTransformed = false;
let deactivationInProgress = false;

const alienImage = document.getElementById("alienImage");
const missingAlienArt = document.getElementById("missingAlienArt");
const omnitrixImage = document.getElementById("omnitrixImage");
const alienChangeSound = document.getElementById("alienChangeSound");
const alienRevealSound = document.getElementById("alienRevealSound");
const alienDeactivationSound = document.getElementById("alienDeactivationSound");
const omnitrixActivationSound = document.getElementById("omnitrixActivationSound");
const alienRevealButton = document.getElementById("alienRevealButton");
const alienInfo = document.getElementById("alienInfo");
const transformationFlash = document.getElementById("transformationFlash");
const alienName = document.getElementById("alienName");
const alienSpecies = document.getElementById("alienSpecies");
const alienPlanet = document.getElementById("alienPlanet");
const alienAbilities = document.getElementById("alienAbilities");
const alienAppearance = document.getElementById("alienAppearance");
const alienAppearanceEpisode = document.getElementById("alienAppearanceEpisode");
const alienPredator = document.getElementById("alienPredator");
const alienCounter = document.getElementById("alienCounter");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const activationButton = document.getElementById("activationButton");
const activationConsole = document.getElementById("activationConsole");
const selectorArea = document.getElementById("selectorArea");

const recalibratedWatchIdle =
    "./assets/images/recalibrado/OmnitrixRecalibrado.PNG";
const recalibratedWatchActive =
    "./assets/images/recalibrado/OmnitrixRecalibradoAtivado.webp";
const recalibratedWatchTransformed =
    "./assets/images/recalibrado/OmnitrixTransformado.png";

function getSoundDurationMs(audio, fallbackDurationMs) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return 20;
    }

    return Number.isFinite(audio.duration) && audio.duration > 0
        ? audio.duration * 1000
        : fallbackDurationMs;
}

function playAudio(audio, errorMessage) {
    audio.currentTime = 0;
    audio.play().catch(error => {
        console.error(errorMessage, error);
    });
}

function showAlien(animateOmnitrix = false) {
    const alien = aliens[currentAlien];

    if (!alien) {
        return;
    }

    alienTransformed = false;
    selectorArea.classList.remove("is-transformed");
    alienInfo.hidden = true;
    activationConsole.hidden = false;
    omnitrixImage.src = alienTransformed
        ? recalibratedWatchTransformed
        : omnitrixActivated
            ? recalibratedWatchActive
            : recalibratedWatchIdle;
    omnitrixImage.alt = alienTransformed
        ? "Omnitrix Recalibrado transformado"
        : omnitrixActivated
            ? "Omnitrix Recalibrado ativado"
            : "Omnitrix Recalibrado";
    alienRevealButton.setAttribute("aria-expanded", "false");
    alienRevealButton.setAttribute("aria-label", `Transformar em ${alien.nome}`);
    alienRevealButton.title = "Clique para se transformar";

    alienImage.hidden = !alien.imagem;
    missingAlienArt.hidden = Boolean(alien.imagem);
    if (alien.imagem) {
        alienImage.src = alien.imagem;
        alienImage.alt = alien.nome;
    } else {
        alienImage.removeAttribute("src");
        alienImage.alt = "";
        missingAlienArt.textContent = `ARTE DE ${alien.nome.toUpperCase()} INDISPONÍVEL`;
    }

    alienName.textContent = alien.nome.toUpperCase();
    alienSpecies.textContent = alien.especie.toUpperCase();
    alienPlanet.textContent = alien.planeta.toUpperCase();
    alienAppearance.textContent = alien.aparencia;
    alienAppearanceEpisode.textContent = alien.aparicao;
    alienPredator.textContent = alien.predador;

    alienAbilities.replaceChildren();
    alien.habilidades.forEach(habilidade => {
        const item = document.createElement("li");
        item.textContent = habilidade;
        alienAbilities.appendChild(item);
    });

    const numero = String(currentAlien + 1).padStart(2, "0");
    const total = String(aliens.length).padStart(2, "0");
    alienCounter.textContent = `DNA'S CATALOGADOS ${numero} / ${total}`;

    if (animateOmnitrix) {
        omnitrixImage.classList.remove(
            "omnitrix-activating",
            "omnitrix-spinning"
        );
        omnitrixImage.style.setProperty(
            "--change-duration",
            `${getSoundDurationMs(alienChangeSound, 1536)}ms`
        );
        void omnitrixImage.offsetWidth;
        omnitrixImage.classList.add("omnitrix-spinning");
        playAudio(alienChangeSound, "Não foi possível reproduzir o som da troca:");
    }
}

function waitForAnimation(element, animationName, durationMs) {
    return new Promise(resolve => {
        let fallbackTimer;

        const finish = () => {
            window.clearTimeout(fallbackTimer);
            element.removeEventListener("animationend", handleAnimationEnd);
            element.removeEventListener("animationcancel", handleAnimationEnd);
            resolve();
        };

        const handleAnimationEnd = event => {
            if (event.animationName === animationName) {
                finish();
            }
        };

        element.addEventListener("animationend", handleAnimationEnd);
        element.addEventListener("animationcancel", handleAnimationEnd);
        fallbackTimer = window.setTimeout(finish, durationMs + 100);
    });
}

function playAudioUntilEnded(audio) {
    return new Promise(resolve => {
        let fallbackTimer;
        const finish = () => {
            window.clearTimeout(fallbackTimer);
            audio.removeEventListener("ended", finish);
            resolve();
        };

        audio.addEventListener("ended", finish, { once: true });
        fallbackTimer = window.setTimeout(
            finish,
            getSoundDurationMs(audio, 2232) + 150
        );
        audio.play().catch(error => {
            console.error("Não foi possível reproduzir o som de destransformação:", error);
            finish();
        });
    });
}

async function deactivateAlien() {
    alienTransformed = false;
    deactivationInProgress = true;
    alienImage.hidden = true;
    missingAlienArt.hidden = true;
    alienInfo.hidden = true;
    alienRevealButton.disabled = true;
    alienRevealButton.setAttribute("aria-expanded", "false");
    alienRevealButton.setAttribute("aria-label", "Destransformando");
    alienRevealButton.title = "Destransformando...";

    const deactivationFinished = playAudioUntilEnded(alienDeactivationSound);
    const deactivationDurationMs = getSoundDurationMs(
        alienDeactivationSound,
        2232
    );
    omnitrixImage.style.setProperty(
        "--deactivation-duration",
        `${deactivationDurationMs}ms`
    );
    omnitrixImage.classList.remove(
        "omnitrix-spinning",
        "omnitrix-activating",
        "omnitrix-deactivation-glow"
    );
    void omnitrixImage.offsetWidth;
    omnitrixImage.classList.add("omnitrix-deactivation-glow");
    await Promise.all([
        deactivationFinished,
        waitForAnimation(
            omnitrixImage,
            "recalibratedDeactivation",
            deactivationDurationMs
        )
    ]);

    omnitrixImage.classList.remove("omnitrix-deactivation-glow");
    selectorArea.classList.remove("is-transformed", "is-activated");
    omnitrixImage.src = recalibratedWatchIdle;
    omnitrixImage.alt = "Omnitrix Recalibrado";
    alienImage.hidden = !aliens[currentAlien].imagem;
    missingAlienArt.hidden = Boolean(aliens[currentAlien].imagem);
    activationConsole.hidden = false;
    omnitrixActivated = false;
    activationButton.disabled = false;
    activationButton.setAttribute("aria-pressed", "false");
    activationButton.setAttribute("aria-label", "Ativar Omnitrix Recalibrado");
    activationButton.title = "Ativar Omnitrix Recalibrado";
    previousButton.disabled = true;
    nextButton.disabled = true;
    alienRevealButton.disabled = true;
    deactivationInProgress = false;
}

function toggleAlienTransformation() {
    if (!omnitrixActivated || activationInProgress || deactivationInProgress) {
        return;
    }

    if (alienTransformed) {
        void deactivateAlien();
        return;
    }

    alienTransformed = true;
    alienInfo.hidden = false;
    activationConsole.hidden = true;
    selectorArea.classList.add("is-transformed");
    omnitrixImage.classList.remove(
        "omnitrix-activating",
        "omnitrix-spinning"
    );
    omnitrixImage.src = recalibratedWatchTransformed;
    omnitrixImage.alt = "Omnitrix Recalibrado transformado";
    alienRevealButton.setAttribute("aria-expanded", "true");
    alienRevealButton.setAttribute(
        "aria-label",
        `Destransformar de ${aliens[currentAlien].nome}`
    );
    alienRevealButton.title = "Clique novamente para se destransformar";

    transformationFlash.classList.remove("is-active");
    const transformationDurationMs = getSoundDurationMs(
        alienRevealSound,
        2040
    );
    transformationFlash.style.setProperty(
        "--transformation-duration",
        `${transformationDurationMs}ms`
    );
    void transformationFlash.offsetWidth;
    transformationFlash.classList.add("is-active");

    alienInfo.style.setProperty(
        "--transformation-duration",
        `${transformationDurationMs}ms`
    );
    alienInfo.classList.remove("alien-info-revealing");
    void alienInfo.offsetWidth;
    alienInfo.classList.add("alien-info-revealing");
    playAudio(alienRevealSound, "Não foi possível reproduzir o som da transformação:");
}

function changeAlien(direction) {
    if (
        !omnitrixActivated
        || activationInProgress
        || alienTransformed
        || deactivationInProgress
    ) {
        return;
    }

    currentAlien = (currentAlien + direction + aliens.length) % aliens.length;
    showAlien(true);
}

function activateOmnitrix() {
    if (omnitrixActivated) {
        return;
    }

    omnitrixActivated = true;
    selectorArea.classList.add("is-activated");
    omnitrixImage.src = recalibratedWatchActive;
    omnitrixImage.alt = "Omnitrix Recalibrado ativado";
    omnitrixImage.classList.remove("omnitrix-activating");
    omnitrixImage.style.setProperty(
        "--activation-duration",
        `${getSoundDurationMs(omnitrixActivationSound, 2040)}ms`
    );
    void omnitrixImage.offsetWidth;
    omnitrixImage.classList.add("omnitrix-activating");
    activationButton.disabled = true;
    activationButton.setAttribute("aria-pressed", "true");
    activationButton.setAttribute("aria-label", "Omnitrix Recalibrado ativado");
    activationButton.title = "Omnitrix Recalibrado ativado";
    previousButton.disabled = true;
    nextButton.disabled = true;
    alienRevealButton.disabled = true;
    activationInProgress = true;
    const activationDurationMs = getSoundDurationMs(
        omnitrixActivationSound,
        2040
    );
    selectorArea.style.setProperty(
        "--activation-duration",
        `${activationDurationMs}ms`
    );
    playAudio(
        omnitrixActivationSound,
        "Não foi possível reproduzir o som de ativação:"
    );
    void waitForAnimation(
        omnitrixImage,
        "recalibratedActivation",
        activationDurationMs
    ).then(() => {
        activationInProgress = false;
        if (!omnitrixActivated) {
            return;
        }
        previousButton.disabled = false;
        nextButton.disabled = false;
        alienRevealButton.disabled = false;
    });
}

activationButton.addEventListener("click", activateOmnitrix);
nextButton.addEventListener("click", () => changeAlien(1));
previousButton.addEventListener("click", () => changeAlien(-1));
alienRevealButton.addEventListener("click", toggleAlienTransformation);

document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
        changeAlien(1);
    } else if (event.key === "ArrowLeft") {
        changeAlien(-1);
    }
});

showAlien();