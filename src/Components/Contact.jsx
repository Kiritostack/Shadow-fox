import './Contact.css'
export default function Contact(){
    return(
        <section id='Contact' className='Contact'>
            <h2>Contact Me</h2>
            <p>Message Me for Work</p>
            <div className='Contact-info'>
                <p>Email: Kakeshiash@gmail.com</p>
                <p>Linkedin:{" "} <a href="https://www.linkedin.com/in/kunal-kumar-004551328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin.com/in/Kunal</a></p>
                <p>GitHub:{""} <a href="http://github.com/Kiritostack">Github.com/in/Kunal</a></p>
            </div>
            <form className='Contact-form'>
                <input type="text" placeholder='Your name' />
                <input type="Email" placeholder='Email' />
                <textarea className='Your Message' placeholder='Your Message'></textarea>
                 <button type='Submit'>Send Message</button>
            </form>
        </section>
    )
}