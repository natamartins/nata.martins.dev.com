import '../styles/style.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import MyPhoto from '@/img/photo-perfil.jpeg'
import IconWTP from '@/img/whatsapp.png'
import Link from 'next/link'
import { ArrowUpRight, Github, Instagram, Linkedin, MailPlus, MessageCircle, MessageSquareDashedIcon, Twitter } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Natã Martins.dev',
  description: 'My portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className='container_nav'>
          <nav className='box_nav'>
            <h1>NTCodeDev</h1>

            <ul className='box_nav-list'>
              <li>
                <Link href='https://www.linkedin.com/in/nat%C3%A3martins/' target='__blank'>
                  <Linkedin />
                </Link>
              </li>
              <li>
                <Link href='https://github.com/natamartins' target='__blank'>
                  <Github />
                </Link>
              </li>
              <li>
                <Link href='https://twitter.com/NataCodedev' target='__blank'>
                  <Twitter />
                </Link>
              </li>
              <li>
                <Link href='https://www.instagram.com/nathan_martins3/?theme=dark' target='__blank'>
                  <Instagram />
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className='container_main'>
          <section className='profile'>
            <div className='box_profile'>
              <div className='box_profile-img'>
                <Image src={MyPhoto} alt='' />
              </div>
              <h2>Natã Martins</h2>
              <p>
                <Link href='mailto:nata.codedev@gmail.com' target='__blank'>
                  <MailPlus size={15} />nata.codedev@gmail.com
                </Link>
              </p>
            </div>

            <div className='menu_links'>
              <h2>Menu</h2>
              <ul>
                <li>
                  <Link href='/pages/AboutMe'>
                    <ArrowUpRight /> Sobre
                  </Link>
                </li>
                <li>
                  <Link href='/pages/Projects'>
                    <ArrowUpRight /> Projetos
                  </Link>
                </li>
                <li>
                  <Link href='/pages/Skills'>
                    <ArrowUpRight />  Habilidades
                  </Link>
                </li>
              </ul>
            </div>

            <div className='box_wtp'>
              <Link href='https://api.whatsapp.com/send?phone=5531982305506' target='__blank'>
                <Image src={IconWTP} alt='icon whatzapp' />
              </Link>
            </div>
          </section>
          <section className='content'>
            <div className='box_contents'>
              {children}
            </div>
          </section>
        </main>
        <footer className='container_footer'>
          <p>Natã Martins © 2023</p>
        </footer>
      </body>
    </html>
  )
}
