---
title: "> Git init"
subTitle: How to getting started on github
category: "getting-started"
cover: GitHub_Logo.png
---

## Por que Git?
Talvez seja uma pergunta fácil e óbvia para muitas pessoas, mas para outras, vejo que fica muito difícil de entender o motivo de se usar Git. Está começando aqui, uma série de posts sobre o famoso Git.

 *"Git é um sistema de controle de versão de arquivos. Através deles podemos desenvolver projetos na qual diversas pessoas podem contribuir simultaneamente no mesmo, editando e criando novos arquivos e permitindo que os mesmos possam existir sem o risco de suas alterações serem sobrescritas"*
 [Tableless](https://tableless.com.br/tudo-que-voce-queria-saber-sobre-git-e-github-mas-tinha-vergonha-de-perguntar/)

 Imagine que várias pessoas estão trabalhando em um único projeto, como imagina a sincronização de todos os dados de todos os computadores em um lugar só?

## Visibilidade no mercado
**Durante meu tempo de faculdade não percebi o quanto um Github bem construído é importante. E o pior ainda, não percebi que o melhor lugar para se procurar código, é lá**.

Visto algum tempo, pessoas que "codam" a pouco tempo ou até a alguns anos, não entenderam que esse montante de código livre ajuda muito a aprender coisas novas. Pensando da forma:

__*"Se eu estou fazendo isso, alguém no mundo já fez algo parecido"*__

Mas não se engane, se estiver procurando algo muito novo, talvez não ache exatamente o que precisa, mas sim, algo que te dê uma "luz".

Com isso, um bom GitHub, com vários códigos seus, presença em projetos opensources, podem mostrar muito sobre o que você sabe e o que gosta.

## Comandos básicos (Essenciais)
Selecionei os comandos básicos do Git, para oferecer rapidamente a experiência de uso do Git. 

O primeiro comando para iniciar um projeto no Git, é o Git init.
Git init vai colocar todas para chamar aquele seu projeto de "projeto Git", e sem ele, nenhum dos outros comandos irá funcionar.

 __Ele é feito uma única vez no projeto e não será mais necessário fazê-lo.__

### git init 
Comando utilizado para iniciar um projeto git
> `git init`

### git clone < LINK >
Comando para baixar o repositório do git
> `git clone git@github.com:bruno-alencar/talk-git-init.git`

### git remote add < NOME > < LINK >
Quando estamos referenciando uma origem de código de um projecto já existente na máquina

Precisamos sempre adicionar o que chamamos de origem. Nosso repositório é uma origem, mas como sabemos que o código na nossa máquina é de lá?

Com este comando, linkamos o repositório da máquina, com o da nuvem, podemos fazer o push tranquilamente.

> `git remote add origin git@github.com:bruno-alencar/talk-git-init.git`

Git add (nome do arquivo) adiciona o arquivo especifico para commitar. Desta forma, você consegue separar arquivos de modificação para realizar diferentes registros. Caso queira adicionar todos, basta colocar um '*' ou '.' no final. 

__git add *__ ou __git add .__

### git add < ARQUIVO >
Podemos adicionar nossos arquivos a serem comitados separadamente ou não
> `git add README.md`

Git pull pega todos os arquivos modificados que estão no repositório (já foram publicados) para a sua máquina.

> `git pull origin master`

Git push
Final o comando, o comando que pega todos os seus commits e sobem para nuvem, seu repositório. Nunca se esqueça deste comando, ele que deixará outras pessoas verem seu código.

> `git push origin master`

## Branches
Para exemplificar o que seriam branches, imagine um tronco de uma árvore, a parte principal seria a produção (mais conhecida como 'master'). Se tivesse um site no ar, seria nesse lugar que guardaria o código do seu site que seria de produção.

Mas imagine que você precisa colocar um novo layout no seu site, mas não quer mostrar ainda porque ainda está construindo. Seriam os galhos, ramos desta árvore.

Toda nova modificação será criado uma branch, correspondente aquela feature (funcionalidade)

## Comandos que começam a dar problemas

Como nada é perfeito, seu projeto também pode não ser kkkk. Quando todos do projeto trabalham em suas branches, com os comando acima tudo funcionará perfeitamente. Mas tem o momento em que tudo precisa ser "juntado"

> `git merge dev`

Agora começa a brincadeira, se alguém mexeu no mesmo arquivo e no mesmo pedaço de código que o seu, ocorrerá os "CONFLICTS". O git consegue resolver boa parte deles, mas alguns, será necessário definir o que fica e o que sai do projeto.

Git pull de outra branch


Resolvendo conflitos (formas) - Deu merda

Se tornando master com gitflow (padronizando seu projeto)