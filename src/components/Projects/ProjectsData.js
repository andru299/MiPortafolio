import chakraImage from "../../images/techs/chakra.png";
import reactBootstrapImage from "../../images/techs/react-bootstrap.png";
import reactRouterdomImage from "../../images/techs/react-router-dom.png";
import sassImage from "../../images/techs/sass.png";
import reactImage from "../../images/techs/react.png";
import semanticImage from "../../images/techs/semantic.png";
import styledImage from "../../images/techs/styled-logo.png";
import viteImage from "../../images/techs/vite.png";
import cssImage from "../../images/techs/css.png";
import simpsonProject from "../../images/projects/simpson.jpeg";
import dynamicFormProject from "../../images/projects/dynamic.jpeg";
import gasolineraProject from "../../images/projects/gasolinera.jpeg";
import marvelProject from "../../images/projects/marvel.jpeg";
import rickMorty from "../../images/projects/rick-morty.jpeg";
import tareasProject from "../../images/projects/todo.jpeg";
import criptoProject from "../../images/projects/crypto.jpeg"
import citasApp from "../../images/projects/citas.jpeg"
import controlGastos from "../../images/projects/controlGastos.jpeg"

export const projectsPortfolio = [
    {
        title: "Rick & Morty API",
        image: rickMorty,
        techs: [
            {name:"React", src:reactImage},
            {name:"CSS",   src:cssImage  },
        ],
        description: "Application created with React JS and CSS to make a request an external API of Rick & Morty.",
        repository: "https://github.com/andru299/RICK-AND-MORTHY.git",
        website:"https://rickandmorty-neon-figolla-05ff70.netlify.app/"
    },
    {
        title: "Todo list",
        image: tareasProject,
        techs: [
            {name:"React", src:reactImage},
            {name:"Semantic UI React",   src:semanticImage  },
        ],
        description: "Application created with React JS and to make a list of tasks where you can add or remove it.",
        repository: "https://github.com/andru299/gestordetareas.git",
        website:"https://todolist-gestortareas-d968d5.netlify.app/"
    },
    {
        title: "Simpsons API",
        image: simpsonProject,
        techs: [
            {name:"React JS", src:reactImage},
            {name:"Styled Components",   src:styledImage  },
        ],
        description: "Application created with React JS and Styled Components to make a request an external API of Simpsons.",
        repository: "https://github.com/andru299/LosSimpson.git",
        website:"https://frases-simpson-903a1e.netlify.app/"
    },
    {
        title: "Marvel API",
        image: marvelProject,
        techs: [
            {name:"React", src:reactImage},
            {name:"React Router",   src:reactRouterdomImage  },
            {name:"Sass",   src:sassImage  },
            {name:"Semantic",   src:semanticImage  },
        ],
        description: "Application created with React JS, React-Router and Sass to make a request an external API of Marvel.",
        repository: "https://github.com/andru299/Marvel.git",
        website:"#!" 
    },
    {
        title: "Dynamic Form",
        image: dynamicFormProject,
        techs: [
            {name:"React JS", src:reactImage},
            {name:"React Bootstrap",   src:reactBootstrapImage  },
        ],
        description: "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
        repository: "https://github.com/andru299/FormularioDinamic.git",
        website:"https://formulario-dinamic.vercel.app/!" 
    },
    {
        title: "Fuel Station",
        image: gasolineraProject,
        techs: [
            {name:"Vite", src:viteImage},
            {name:"Chakra",   src:chakraImage  },
            {name:"React Router DOM",   src:reactRouterdomImage  },
        ],
        description: "Application created with Vite where you can save the information and see it on a summary.",
        repository: "https://github.com/andru299/Gasolinera.git",
        website:"https://gasolinera-one.vercel.app/" 
    },

    {
        title: "Crypto Conversor",
        image: criptoProject,
        techs: [
            {name:"Vite", src:viteImage},
            {name:"Styled Components",   src:styledImage  },
            
        ],
        description: "Application created with Vite where you'll can convert coins to crypto.",
        repository: "https://github.com/andru299/cripto-react.git",
        website:"https://cripto-react-53298.netlify.app/" 
    },

    {
        title: "citasApp",
        image: citasApp,
        techs: [
            {name:"Vite", src:viteImage},
            {name:"tailWindcss",   src:styledImage  },
            
        ],
        description: "Add with you can use to sort you pet friend.",
        repository: "https://github.com/andru299/citas-react-npm.git",
        website:"https://citas-react-af05a8.netlify.app/"
    },

    {
        title: "controlGastos",
        image: controlGastos,
        techs: [
            {name:"Vite", src:viteImage},
            {name:"react-circular-progressbar, src:styledImage"},
            {name:"react-swipeable-list, src:styledImage"},
            
        ],
        description: "Add with you can use to sort you pet friend.",
        repository: "https://github.com/andru299/Control-gastos.git",
        website:"https://control-gastos-048a73.netlify.app/"
    },
    
];
