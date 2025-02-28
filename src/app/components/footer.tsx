import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <Link
          href="https://www.linkedin.com/in/musfirah-tabassum-911-913-khum"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/images/4.png" alt="LinkedIn Profile" />
        </Link>
        <Link href="https://github.com/Musfirah911" rel="noopener noreferrer" target="_blank">
          <img src="/images/5.png" alt="GitHub Profile" />
        </Link>
        <Link href="https://www.instagram.com/musfirah_tabassum" rel="noopener noreferrer" target="_blank">
          <img src="/images/6.png" alt="Instagram Profile" />
        </Link>
        <Link href="https://www.facebook.com/share/1H6vB69ycW/" rel="noopener noreferrer" target="_blank">
          <img src="/images/7.png" alt="Facebook Profile" />
        </Link>
        <Link href="http://www.discord.com/users/musfirah_tabassum" rel="noopener noreferrer" target="_blank">
          <img src="/images/8.png" alt="Discord Profile" />
        </Link>
      </div>

      <ul className="list">
        <li>
          <Link href="#education">Education</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>

      <p className="copyright">
        © <span>Musfirah Tabassum</span> | All Rights Reserved
      </p>
    </footer>
  );
}
