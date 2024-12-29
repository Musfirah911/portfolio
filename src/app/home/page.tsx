import Head from "next/head";
import Link from "next/link";

export default function Home(){
    return(
        <div>
          <Head>
        <Link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
            <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, it's <span>Musfirah</span></h1>
        <h3 className="text-animation">I'm a <span></span></h3>
        <p>
        Currently immersed in mastering front-end technologies. My journey has led me to develope a strong foundation in HTML, CSS, TypeScript and recently diving deeper into Next.js Though I'm still in the learning phase, I am passionate about web developement and committed to becoming a full-stack developer
        </p>

        <div className="social-icons">
          <Link href="https://www.linkedin.com/in/musfirah-tabassum-911-913-khum?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener nooreferrer" target="_blank"> <img src="/images/4.png"/> </Link>
          <Link href="https://github.com/Musfirah911" rel="noopener nooreferrer" target="_blank"><img src="/images/5.png"/></Link>
          <Link href="https://www.instagram.com/musfirah_tabassum?igsh=MWcydzZpa2RlY2Qzdg==" rel="noopener nooreferrer" target="_blank"><img src="/images/6.png"/></Link>
          <Link href="https://www.facebook.com/share/1H6vB69ycW/" rel="noopener nooreferrer" target="_blank"><img src="/images/7.png"/></Link>
          <Link href="http://www.discord.com/users/musfirah_tabassum" rel="noopener nooreferrer" target="_blank"><img src="/images/8.png"/></Link>
        </div>

        <div className="btn-group">
          <Link href="#contact" className="btn">Hire</Link>
          <Link href="#contact" className="btn">Contact</Link>
        </div>
      </div>
      <div className="home-img">
        <img src="/images/mt.jpeg" alt="Profile Photo" />
      </div></section>
        </div>
    )
}