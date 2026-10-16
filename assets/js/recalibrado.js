"use strict";

const aliens = [
    {
        nome: "Fogo Fátuo",
        especie: "Methanosiano",
        planeta: "Methanos",
        imagem: "./assets/images/recalibrado/FogoFátuo.webp",
        habilidades: [
            "Pirocinese e projeção de fogo",
            "Regeneração por meio de plantas",
            "Controle e crescimento de vegetação",
            "Força e resistência aprimoradas"
        ],
        aparencia:
            "Um ser vegetal humanoide de pele verde, com partes do corpo cobertas por casca e folhagem. A cabeça é envolta por chamas que ele pode controlar.",
        aparicao:
            "Ben 10: Força Alienígena — \"Ben 10 Returns: Part 1\" (estreia da forma).",
        predador: "Não identificado no catálogo."
    },
    {
        nome: "Eco Eco",
        especie: "Sonorosiano",
        planeta: "Sonorosia",
        imagem: "./assets/images/recalibrado/EcoEco.webp",
        habilidades: [
            "Duplicação em múltiplas cópias",
            "Gritos e ondas sonoras de alta intensidade",
            "Imunidade a ataques sonoros",
            "Coordenação entre suas duplicatas"
        ],
        aparencia:
            "Pequeno alienígena branco, de corpo compacto e cabeça arredondada. Usa um dispositivo semelhante a um amplificador nas costas para canalizar seus gritos sônicos.",
        aparicao:
            "Ben 10: Força Alienígena — \"Ben 10 Returns: Part 1\" (estreia da forma).",
        predador: "Não identificado no catálogo."
    },
    {
        nome: "Enormossauro",
        especie: "Vaxasauriano",
        planeta: "Terradino",
        imagem: "./assets/images/recalibrado/Enormossauro.webp",
        habilidades: [
            "Superforça",
            "Aumento de tamanho e força",
            "Resistência física elevada",
            "Cauda poderosa para combate"
        ],
        aparencia:
            "Dinossauro humanoide de grande porte, com pele marrom, placas ósseas e uma cauda longa. Pode crescer até atingir proporções gigantescas.",
        aparicao:
            "Ben 10: Força Alienígena — \"Ben 10 Returns: Part 1\" (estreia da forma).",
        predador: "Não identificado no catálogo."
    },
    {
        nome: "Arraia-a-Jato",
        especie: "Aerofibiano",
        planeta: "Aeropela",
        imagem: "./assets/images/recalibrado/ArraiaJato.webp",
        habilidades: [
            "Voo em alta velocidade",
            "Propulsão a jato",
            "Natação e deslocamento subaquático",
            "Disparos de energia neurochoque"
        ],
        aparencia:
            "Alienígena aerodinâmico com asas largas, corpo vermelho e amarelo e chifres curvados. As barbatanas permitem que voe e também se mova com facilidade na água.",
        aparicao:
            "Ben 10: Força Alienígena — \"Everybody Talks About the Weather\" (estreia da forma).",
        predador: "Não identificado no catálogo."
    },
    {
        nome: "Friagem",
        especie: "Necrofriggiano",
        planeta: "Kylmyys",
        imagem: "./assets/images/recalibrado/Friagem.webp",
        habilidades: [
            "Criocinese e sopro congelante",
            "Voo por meio de asas",
            "Intangibilidade",
            "Invisibilidade",
            "Respiração e sobrevivência no vácuo"
        ],
        aparencia:
            "Ser alado de aparência espectral, com corpo azul-escuro e marcas ciano brilhantes. Suas asas lembram uma capa e podem se fechar ao redor do corpo.",
        aparicao:
            "Ben 10: Força Alienígena — \"Kevin's Big Score\" (estreia da forma).",
        predador: "Não identificado no catálogo."
    },
    {
        nome: "Ártropode",
        especie: "Cerebrocrustaceano",
        planeta: "Encephalonus IV",
        imagem: "./assets/images/recalibrado/Artropode.webp",
        habilidades: [
            "Intelecto e processamento mental excepcionais",
            "Manipulação e projeção de eletricidade",
            "Criação de campos de força",
            "Respiração subaquática"
        ],
        aparencia:
            "Pequeno ser crustáceo com um cérebro exposto protegido por uma carapaça. Possui grandes pinças e se desloca sobre várias pernas.",
        aparicao:
            "Ben 10: Força Alienígena — \"Pier Pressure\" (estreia da forma).",
        predador: "Não identificado no catálogo."
    },
    {
        nome: "Macaco-Aranha",
        especie: "Arachnichimp",
        planeta: "Aranhaschimmia",
        imagem: "./assets/images/recalibrado/MacacoAranha.webp",
        habilidades: [
            "Agilidade e reflexos aprimorados",
            "Escalada em superfícies",
            "Disparo de teias pegajosas",
            "Força e coordenação aprimoradas"
        ],
        aparencia:
            "Alienígena azul de corpo semelhante ao de um macaco, com quatro braços, cauda preênsil e mãos e pés adaptados para escalar.",
        aparicao:
            "Ben 10: Força Alienígena — \"What Are Little Girls Made Of?\" (estreia da forma).",
        predador: "Não identificado no catálogo."
    },
    {
        nome: "Gosma",
        especie: "Polimorfo",
        planeta: "Viscosia",
        imagem: "./assets/images/recalibrado/Gosma.webp",
        habilidades: [
            "Corpo líquido e maleável",
            "Mudança de forma",
            "Regeneração",
            "Levitação controlada por um projetor antigravitacional",
            "Projeção de ácido"
        ],
        aparencia:
            "Massa de gosma verde capaz de assumir formas variadas. Um disco tecnológico flutua acima dele e mantém seu corpo unido por meio de um campo antigravitacional.",
        aparicao:
            "Ben 10: Força Alienígena — \"The Gauntlet\" (estreia da forma).",
        predador: "Não identificado no catálogo."
    },
    {
        nome: "Cromático",
        especie: "Crystalsapien",
        planeta: "Mor'Otesi",
        imagem: "./assets/images/recalibrado/Cromático.webp",
        habilidades: [
            "Absorção e redirecionamento de energia",
            "Disparos de energia",
            "Criação de construções cristalinas",
            "Corpo cristalino resistente"
        ],
        aparencia:
            "Ser de aparência cristalina, com corpo escuro e cristais roxos e magenta que se projetam da cabeça, dos ombros e dos braços.",
        aparicao:
            "Ben 10: Força Alienígena — \"All That Glitters\" (estreia da forma).",
        predador: "Não identificado no catálogo."
    },
    {
        nome: "Alien X",
        especie: "Celestialsapien",
        planeta: "Forge of Creation",
        imagem: "./assets/images/recalibrado/AlienX.webp",
        habilidades: [
            "Manipulação da realidade e do espaço-tempo",
            "Força e durabilidade extraordinárias",
            "Criação e alteração de matéria",
            "Deslocamento pelo espaço"
        ],
        aparencia:
            "Humanoide negro coberto por pontos brancos semelhantes a estrelas, com marcas claras nos braços e no rosto e olhos verdes luminosos.",
        aparicao:
            "Ben 10: Força Alienígena — \"X = Ben + 2\" (estreia da forma).",
        predador: "Não identificado no catálogo."
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
