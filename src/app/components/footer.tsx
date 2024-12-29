import Link from "next/link"

export default function Footer(){
    return(
        <footer className="footer">
        <div className="social">
        <Link href="https://www.linkedin.com/in/musfirah-tabassum-911-913-khum?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener nooreferrer" target="_blank"> <img src="/images/4.png"/> </Link>
          <Link href="https://github.com/Musfirah911" rel="noopener nooreferrer" target="_blank"><img src="/images/5.png"/></Link>
          <Link href="https://www.instagram.com/musfirah_tabassum?igsh=MWcydzZpa2RlY2Qzdg==" rel="noopener nooreferrer" target="_blank"><img src="/images/6.png"/></Link>
          <Link href="https://www.facebook.com/share/1H6vB69ycW/" rel="noopener nooreferrer" target="_blank"><img src="/images/7.png"/></Link>
          <Link href="http://www.discord.com/users/musfirah_tabassum" rel="noopener nooreferrer" target="_blank"><img src="/images/8.png"/></Link>
        </div>

        <ul className="list">
            <li>
                <Link href="#education">Education</Link>
            </li>
            <li>
                <Link href="#skills">Services</Link>
            </li>
            <li>
                <Link href="#projects">Projects</Link>
            </li>
            <li>
                <Link href="#contact">Contact</Link>
            </li>
        </ul>

        <p className="copyright">©
        <span> Musfirah Tabassum</span>  | All Rights Reserved
        </p>
    </footer>
    )
}