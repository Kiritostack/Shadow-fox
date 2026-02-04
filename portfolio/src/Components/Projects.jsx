import './Projects.css'
export default function Projects(){
    const projects=[
        {
         title:"Edvise",
         image:"/Edvise.png",
         live:"https://edvise90.netlify.app/"
        },{
            title:"Netflix-Clone",
            image:"/Netflix-clone.jpg",
            live:"https://zippy-caramel-60c039.netlify.app/"
        },{
            title:"Calculator",
            image:"/calculator.png",
            live:"https://platious.netlify.app/"
        }
    ]
    return(
        <section id='Projects' className='Projects'>
         <h2>My Projects</h2>
         <div className='Project-box'>
            {projects.map((project,index)=>(
                <div key={index}className='project-card'>
                    <img src={project.image} alt={project.title}/>
                    <h3>{project.title}</h3>
                    <div className='project-btn'>
                        <a href={project.live}>Live</a>
                    </div>
                </div>
            ))}
         </div>
        </section>
    )
}