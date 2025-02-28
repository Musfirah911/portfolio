import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Musfirah Tabassum | Portfolio</title>
        <meta name="description" content="Passionate web developer on the journey to mastering full-stack development." />
      </Head>

      <section className="home" id="home">
        <div className="home-content">
          <h1>Hi, it&apos;s <span>Musfirah</span></h1>
          <h3 className="text-animation">I&apos;m a <span></span></h3>
          <p>
            Currently immersed in mastering front-end technologies. My journey has led me to develop a strong foundation in HTML, CSS, TypeScript, and Next.js. Though I&apos;m still learning, I am passionate about web development and committed to becoming a full-stack developer.
          </p>

          <div className="social-icons">
            <Link href="https://www.linkedin.com/in/musfirah-tabassum-911-913-khum" target="_blank" rel="noopener noreferrer">
              <Image src="/images/4.png" alt="LinkedIn" width={22} height={22} />
            </Link>
            <Link href="https://github.com/Musfirah911" target="_blank" rel="noopener noreferrer">
              <Image src="/images/5.png" alt="GitHub" width={22} height={22} />
            </Link>
            <Link href="https://www.instagram.com/musfirah_tabassum" target="_blank" rel="noopener noreferrer">
              <Image src="/images/6.png" alt="Instagram" width={22} height={22} />
            </Link>
            <Link href="https://www.facebook.com/share/1H6vB69ycW/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/7.png" alt="Facebook" width={22} height={22} />
            </Link>
            <Link href="http://www.discord.com/users/musfirah_tabassum" target="_blank" rel="noopener noreferrer">
              <Image src="/images/8.png" alt="Discord" width={22} height={22} />
            </Link>
          </div>

          <div className="btn-group">
            <Link href="#contact" className="btn">Hire</Link>
            <Link href="#contact" className="btn">Contact</Link>
          </div>
        </div>

        <div className="home-img">
          <Image src="/images/mt.jpeg" alt="Profile Photo" width={250} height={250} />
        </div>
      </section>
    </div>
  );
}
