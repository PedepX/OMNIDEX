### OMNIDEX

Enciclopédia alienígena interativa inspirada no universo de Ben 10. Explore os aliens catalogados no Omnitrix e descubra informações sobre suas espécies, planetas, habilidades, aparência, primeira aparição e predadores naturais.

## Funcionalidades

- Ativação do Omnitrix pelo botão na tela inicial, com efeito sonoro.
- Navegação entre os 19 aliens clássicos com as setas na tela ou as teclas ← e →, na ordem cronológica do catálogo.
- Transformação ao clicar no alien, com exibição de informações sobre espécie, planeta, habilidades, aparência, primeira aparição e predador natural.
- Enquanto estiver transformado, as setas ficam ocultas e o mostrador muda para o Omnitrix transformado.
- Um segundo clique no alien inicia a destransformação: as informações se fecham, o Omnitrix pisca em vermelho e toca o efeito sonoro de descarga antes de voltar à tela inicial, com o Omnitrix desativado.
- Animações e efeitos sonoros na ativação, transformação, destransformação e navegação.
- As seções de informação do alien começam recolhidas em qualquer tamanho de tela e podem ser abertas individualmente.
- Layout responsivo, foco visível para navegação por teclado e suporte à preferência de movimento reduzido do dispositivo.
- Botão **Recalibrar Omnitrix** com transição animada para o catálogo de *Alien Force*. A página recalibrada reaproveita o fluxo do catálogo clássico: ativação, navegação, transformação e fichas recolhíveis com espécie, planeta, habilidades, aparência, estreia e predador natural.

### Aliens catalogados

1. Chama
2. Besta
3. Diamante
4. XLR8
5. Massa Cinzenta
6. Quatro Braços
7. Insectóide
8. Ultra-T
9. Aquático
10. Fantasmático
11. Bala de Canhão
12. Cipó Selvagem
13. Blitzwolfer
14. Snare-Oh
15. Frankenstrike
16. Glutão
17. Ditto
18. Mega Olhos
19. Gigante

## Como executar

O projeto não precisa de instalação de dependências nem de etapa de build. Abra `index.html` em um navegador ou sirva a pasta do projeto com um servidor web local, como o Laragon.

A tela do Omnitrix Recalibrado também pode ser aberta diretamente em `recalibrado.html`. As imagens e os efeitos sonoros específicos dessa tela ficam, respectivamente, em `assets/images/recalibrado` e `assets/sounds/recalibrado`.

## Tecnologias

- HTML
- CSS
- JavaScript

## Estrutura do projeto

```text
Omnidex/
├── index.html
├── recalibrado.html
├── README.md
└── assets/
    ├── css/
    │   ├── recalibrado.css
    │   └── style.css
    ├── images/
    │   ├── icon-optimized.png
    │   ├── favicon-omnitrix-optimized.png
    │   ├── omnitrix-optimized.png
    │   ├── omnitrix-transformado-optimized.png
    │   ├── recalibrado/
    │   │   ├── artes dos aliens de Força Alienígena (.webp)
    │   │   └── imagens do Omnitrix Recalibrado
    │   ├── imagens dos aliens (.webp)
    │   └── artes originais preservadas
    ├── js/
    │   ├── recalibrado.js
    │   └── script.js
    └── sounds/
        ├── recalibrado/
        │   └── efeitos sonoros do Omnitrix Recalibrado
        ├── ativaomni.mp3
        ├── desativaromni.mp3
        ├── omnisound.wav
        └── omnitrixtransform.wav
```

## Créditos

Projeto de fã, sem afiliação oficial com os criadores ou detentores dos direitos de Ben 10. Personagens e universo pertencem aos respectivos titulares.
