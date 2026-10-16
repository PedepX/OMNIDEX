# OMNIDEX

Enciclopédia interativa de aliens inspirada no universo de Ben 10. Explore dois catálogos do Omnitrix e consulte dados de espécie, planeta, habilidades, aparência, primeira aparição e predadores naturais.

## Catálogos

### Omnitrix clássico

Disponível em [`index.html`](./index.html), com 19 aliens na ordem de navegação:

1. Chama
2. Besta
3. Diamante
4. XLR8
5. Massa Cinzenta
6. Quatro Braços
7. Insectóide
8. Aquático
9. Ultra-T
10. Fantasmático
11. Frankenstrike
12. Snare-Oh
13. Blitzwolfer
14. Glutão
15. Ditto
16. Bala de Canhão
17. Cipó Selvagem
18. Mega Olhos
19. Gigante

### Omnitrix recalibrado

Disponível em [`recalibrado.html`](./recalibrado.html), com dez aliens de *Ben 10: Força Alienígena*:

1. Fogo Fátuo
2. Eco Eco
3. Enormossauro
4. Arraia-a-Jato
5. Friagem
6. Ártropode
7. Macaco-Aranha
8. Gosma
9. Cromático
10. Alien X

Na página inicial, use **Recalibrar Omnitrix** para abrir o segundo catálogo. A página recalibrada também pode ser acessada diretamente.

## Como usar

- Ative o Omnitrix pelo botão na tela.
- Navegue entre os aliens pelas setas na tela ou pelas teclas ← e →.
- Selecione o alien para se transformar e exibir sua ficha; selecione-o novamente para destransformar.
- No Omnitrix recalibrado, o Alien X começa bloqueado. Selecione o cadeado e autentique as duas chaves repetindo, em cada etapa, a sequência aleatória de quatro teclas A, S e D. Você pode usar o teclado ou os botões na tela; um erro reinicia somente a etapa atual.
- Após autenticar as duas chaves, uma hélice de DNA holográfica animada é analisada sobre o Omnitrix; ao reconhecer o DNA, ela se desfaz em partículas que convergem para o símbolo do dispositivo antes da revelação cósmica.
- Após a animação de desbloqueio, o Alien X fica disponível como os demais aliens. O desbloqueio é salvo no navegador e permanece após recarregar a página.
- Consulte as seções recolhíveis da ficha: habilidades, aparência, primeira aparição e predador natural.

O site inclui animações e efeitos sonoros, adapta o layout a diferentes tamanhos de tela, indica o foco durante a navegação por teclado e respeita a preferência do sistema por movimento reduzido.

## Como executar

O projeto usa HTML, CSS e JavaScript, sem dependências ou etapa de build. Abra `index.html` em um navegador ou sirva a pasta do projeto com um servidor web local, como o Laragon.

## Estrutura

```text
OMNIDEX/
├── index.html
├── recalibrado.html
├── README.md
└── assets/
    ├── css/
    │   ├── style.css
    │   └── recalibrado.css
    ├── images/
    │   ├── imagens do catálogo clássico
    │   └── recalibrado/
    │       └── imagens dos aliens e do Omnitrix recalibrado
    ├── js/
    │   ├── script.js
    │   └── recalibrado.js
    └── sounds/
        ├── efeitos sonoros do catálogo clássico
        └── recalibrado/
            └── efeitos sonoros do catálogo recalibrado
```

## Créditos

Projeto de fã, sem afiliação oficial com os criadores ou detentores dos direitos de Ben 10. Personagens e universo pertencem aos respectivos titulares.
