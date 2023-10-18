import pokemon from "../../assets/pokemon-tinder.png"
import quizard from "../../assets/quizard.png"
import apartments from "../../assets/apartments.png"

interface ProjectsData {
        name: string,
        description: string;
        img: any;

}
export const ProjectsData: ProjectsData[] = [
        {
                name: "Pokemon Tinder",
                description: "pokemon description",
                img: pokemon,

        },
        {
                name: "Aparment App",
                description: "apartment description",
                img: apartments,

        },
        {
                name: "Quizard",
                description: "quizard description",
                img: quizard,
        }
]

