'use lient'
import { ArrowUpRight, Github, Instagram, Linkedin, MailPlus, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MyPhoto from '@/img/photo-perfil.jpeg'
import IconWTP from '@/img/whatsapp.png'


const Index = ({ closed }: any) => {
    const clsedModal = () => {
        closed(!true)
    }
    return (
        <section className='profile_mobile'>
            <button className='closed' onClick={clsedModal}>X</button>
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
                        <Link href='/pages/AboutMe' onClick={clsedModal}>
                            <ArrowUpRight /> Sobre
                        </Link>
                    </li>
                    <li>
                        <Link href='/pages/Projects' onClick={clsedModal}>
                            <ArrowUpRight /> Projetos
                        </Link>
                    </li>
                    <li>
                        <Link href='/pages/Skills' onClick={clsedModal}>
                            <ArrowUpRight />  Habilidades
                        </Link>
                    </li>
                </ul>
            </div>
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

            <div className='box_wtp'>
                <Link href='https://api.whatsapp.com/send?phone=5531982305506' target='__blank'>
                    <Image src={IconWTP} alt='icon whatzapp' />
                </Link>
            </div>

        </section>
    )
}

export default Index