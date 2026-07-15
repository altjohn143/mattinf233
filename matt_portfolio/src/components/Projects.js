import "./Sections.css";
 
    function Projects(){
    
        const projects=[
        {
        name:"Hungry Nook",
        description:"An intelligent food recommendation and integrated restaurant management system that helps customers discover meals while improving restaurant operations.",
        link:"#"
        },
        {
        name:"Village Integrated Management System",
        description:"A digital platform designed to manage community services, resident information, announcements, and administrative processes for Casimiro Westville Homes.",
        link:"https://casimiro-westville-homes-vims.online/"
        },
        {
        name:"POS System",
        description:"A point-of-sale system designed to manage transactions, inventory, and sales operations efficiently for businesses.",
        link:"#"
        },
        {
        name:"Weather App",
        description:"A weather application that provides real-time weather information, forecasts, and location-based updates using API integration.",
        link:"#"
        }
        ];
    
    return(
        <section id="projects" className="section">
        
        <h1>My Projects</h1>
        
        <div className="project-container">
        
        {
        projects.map((item,index)=>(
        
        <div className="project-card" key={index}>
        
        <h2>{item.name}</h2>
        
        <p>{item.description}</p>
        
        {
        item.link !== "#" && (
        <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        >
        View Project
        </a>
    )
    }
        </div>
    ))
    }
        </div>
        </section>
    )
    
    }
 
export default Projects;