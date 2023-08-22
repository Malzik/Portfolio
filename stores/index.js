import { defineStore } from 'pinia'
import {v4 as uuidv4} from "uuid";

export const useMainStore = defineStore('main', {
    state: () => ({
        projects: [
            {
                id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccda",
                title: "Traquenard",
                category: "Mobile Application",
                img: "traquenard/captain.png",
                publishDate: "Sep 2019 - March 2022",
                tag: "UI / React Native, Mobile",
                objectivesTitle: "Objective",
                objectivesDetails:
                    "The objective of this project was to discover React Native, Expo and how to publish an application to the Play store",
                techTitle: "Tools & Technologies",
                detailsTitle: "Challenge",
                socialTitle: "Share This",
                projectDetails: [
                    "Traquenard is a React native game for Android and IOS (only on Android for now). I worked on this project with one of my friend for 2 years as a side-project. The project use Redux to share data between the components. We have two available languages: French and English. On this project I learned how React Native and Expo works, how to create an application and take care of screen size problem or how to add advertising revenue.",
                    "This project is on hold for now because we are happy with the result  and want to focus on other things.",
                    "Presentation of the game:",
                    "<h1>Party games with friends (Between 3 and 8 for a better experience)</h1>Each player plays in turn and will have the choice between 4 proposals.<ul class='p-2 pl-8 list-disc'><li>Duel: Choose another player to play against him during a challenge</li><li>Friendship: Choose another player to play with him during a challenge</li><li>Question: Question of general knowledge</li><li>Alone VS All: Challenge against all other players</li></ul>Each proposal earns points.<br/>At the end of each proposal, points will be awarded and the player with the most points at the end of the game wins!"
                ],
                projectImages: [
                    {
                        title: "Menu",
                        img: "traquenard/traq1.png",
                    },
                    {
                        title: "question",
                        img: "traquenard/traq3.png",
                    },
                    {
                        title: "leaderboard",
                        img: "traquenard/traq2.png",
                    },
                ],
                technologies: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React Native",
                    "Expo",
                    "Android",
                    "Redux"
                ]
            },
            {
                id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
                title: "Gamabu",
                category: "Web Application",
                img: "gamabu/gamabu.png",
                publishDate: "Sep 2019 - Sep 2021",
                tag: "API / Backend",
                objectivesTitle: "Objective",
                objectivesDetails:
                    "My objective on this project was to discover how a medium size project works (12-20 persons)",
                techTitle: "Tools & Technologies",
                detailsTitle: "Challenge",
                socialTitle: "Share This",
                projectDetails: [
                    "Gamabu is the serious games brand and application of onepoint. The goal of the games is to remove the classic training way where you just listen to someone. Instead, the employee can play the game and learn without really notice it. On this project, I worked on the game engine and the API part.",
                    "The API is a Laravel project, this is also my first big project in my life. That was my first time using this framework and I have the chance to work with expert people who passed on their experience and skills to me",
                    "On this project, I also learn Docker, Gitlab CI/CD, AWS S3 and Lambda. At the end of my intervention on the project, I was responsible for the DevOps part."
                ],
                projectImages: [
                    {
                        title: "Cybershield intro",
                        img: "gamabu/gamabu1.jpg",
                    },
                    {
                        title: "GDPR intro",
                        img: "gamabu/gamabu3.jpg",
                    },
                    {
                        title: "GDPR questions",
                        img: "gamabu/gamabu4.jpg",
                    },
                ],
                technologies: [
                    "API",
                    "PHP",
                    "Laravel",
                    "MySQL",
                    "AWS",
                    "Docker",
                    "Gitlab CI/CD"
                ]
            },
            {
                id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
                title: "Provoly",
                category: "Web Application",
                img: "provoly/provoly.jpg",
                publishDate: "Sep 2022 - June 2023",
                tag: "UI / Frontend",
                clientTitle: "About Client",
                objectivesTitle: "Objective",
                objectivesDetails:
                    "",
                projectDetails: [
                    "Provoly is a data supervisor application. The application is a product initiated by onepoint",
                    "I join this project as an Angular developer. The project is developed with Angular 16, NgRx and RxJs. It is available in French and English. The architecture is a core library and sub projects using it.",
                    "The core project is open soruce and can be found at this address: <a href='https://www.npmjs.com/package/@provoly/dashboard'></a>",
                    "The goal of the Provoly project, is to provide a library that can be used in every Angular project to create different dashboard following the clients needs.",
                    "During my time with Provoly, I had the chance to trained to be a Tech Lead by the expert."
                ],
                techTitle: "Tools & Technologies",
                detailsTitle: "Challenge",
                socialTitle: "Share This",
                projectImages: [
                    {
                        title: "Img carbon",
                        img: "provoly/img_carbon.jpg",
                    },
                    {
                        title: "Img hyperviseur",
                        img: "provoly/provoly.jpg",
                    }
                ],
                technologies: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Angular",
                    "Ngrx",
                    "rxJs"
                ]
            },
            {
                id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdd",
                title: "My money",
                category: "Web Application",
                img: "mymoney/mymoney-overlay.png",
                publishDate: "July 2023 - now",
                tag: "UI / Frontend / Backend / FullStack",
                objectivesTitle: "Objective",
                objectivesDetails:
                    "Learn Vue and Java + get my own bank account statistics",
                projectDetails: [
                    "My money is my own application to see my expenses. I didn't have all what I wanted on my bank application. Especially the exchange rate between Euro and Canadian Dollars",
                    "This project is a VueJs application with Pinia store and TailwindCSS for the design.",
                    "Since Java take too much resources for a small project like this. I am currently rewriting the backend with Go."
                ],
                techTitle: "Tools & Technologies",
                detailsTitle: "Challenge",
                socialTitle: "Share This",
                projectImages: [
                    {
                        title: "My money interface",
                        img: "mymoney/mymoney.png",
                    },
                ],
                technologies: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Vue-js",
                    "TailwindCSS",
                    "Java",
                    "Spring",
                    "Go",
                    "MySQL",
                    "Docker"
                ]
            }
        ],
    }),
    actions: {
        getProjectById(id) {
            const project = this.projects.filter((project) => project.id === id)
            return project.length > 1 ? undefined : project[0]
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}