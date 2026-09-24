# Processo — Portfólio

## O que eu pedi à IA

Crie uma landing page em um único arquivo index.html (HTML e CSS juntos, sem
bibliotecas externas) que me apresente. Sobre mim:

- Nome: Mateus Pala Cubbi
- Idade e cidade: 15, Varginha, Minas Gerais
- Curso técnico: Informática para a internet
- Três coisas que me definem: Persistência, Controle,  Consciência
- O que eu quero fazer no futuro: Cybersegurança

A página precisa ter:
 Um topo com meu nome grande, escrito no estilo de código html, como por exemplo: </mateus_pala_cubbi>, ao fundo, utilize como cor #161a94, os demais caracteres (<, /, >) devem estar em #0f0f0f e as letras do meu nome em #63cf80, e ao final uma simulação do mouse em modo de escrita (barra branca piscando). Posicione o nome na esquerda. Uma frase curta sobre mim em branco posicionada a direita.
  
  O início do site deve começar com o menu, como descrito acima, com nome personalizado a esquerda, uma frase que me resuma a direita superior mas não tão para a borda, , e abaixo dessa frase faça um sumário interativo, sem título, que leve aos setores (sobre mim, minhas entregas, contato...). O sumário deve ser composto por botões interativos (exemplo: contato -> ao clicar, leva ao rodapé), a box da frase deve ter um design de uma tira de papel de caderno comum, com animação simples de movimento

  Uma seção "Sobre mim" com 2 parágrafos. Especifique meus valores, como honestidade, persistência, vontade. E use um tom que crie sensação de necessidade ao cliente, mas sem tom imperativo forte.

  Uma seção "Minhas entregas" com 5 cards, um para cada atividade do módulo:
-Capa do Meu Álbum, Dashboard Quem Sou Eu, Árvore das Profissões,
-Âncoras de Carreira, e o Manifesto. Cada card tem título, data,
-Uma linha sobre o que aprendi e um link para a pasta da entrega
-Um rodapé com meu contato e o link do meu GitHub (mateuspcubbi@gmail.com, MpCubbi)

 No intervalo entre as seções coloque frases curtas e impactantes que expressem meu trabalho

 Ao passar o mouse por cima dos cards aplique efeito de reflexo e brilho naturais, faça com que ele se sobressaia do resto da página e que sua box tombe levemente para o lado em que o mouse está (se o mouse estiver no canto superior direito da box ela tombará/afundará levemente para a direita superior). Essa mecânica deve ser leve, com acompanhamento ao mouse. 

Estilo: Quero clima de conforto, com cores pastéis azul e branco, as únicas partes que o fundo deve ser escuro (#161a94) é no topo e no rodapé. A fonte (se aplica também ao meu nome e ao rodapé) deve se basear nas fontes monoespaçadas utilizadas em códigos, porém com formato curvo, para suavizar a visão
Precisa funcionar bem no celular e ter bom contraste para leitura.

-Utilize a fonte "Terminal F4" do DaFont: https://www.dafont.com/pt/terminal-f4.font, para todos os textos incluindo topo e rodapé. 

## O que a IA devolveu
A Inteligência Artificial (até o momento o Claude.AI) entregou uma landing page pouco semelhante ao que o usuário imaginava, pois não foi capaz de utilizar a paleta de cores pedida pelo usuário e a fonte pedida pelo usuário, que foi substituída por uma fonte pouco semelhante. O efeito de sobrassalência ao passar com o mouse por cima do card foi bem executado, porém era notável o AI Slop. 

## O que eu mudei e por quê
Alterações:
-Altere a cor dos caracteres do título (<, /, >) para branco

-Torne o azul do fundo do topo da página e do rodapé mais escuro e que torne o nome mais visível

-Faça os estilos de todos os botões do sumário como uma tira de papel de caderno, não só a frase

-O rodapé e o topo devem aparentar estar uma camada abaixo do resto da página, fazendo com que ela faça sombra sobre o topo e o rodapé

-Altere o fundo de branco para cinza-escuro estilo terminal e todos os textos para a cor branca para melhor visualizção

-Altere o estilo visual dos cards. Coloque o título: Meus Cards, para demonstrar que o usuário está em uma nova seção da página, abaixo do título um modelo de baralho virado de cabeça para baixo, quando o usuário se aproximar com o mouse, haverá uma animação de 5 cartas saindo e se posicionando uma ao lado da outra, preenchendo uma reta de um lado ao outro da página, o desenho na carta deve representar de forma lúcida o que ela mostrará. As cartas devem ter animação de movimento (flutuando) enquanto o usuário não passa por cima. Ao passar com o mouse por cima, a carta se centraliza na tela, aumenta de tamanho e deixa o fundo da tela desfocado, dando ênfase somente a ela. Nesse momento sua figura será substituída pelo nome da atividade  e do seu lado direito aparecerá um pequeno texto branco com (ex: Figura da carta para "Capa do meu álbum" *a direita* Resumo do tópico *abaixo* Botão azul-noite com símbolo de redirecionamento branco que redirecione para onde a atividade está. As cartas devem seguir o estilo do jogo BALATRO

-No rodapé  coloque uma animação da silhueta branca de um gato que entra andando da direita da tela até a esquerda e se senta, enquanto sentado, deve ter animação de mexer as orelhas e o rabo, ao passar com o mouse por cima dele, haverá uma animação fluída de desaparecimento do corpo, só permanecendo a cabeça que será contornada por um símbolo cinza-claro, simulando a logo do github, ao clicar, será direcionado a minha página do github: https://github.com/MpCubbi. No momento em que o gato se sentar, simultaneamente surgirá a sua direita, afastado e do mesmo tamanho do modelo do gato, uma carta, da parte de baixo da página, ao passar o mouse por cima, a carta se abrirá e mostrará o símbolo de um arroba em um papel, ao clicar, o usuário deve ser redirecionado ao meu gmail: mateuspcubbi@gmail.com

-Adicione uma seção de aprendizados que só aparecerá caso o usuário clique no meu nome no topo, nesse momento haverá uma animação de apagar o meu nome todo e escrever em seu lugar "conhecimentos", com mesma fonte e cor verde que meu nome estava, simultaneamente todo o resto da página, que estava sobressalente ao topo e rodapé, sumirá, e a página toda ficará com o mesmo tom de azul ao fundo. Aparecerá no formato de tópico, com figuras simples a esquerda, os meus conhecimentos, com fonte: https://www.dafont.com/pt/jmh-typewriter.font e cor amarela. ao passar com o mouse por cima do conhecimento aparecerá uma barra horizontal também amarela que demonstrará o meu nível de conhecimento do tema, por exemplo: excel, powerpoint, canva, word, vscode, máquina virtual todos no nível de conhecimento introdutório.

**Porque alterei: As alterações foram feitas para que a landing page fosse mais responsiva e agradável visualmente ao usuário**

## O que eu aprendi fazendo isso

No processo de criação de minha landing page percebi que IA responde melhor a comandos detalhados, suas ações e decições dependem, em suma, do usuário e de quão bem estruturado é seu prompt. Apesar de nem sempre, mesmo com um bom prompt, a IA será capaz de aceertar de primeira. Por conta disso, aprendi que é necessário ter paciência e explicar da forma mais clara possível o que está errado, como é o erro e qual a expectativa final para uma boa entrega. 
 Algo que acho importante mencionar é que durante o trabalho percebi que, caso o usuário não saiba o que está fazendo, ele se tornará a máquina na realidade, já que realiza ações sem questionar. Seria como se a inteligência artificial fosse capaz de pesquisar e entender e simplesmente precissase de alguém para realizar as ações por ela.
