import frameLogin from '@/assets/imgProjects/frameLogin.png'
import dictionary from '@/assets/imgProjects/dictionary.png'
import phonebook from '@/assets/imgProjects/phonebook.png'
import gameWords from '@/assets/imgProjects/gameWords.png'
import orangePortfolio from '@/assets/imgProjects/orangePortfolio.gif'

const projects = [
    {
        title: "Tela de Login",
        description:
            "Tela de login responsiva ♥",
        image: frameLogin,
        link: "https://github.com/Larissalaviniaba/login",
        liked: false,
        tags: ["HTML", "CSS", "JS"],
    },
    {
        title: "Agenda",
        description:
            "Descrição breve do Projeto 1",
        image: phonebook,
        link: "https://github.com/Larissalaviniaba/Projeto-agenda?tab=readme-ov-file",
        liked: false,
        tags: ["HTML", "CSS", "JS", "PHP"],
    },
    {
        title: "Dicionário",
        description:
            "Esse é o Dictionary, um app que permite o usuário encontrar o signicado das palavras pesquisadas. Projeto desenvolvido com o intuito de colocar em prática meus conhecimentos em Vue.JS e consumo de API.",
        image: dictionary,
        link: "https://github.com/Larissalaviniaba/-Dictionary?tab=readme-ov-file",
        liked: false,
        tags: ["Vue.js", "JS"],
    },
    {
        title: "Jogo das palavras",
        description:
            "Em meio aos meus estudos de JS decidi me desafiar e colocar em prática os conhecimentos que estava adquirindo em um jogo. Decidi recriar um jogo que eu gosto muito chamado 'Termo' e esse foi o resultado.",
        image: gameWords,
        link: "https://github.com/Larissalaviniaba/jogo-das-palavras",
        liked: false,
        tags: ["HTML", "CSS", "JS"],
    },
    {
        title: "Orange Portifólio",
        description:
            "Em meio aos meus estudos de JS decidi me desafiar e colocar em prática os conhecimentos que estava adquirindo em um jogo. Decidi recriar um jogo que eu gosto muito chamado 'Termo' e esse foi o resultado.",
        image: orangePortfolio,
        link: "https://github.com/Squad-37-Hackaton-FCamara",
        liked: false,
        tags: ["Node.js", "React", "TS"],
    },
]

export default projects;