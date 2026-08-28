import './Navbar.css'
export default function Navbar({theme,settheme}){
    return(
        <nav className='Navbar'>
          <h2 className='logo'>Kunal.dev</h2>
          <ul className='nav-links'>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="Kunal_Kumar_Resume.pdf" download>Resume</a></li>
          </ul>
          <button className='btn' onClick={()=>{settheme(theme==="Dark"?"Light":"Dark")}}>{theme==="Dark"?"Light":"Dark"}</button>
        </nav>
    )
}