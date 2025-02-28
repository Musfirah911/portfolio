export default function Contact() {
    return (
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>
        
        <form action="https://formspree.io/f/meooobpp" method="POST">
          {/* First Row */}
          <div className="input-group">
            <div className="input-box">
              <input 
                type="text" 
                name="name" 
                placeholder="Full Name" 
                required 
                maxLength={50} 
                aria-label="Full Name"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                maxLength={100} 
                aria-label="Email Address"
              />
            </div>
  
            <div className="input-box">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number (Optional)" 
                maxLength={15} 
                aria-label="Phone Number"
              />
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                maxLength={100} 
                aria-label="Subject"
              />
            </div>
          </div>
  
          {/* Second Row */}
          <div className="input-group-2">
            <textarea 
              name="message" 
              rows={10} 
              placeholder="Your Message" 
              required 
              maxLength={500} 
              aria-label="Message"
            ></textarea>
  
            <input 
              type="submit" 
              value="Send Message" 
              className="btn"
            />
          </div>
        </form>
      </section>
    );
  }
  