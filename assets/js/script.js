/* =========================================================
   DADOS TEMPORÁRIOS
========================================================= */

const aliens = [

    {
        id: 1,

        nome: "Chama",

        especie: "Pyronita",

        planeta: "Pyros",

        imagem: "./assets/images/Chama.webp",

        habilidades: [
            "Pirocinese",
            "Geração de calor",
            "Resistência a altas temperaturas",
            "Propulsão através de chamas"
        ],

        aparencia:
            "É uma forma de vida humanoide baseada em plasma de 2 metros de altura, Seu corpo é constituído por um interior de magma brilhante coberta por um vermelho escuro. Seu corpo irradia grandes quantidades de calor. Seus pés têm apenas dois dedos e uma parte traseira pontuda.",

        aparicao:
            "E Então Eram 10 — 1º episódio de Ben 10 (2005). É a primeira aparição do Chama e também a primeira transformação de Ben com o Omnitrix.",

        predador:
            "Siridozer: Predador natural dos Pyronitas. Possui um corpo resistente ao fogo e uma grande força física, usando seu chifre para atacar e quebrar obstáculos. Sua saliva também é resistente às chamas, permitindo apagar o fogo de um Pyronita."
    },

    {
        id: 2,

        nome: "Besta",

        especie: "Vulpimancer",

        planeta: "Vulpin",

        imagem: "./assets/images/Besta.webp",

        habilidades: [
            "Sentidos aprimorados",
            "Rastreamento por olfato",
            "Visão térmica",
            "Garras afiadas",
            "Força aprimorada",
            "Agilidade aprimorada"
        ],

        aparencia:
            "Besta parece um cão grande e laranja sem olhos e cauda. Seus dentes são muito grandes e ficam fora da sua boca. Ele não possui olhos, em vez disso ele utiliza seu senso de olfato e audição no lugar da visão, que são auxiliados por três narinas localizadas em cada lado de seu pescoço.",

        aparicao:
            "E Então Eram 10 — 1º episódio de Ben 10 (2005). É a primeira aparição do Besta e também uma das primeiras transformações de Ben com o Omnitrix.",

        predador:
            "Não Identificado."
    },

    {
        id: 3,

        nome: "Diamante",

        especie: "Petrosapien",

        planeta: "Petropia",

        imagem: "./assets/images/Diamante.webp",

        habilidades: [
            "Cristalocinese",
            "Alteração corporal",
            "Regeneração",
            "Reflexão de energia",
            "Força aprimorada",
            "Resistência aprimorada"
        ],

        aparencia:
            "O corpo de Diamante é composto por um cristal orgânico extremamente resistente, que se assemelham a tadenita, tornando-o quase invulnerável, também possui quatro cristais grandes em suas costas, seu corpo é completamente verde cristalizado.",

        aparicao:
            "E Então Eram 10 — 1º episódio de Ben 10 (2005). É a primeira aparição do Diamante e também uma das primeiras transformações de Ben com o Omnitrix.",

        predador:
            "Não Identificado."
    },

    {
        id: 4,

        nome: "XLR8",

        especie: "Kineceleran",

        planeta: "Kinet",

        imagem: "./assets/images/Xlr8.webp",

        habilidades: [
            "Supervelocidade",
            "Superagilidade",
            "Reflexos aprimorados",
            "Manipulação de fricção",
            "Geração de vórtices",
            "Garras afiadas"
        ],

        aparencia:
            "XLR8 lembra um Velociraptor semi-blindado. Alienígena esbelto, com braços finos que possuem três garras em cada mão, e duas garras nos pés por cima de bolas pretas que as usa quando corre, além de dar suporte as suas longas pernas. Ele usa um elmo com uma viseira azulada, deixando as outras características de sua cabeça desconhecidas. Sempre que seu  visor não é usado, pode-se ver seu rosto que é azul com olhos verdes e duas listras pretas que os atravessam, além de possuir lábios negros.",

        aparicao:
            "E Então Eram 10 — 1º episódio de Ben 10 (2005). É a primeira aparição do XLR8 e também uma das primeiras transformações de Ben com o Omnitrix.",

        predador:
            "Não Identificado."
    },

    {
        id: 5,

        nome: "Massa Cinzenta",

        especie: "Galvaniano",

        planeta: "Galvan Prime",

        imagem: "./assets/images/MassaCinzenta.webp",

        habilidades: [
            "Superinteligência",
            "Conhecimento tecnológico",
            "Visão microscópica",
            "Escalar superfícies",
            "Respiração subaquática",
            "Língua preênsil"
        ],

        aparencia:
            "Massa Cinzenta é um alienígena de pele cinza, e semelhante a um sapo humanoide, e tem quinze centímetros de altura.",

        aparicao: "Washington A.C — 2º episódio de Ben 10 (2005).",

        predador:
            "Omnivorácio: Predador natural dos Galvanianos. Possui grande agilidade, força, voo e dentes afiados, características que lhe permitem caçar os pequenos Galvanianos."
    },

    {
        id: 6,

        nome: "Quatro Braços",

        especie: "Tetramand",

        planeta: "Khoros",

        imagem: "./assets/images/QuatroBracos.webp",

        habilidades: [
            "Superforça",
            "Superpulo",
            "Resistência aprimorada",
            "Durabilidade aprimorada",
            "Onda de choque",
            "Agilidade aprimorada"
        ],

        aparencia:
            "Quatro Braços é um alienígena humanoide de aproximadamente 3,70 metros de altura, músculos avantajados, dois pares de braços de quatro dedos e pele vermelha bem desenvolvida. A listra preta vai desde o queixo até o lábio inferior, e ele tem quatro olhos: um par principal e um par menor abaixo deles.",

        aparicao:
            "Washington A.C. — 2º episódio de Ben 10 (2005).",

        predador:
            "Grandes criaturas predatórias capazes de sobreviver nas regiões selvagens de Khoros."
    },

        {
        id: 7,

        nome: "Insectóide",

        especie: "Lepidopterrano",

        planeta: "Lepidopterra",

        imagem: "./assets/images/Insectoide.webp",

        habilidades: [
            "Voo",
            "Secreção de gosma",
            "Força aprimorada",
            "Agilidade aprimorada",
            "Garras afiadas",
            "Visão composta"
        ],

        aparencia:
            "Insectóide é um inseto com quatro longas pernas, e dois braços com mãos pretas, dando uma impressão de que está usando luvas, e três dedos em cada um delas. Sua cabeça é completamente preta, e nela estão ligados quatro olhos pequenos e laranjas. Em suas costas, tem uma grande e frágil asa verde transparente.",
        
        aparicao:
            "Washington A.C. — 2º episódio de Ben 10 (2005).",

        predador:
            "Lagartóide: Predador natural dos Lepidopterranos, capaz de liberar uma névoa que dissolve a gosma deles, além de possuir grande força, agilidade e garras e dentes afiados.",
    },

        {
        id: 9,
        nome: "Aquático",

        especie: "Pisccis volann",

        planeta: "Piscciss",

        imagem: "./assets/images/Aquatico.webp",

       habilidades: [
            "Respiração subaquática",
            "Natação aprimorada",
            "Mandíbulas poderosas",
            "Garras afiadas",
            "Visão aprimorada",
            "Regeneração"
        ],

        aparencia:
            "Aquático é um alienígena que podemos nos referir como um tritão, sua cabeça lembra a de um peixe pescador. Ele possui uma forma humanoide que o fornece pés, permitindo sua respiração em terra por alguns minutos, mas também sendo capaz de transformar suas pernas em uma poderosa nadadeira o proporcionando uma excepcional agilidade debaixo d'água mesmo resistindo a forte pressão da água. Ele possui uma luz fosforescente em sua cabeça, o que permite que ele veja em áreas escuras. Seu corpo é coberto de escamas e seus dentes são expostos e são capazes de perfurar o aço facilmente.",

        aparicao:
            "O Krakken",

        predador:
            "Não Identificado.",
    },

        {
        id: 8,

        nome: "Ultra-T",

        especie: "Mecamorfo Galvânico",

        planeta: "Galvan B",

        imagem: "./assets/images/UltraT.webp",

        habilidades: [
            "Tecnomorfismo",
            "Aprimoramento tecnológico",
            "Manipulação tecnológica",
            "Criação de armas",
            "Regeneração",
            "Intangibilidade tecnológica"
        ],

        aparencia:
            "Ultra T tem sua pele preta com listras verdes que se assemelham a um circuito em cima dele. O círculo verde que se localiza em sua cabeça é o seu olho, que brilha sempre que ele fala. Seu corpo é composto de bilhões de máquinas chamadas de Nanites.",
        
        aparicao:
            "A Ferro e Fogo — episódio da série Ben 10 (2005).",

        predador:
            "Não Identificado.",
    },

    {
        id: 10,
        nome: "Fantasmático",

        especie: "Ectonurita",

        planeta: "Anur Phateos",

        imagem: "./assets/images/Fantasmatico.webp",

        habilidades: [
            "Intangibilidade",
            "Invisibilidade",
            "Possessão",
            "Telecinese",
            "Regeneração",
            "Tentáculos Preênseis"
        ],

        aparencia:
            "Fantasmático é semelhante a um fantasma branco, com linhas pretas passando por seu corpo e seu olho é roxo. Sua cauda lembra bastante uma fumaça, sendo confirmado que inicialmente ele era para ser baseado em um gênio da lâmpada.",

        aparicao:
            "Aposentadoria Permanente — 4º episódio de Ben 10 (2005).",

        predador:
            "Não Identificado.",
    },

{
    id: 15,
    nome: "Frankenstrike",

    especie: "Transyliano",

    planeta: "Anur Transyl",

    imagem: "./assets/images/Frankenstrike.webp",

    habilidades: [
        "Eletrocinese",
        "Absorção de eletricidade",
        "Magnetismo",
        "Força aprimorada",
        "Reflexos aprimorados",
        "Descargas elétricas"
    ],

    aparencia:
        "FrankenStrike possui um corpo humanoide alto e musculoso, pele acinzentada e amarelada, cabelos escuros e olhos verdes sem pupilas. Seu corpo apresenta marcas semelhantes a costuras e parafusos metálicos, além de grandes estruturas nas costas que conduzem e armazenam eletricidade.",

    aparicao:
        "Tenha Medo do Escuro — episódio da série Ben 10 (2005).",

    predador:
        "Não identificado."
},

{
    id: 14,
    nome: "Snare-Oh",

    especie: "Thep Khufan",

    planeta: "Anur Khufos",

    imagem: "./assets/images/Snare-Oh.webp",

    habilidades: [
        "Elasticidade",
        "Manipulação de bandagens",
        "Metamorfose corporal",
        "Regeneração",
        "Criação de tornados",
        "Força aprimorada"
    ],

    aparencia:
        "Snare-Oh possui um corpo humanoide semelhante ao de uma múmia, composto por bandagens que pode controlar e estender. Na versão clássica, apresenta olhos verdes brilhantes, um adereço egípcio preto e dourado na cabeça e acessórios escuros nos braços e nas pernas.",

    aparicao:
        "O Retorno — episódio da série Ben 10 (2005).",

    predador:
        "Não identificado."
},

{
    id: 13,
    nome: "Blitzwolfer",

    especie: "Loboano",

    planeta: "Luna Lobo, lua de Anur Transyl",

    imagem: "./assets/images/Blitzwolfer.webp",

    habilidades: [
        "Uivo ultrassônico",
        "Sentidos aprimorados",
        "Força aprimorada",
        "Velocidade aprimorada",
        "Agilidade aprimorada",
        "Mordida e garras afiadas"
    ],

    aparencia:
        "BlitzWolfer possui aparência semelhante à de um lobisomem, com pelagem cinza, focinho alongado, orelhas pontudas e uma cauda espessa. Apresenta três estruturas semelhantes a tendrões na cabeça, garras afiadas e uma boca capaz de emitir poderosas ondas sonoras.",

    aparicao:
        "LobisBen — episódio da série Ben 10 (2005).",

    predador:
        "Não identificado."
},

{
    id: 16,
    nome: "Glutão",

    especie: "Gourmand Perk",

    planeta: "Peptos XI (destruído)",

    imagem: "./assets/images/Glutão.webp",

    habilidades: [
        "Ingestão de matéria sólida",
        "Ingestão de energia",
        "Línguas preênseis",
        "Vômito explosivo",
        "Redirecionamento de energia",
        "Resistência aprimorada"
    ],

    aparencia:
        "Glutão possui um corpo pequeno e arredondado, pele verde, uma mancha verde-escura no topo da cabeça e seis protuberâncias na parte posterior da cabeça. Seu rosto e sua barriga são verde-claros, possui dentes tortos e salientes e uma cauda. Na série clássica, veste um traje preto aberto na região abdominal, com mangas brancas e faixas brancas nas pernas.",

    aparicao:
        "O Visitante — episódio da série Ben 10 (2005).",

    predador:
        "Não possui predadores naturais conhecidos; os Gourmands estão no topo da cadeia alimentar."
},

{
    id: 17,
    nome: "Ditto",

    especie: "Splixson",

    planeta: "Hathor",

    imagem: "./assets/images/Ditto.webp",

    habilidades: [
        "Clonagem",
        "Criação de duplicatas",
        "Comunicação entre clones",
        "Coordenação entre duplicatas",
        "Escavação",
        "Força aprimorada"
    ],

    aparencia:
        "Ditto possui um corpo pequeno e humanoide, pele branca, áreas pretas na cabeça e nos ombros, mãos grandes e três protuberâncias semelhantes a nadadeiras na cabeça. Também apresenta estruturas sensoriais nas laterais do corpo e na cintura, relacionadas à criação de seus clones.",

    aparicao:
        "Divididos Caímos — episódio da série Ben 10 (2005).",

    predador:
        "Não identificado."
},

{
    id: 11,
    nome: "Bala de Canhão",

    especie: "Pelarota Arburiano",

    planeta: "Arburia (destruído)",

    imagem: "./assets/images/BalaDeCanhao.webp",

    habilidades: [
        "Transformação em esfera",
        "Carapaça resistente",
        "Velocidade aprimorada",
        "Força aprimorada",
        "Reflexão de lasers",
        "Saltos aprimorados"
    ],

    aparencia:
        "Bala de Canhão é um alienígena robusto, de pele predominantemente branca, coberto por placas amarelas de proteção nos ombros, braços e costas. Possui marcas pretas pelo corpo, olhos verdes, garras e dentes afiados. Pode recolher os membros e transformar-se em uma esfera blindada.",

    aparicao:
        "O Grande Carrapato — episódio da série Ben 10 (2005).",

    predador:
        "Não identificado."
},

{
    id: 12,
    nome: "Cipó Selvagem",

    especie: "Florauna",

    planeta: "Flors Verdance",

    imagem: "./assets/images/CipoSelvagem.webp",

    habilidades: [
        "Alongamento dos membros e cipós",
        "Controle de plantas",
        "Regeneração",
        "Sementes explosivas",
        "Escavação",
        "Camuflagem vegetal"
    ],

    aparencia:
        "Cipó Selvagem possui um corpo vegetal verde, com cipós e tentáculos que se estendem a partir do corpo. Tem um único olho, espinhos e sementes explosivas que pode lançar contra seus adversários.",

    aparicao:
        "Acampamento do Medo — episódio da série Ben 10 (2005).",

    predador:
        "Não identificado."
},

{
    id: 18,
    nome: "Mega Olhos",

    especie: "Opticóide",

    planeta: "Sightra",

    imagem: "./assets/images/MegaOlhos.webp",

    habilidades: [
        "Feixes de energia",
        "Feixes congelantes",
        "Feixes flamejantes",
        "Visão em 360 graus",
        "Audição aprimorada",
        "Força aprimorada"
    ],

    aparencia:
        "Mega Olhos possui um corpo humanoide com pele em tons de marrom e bege, grandes orelhas semelhantes às de um morcego e diversos olhos verdes espalhados pelo tronco e pelos membros. Seu rosto não possui olhos convencionais, concentrando-se principalmente na boca.",

    aparicao:
        "Ben 10 Contra os 10 Negativos: Parte 2 — episódio da série Ben 10 (2005).",

    predador:
        "Não identificado."
},

{
    id: 19,
    nome: "Gigante",

    especie: "To'kustar",

    planeta: "Tempestades Cósmicas",

    imagem: "./assets/images/Gigante.webp",

    habilidades: [
        "Tamanho colossal",
        "Superforça",
        "Raios cósmicos",
        "Resistência aprimorada",
        "Sobrevivência no espaço",
        "Resistência a temperaturas extremas"
    ],

    aparencia:
        "Gigante é um ser humanoide colossal, de pele branca e estrutura corporal extremamente robusta. Possui uma grande crista na cabeça, com partes vermelhas e pretas, além de marcas verdes. Seu tamanho e sua força física o tornam capaz de enfrentar ameaças gigantescas.",

    aparicao:
        "Ken 10 — episódio da série Ben 10.000.",

    predador:
        "Não identificado."
},

];

aliens.sort((alienA, alienB) => alienA.id - alienB.id);

/* =========================================================
   ESTADO ATUAL
========================================================= */

let currentAlien = 0;


/* =========================================================
   ELEMENTOS DO HTML
========================================================= */

const alienImage =
    document.getElementById("alienImage");

const omnitrixImage =
    document.getElementById("omnitrixImage");

const alienChangeSound =
    document.getElementById("alienChangeSound");

const alienRevealSound =
    document.getElementById("alienRevealSound");

const alienDeactivationSound =
    document.getElementById("alienDeactivationSound");

const alienRevealButton =
    document.getElementById("alienRevealButton");

const alienInfo =
    document.getElementById("alienInfo");

const transformationFlash =
    document.getElementById("transformationFlash");

const alienName =
    document.getElementById("alienName");

const alienSpecies =
    document.getElementById("alienSpecies");

const alienPlanet =
    document.getElementById("alienPlanet");

const alienAbilities =
    document.getElementById("alienAbilities");

const alienAppearance =
    document.getElementById("alienAppearance");

const alienAparicao =
    document.getElementById("alienAparicao");

const alienPredator =
    document.getElementById("alienPredator");

const alienCounter =
    document.getElementById("alienCounter");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");

const activationButton =
    document.getElementById("activationButton");

const omnitrixActivationSound =
    document.getElementById("omnitrixActivationSound");

const activationConsole =
    document.querySelector(".activation-console");

const selectorArea =
    document.querySelector(".selector-area");

let omnitrixActivated = false;
let alienTransformed = false;
let deactivationInProgress = false;

/* =========================================================
   MOSTRAR ALIEN
========================================================= */

function showAlien(animateOmnitrix = false) {

    const alien = aliens[currentAlien];

    if (!alien) {
        return;
    }

    alienTransformed = false;
    selectorArea.classList.remove("is-transformed");
    alienInfo.hidden = true;
    alienImage.hidden = false;
    activationConsole.hidden = false;
    omnitrixImage.src = "./assets/images/omnitrix-optimized.png";
    omnitrixImage.alt = "Omnitrix";
    alienRevealButton.setAttribute("aria-expanded", "false");
    alienRevealButton.setAttribute(
        "aria-label",
        `Transformar em ${alien.nome}`
    );
    alienRevealButton.title = "Clique para se transformar";

    if (animateOmnitrix) {
        omnitrixImage.classList.remove("omnitrix-spinning");
        void omnitrixImage.offsetWidth;
        omnitrixImage.classList.add("omnitrix-spinning");

        alienChangeSound.currentTime = 0;
        alienChangeSound.play().catch(error => {
            console.error("Não foi possível reproduzir o som da troca:", error);
        });
    }

    alienImage.classList.toggle(
        "alien-xlr8",
        alien.nome === "XLR8"
    );

    alienImage.classList.toggle(
        "alien-aquatico",
        alien.nome === "Aquático"
    );

    alienImage.classList.toggle(
        "alien-fantasmatico",
        alien.nome === "Fantasmático"
    );


    /*
        Reinicia a animação
    */

    alienImage.classList.remove("alien-changing");

    void alienImage.offsetWidth;

    alienImage.classList.add("alien-changing");


    /* IMAGEM */

    alienImage.src = alien.imagem;

    alienImage.alt =
        `Imagem do alien ${alien.nome}`;


    /* IDENTIDADE */

    alienName.textContent =
        alien.nome.toUpperCase();

    alienSpecies.textContent =
        alien.especie.toUpperCase();

    alienPlanet.textContent =
        alien.planeta.toUpperCase();


    /* HABILIDADES */

    alienAbilities.innerHTML = "";


    alien.habilidades.forEach(
        habilidade => {

            const li =
                document.createElement("li");

            li.textContent =
                habilidade;

            alienAbilities.appendChild(li);

        }
    );


    /* APARÊNCIA */

    alienAppearance.textContent =
        alien.aparencia;


    /* PRIMEIRA APARIÇÃO */

    alienAparicao.textContent =
        alien.aparicao;


    /* PREDADOR */

    alienPredator.textContent =
        alien.predador;


    /* CONTADOR */

    const numero =
        String(currentAlien + 1)
            .padStart(2, "0");

    const total =
        String(aliens.length)
            .padStart(2, "0");

    alienCounter.textContent =
        `DNA's CATALOGADOS ${numero} / ${total}`;

}

function toggleAlienTransformation() {
    if (!omnitrixActivated || deactivationInProgress) {
        return;
    }

    if (alienTransformed) {
        alienTransformed = false;
        deactivationInProgress = true;
        alienImage.hidden = true;
        alienInfo.hidden = true;
        alienRevealButton.disabled = true;
        alienRevealButton.setAttribute("aria-expanded", "false");
        alienRevealButton.setAttribute("aria-label", "Destransformando");
        alienRevealButton.title = "Destransformando...";
        alienInfo.classList.remove("alien-info-revealing");

        alienDeactivationSound.currentTime = 0;
        const deactivationFinished = playAudioUntilEnded(
            alienDeactivationSound,
            "Não foi possível reproduzir o som de desativação:"
        );
        const audioPlaybackRate = alienDeactivationSound.playbackRate || 1;
        const warningDurationMs = Number.isFinite(alienDeactivationSound.duration)
            ? (alienDeactivationSound.duration / audioPlaybackRate) * 1000
            : 4000;
        omnitrixImage.style.setProperty(
            "--deactivation-duration",
            `${warningDurationMs}ms`
        );
        omnitrixImage.classList.remove("omnitrix-deactivation-glow");
        void omnitrixImage.offsetWidth;
        omnitrixImage.classList.add("omnitrix-deactivation-glow");

        const warningFinished = waitForAnimation(
            omnitrixImage,
            "lowBatteryWarning",
            warningDurationMs
        );

        void finishAlienDeactivation(deactivationFinished, warningFinished);
        return;
    }

    alienTransformed = true;
    alienInfo.hidden = false;
    activationConsole.hidden = true;
    selectorArea.classList.add("is-transformed");
    omnitrixImage.src = "./assets/images/omnitrix-transformado-optimized.png";
    omnitrixImage.alt = "Omnitrix transformado";
    alienRevealButton.setAttribute("aria-expanded", "true");
    alienRevealButton.setAttribute(
        "aria-label",
        `Destransformar de ${aliens[currentAlien].nome}`
    );
    alienRevealButton.title = "Clique novamente para se destransformar";

    transformationFlash.classList.remove("is-active");
    void transformationFlash.offsetWidth;
    transformationFlash.classList.add("is-active");

    alienInfo.classList.remove("alien-info-revealing");
    void alienInfo.offsetWidth;
    alienInfo.classList.add("alien-info-revealing");

    alienRevealSound.currentTime = 0;
    alienRevealSound.play().catch(error => {
        console.error("Não foi possível reproduzir o som da revelação:", error);
    });
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
            if (event.animationName !== animationName) {
                return;
            }

            finish();
        };

        element.addEventListener("animationend", handleAnimationEnd);
        element.addEventListener("animationcancel", handleAnimationEnd);
        fallbackTimer = window.setTimeout(
            finish,
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? 20
                : durationMs + 100
        );
    });
}

function playAudioUntilEnded(audio, errorMessage) {
    return new Promise(resolve => {
        audio.addEventListener("ended", resolve, { once: true });

        audio.play().catch(error => {
            console.error(errorMessage, error);
            resolve();
        });
    });
}

async function finishAlienDeactivation(
    deactivationFinished,
    warningFinished
) {
    const flashDurationMs = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
        ? 20
        : 1150;
    const audioPlaybackRate = alienDeactivationSound.playbackRate || 1;
    const audioRemainingMs = Number.isFinite(alienDeactivationSound.duration)
        ? Math.max(
            0,
            (alienDeactivationSound.duration - alienDeactivationSound.currentTime)
                / audioPlaybackRate
        ) * 1000
        : 0;
    const flashDelayMs = Math.max(0, audioRemainingMs - flashDurationMs);
    const redFlashFinished = new Promise(resolve => {
        window.setTimeout(() => {
            const flashAnimationFinished = waitForAnimation(
                transformationFlash,
                "deactivationFlash",
                flashDurationMs
            );
            transformationFlash.classList.remove("is-active", "is-deactivating");
            void transformationFlash.offsetWidth;
            transformationFlash.classList.add("is-active", "is-deactivating");
            void flashAnimationFinished.then(resolve);
        }, flashDelayMs);
    });

    await Promise.all([
        deactivationFinished,
        warningFinished,
        redFlashFinished
    ]);

    omnitrixImage.src = "./assets/images/omnitrix-optimized.png";
    omnitrixImage.alt = "Omnitrix";
    omnitrixImage.style.removeProperty("--deactivation-duration");
    omnitrixImage.classList.remove("omnitrix-deactivation-glow");
    transformationFlash.classList.remove("is-active", "is-deactivating");
    selectorArea.classList.remove("is-transformed");
    selectorArea.classList.remove("is-activated");
    alienImage.hidden = false;
    activationConsole.hidden = false;
    omnitrixActivated = false;
    activationButton.disabled = false;
    activationButton.setAttribute("aria-pressed", "false");
    activationButton.setAttribute("aria-label", "Ativar Omnitrix");
    activationButton.title = "Ativar Omnitrix";
    previousButton.disabled = true;
    nextButton.disabled = true;
    alienRevealButton.disabled = true;
    deactivationInProgress = false;
}


/* =========================================================
   PRÓXIMO ALIEN
========================================================= */

function nextAlien() {

    if (!omnitrixActivated || alienTransformed || deactivationInProgress) {
        return;
    }

    currentAlien++;

    if (currentAlien >= aliens.length) {

        currentAlien = 0;

    }

    showAlien(true);

}


/* =========================================================
   ALIEN ANTERIOR
========================================================= */

function previousAlien() {

    if (!omnitrixActivated || alienTransformed || deactivationInProgress) {
        return;
    }

    currentAlien--;

    if (currentAlien < 0) {

        currentAlien =
            aliens.length - 1;

    }

    showAlien(true);

}

function activateOmnitrix() {
    if (omnitrixActivated) {
        return;
    }

    omnitrixActivated = true;
    selectorArea.classList.add("is-activated");
    activationButton.disabled = true;
    activationButton.setAttribute("aria-pressed", "true");
    activationButton.setAttribute("aria-label", "Omnitrix ativado");
    activationButton.title = "Omnitrix ativado";
    previousButton.disabled = false;
    nextButton.disabled = false;
    alienRevealButton.disabled = false;

    omnitrixActivationSound.currentTime = 0;
    omnitrixActivationSound.play().catch(error => {
        console.error("Não foi possível reproduzir o som de ativação:", error);
    });
}


/* =========================================================
   EVENTOS
========================================================= */

activationButton.addEventListener(
    "click",
    activateOmnitrix
);

nextButton.addEventListener(
    "click",
    nextAlien
);


previousButton.addEventListener(
    "click",
    previousAlien
);

alienRevealButton.addEventListener(
    "click",
    toggleAlienTransformation
);


/* =========================================================
   TECLADO
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "ArrowRight") {

            nextAlien();

        }

        if (event.key === "ArrowLeft") {

            previousAlien();

        }

    }
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

showAlien();