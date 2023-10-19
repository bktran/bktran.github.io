import pokemon from "../../assets/pokemon-tinder.png"
import quizard from "../../assets/quizard.png"
import apartments from "../../assets/apartments.png"

export interface IProjectsData {
        name: string,
        description: string;
        img: any;
        ytLink: string

}
export const ProjectsData: IProjectsData[] = [
        {
                name: "Pokemon Tinder",
                description: "Pokemon App, an app that allows you to add or find a Pokemon similar to a Pokedex. It allows you to be creative with your pokemon description and browse other pokemon available in the database. This is a full-stack project that utilizes REST API with full CRUD functionality. This project is made in React for Frontend, Ruby on Rails for Backend, and PostgresQL for database.",
                img: pokemon,
                ytLink: "https://youtu.be/U5UlRigD0ss",

        },
        {
                name: "Quizard",
                description: "Quizard, a quizlet-like app that has full CRUD functionality built with React and Ruby on Rails. Utilizes REST API and JWT Authentication and Authorization, allowing users to have their own private flashcards as well as access to a library of cards submitted by other users. Animation done using GSAP library and scroll-triggered animation done using GSAP plugin ScrollTrigger.",
                img: quizard,
                ytLink: "https://youtu.be/AHKfjMN02Nw",
        },
        {
                name: "Apartment App",
                description: "An apartment app that lets users post listings of apartment or units for rent/sale. Users can also browse through listings of apartments created by other users. Utilizes React and Rails.",
                img: apartments,
                ytLink: "",
        
        },
]

