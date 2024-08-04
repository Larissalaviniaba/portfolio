import frameLogin from '@/assets/imgProjects/frameLogin.png'
import dictionary from '@/assets/imgProjects/dictionary.png'
import phonebook from '@/assets/imgProjects/phonebook.png'
import gameWords from '@/assets/imgProjects/gameWords.png'
import orangePortfolio from '@/assets/imgProjects/orangePortfolio.gif'

const translatePath = 'data/projects'

const projects = [
    {
        title: `${translatePath}.loginScreen.title`,
        description: `${translatePath}.loginScreen.description`,
        image: frameLogin,
        link: "https://github.com/Larissalaviniaba/login",
        liked: false,
        tags: ["HTML", "CSS", "JS"],
    },
    {
        title: `${translatePath}.phoneBook.title`,
        description:`${translatePath}.phoneBook.description`,
        image: phonebook,
        link: "https://github.com/Larissalaviniaba/Projeto-agenda?tab=readme-ov-file",
        liked: false,
        tags: ["HTML", "CSS", "JS", "PHP"],
    },
    {
        title: `${translatePath}.dictionary.title`,
        description: `${translatePath}.dictionary.description`,
        image: dictionary,
        link: "https://github.com/Larissalaviniaba/-Dictionary?tab=readme-ov-file",
        liked: false,
        tags: ["Vue.js", "JS"],
    },
    {
        title: `${translatePath}.wordGame.title`,
        description: `${translatePath}.wordGame.description`,
        image: gameWords,
        link: "https://github.com/Larissalaviniaba/jogo-das-palavras",
        liked: false,
        tags: ["HTML", "CSS", "JS"],
    },
    {
        title: `${translatePath}.orangePortfolio.title`,
        description: `${translatePath}.orangePortfolio.description`,
        image: orangePortfolio,
        link: "https://github.com/Squad-37-Hackaton-FCamara",
        liked: false,
        tags: ["Node.js", "React", "TS"],
    },
]

export default projects;