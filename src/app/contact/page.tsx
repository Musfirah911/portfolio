export default function Contact(){
    return(
        <div>
         <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>
        <form action="https://formspree.io/f/meooobpp" method="POST">
        <div className="input-group">
            <div className="input-box">
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="email" name="email" placeholder="Enter Your Email" required/>
            </div>
            <div className="input-box">
                <input type="number" name="phone" placeholder="Phone Number" />
                <input type="text" name="subject" placeholder="Subject"/>
            </div>
        </div>
        
        <div className="input-group-2">
            <textarea name="message" rows={10} cols={30} placeholder="Your Message" required></textarea>
            <input type="submit" value={"Send Message"} className="btn"/>
        </div>
        </form>
        </section>
        </div>
    )
}