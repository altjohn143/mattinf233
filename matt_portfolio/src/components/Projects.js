import "./Sections.css";
 
    function Projects(){
        const projects=[
        "Hungry Nook",
        "Village Integrated Management System",
        "POS System",
        "Weather App"
        ];
    return(
     <section id="projects" className="section">
         <h1>My Projects</h1>
     <div className="project-container">
        {
        projects.map((item,index)=>(
    <div className="project-card" key={index}>
        <h2>{item}</h2>
        <p>
        A project developed using modern technologies
        and problem-solving concepts.
        </p>
    </div>
    ))
}

    </div>
    </section>
    )
}
 
export default Projects;