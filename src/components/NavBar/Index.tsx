"use client"
import { Github, Instagram, Linkedin, Menu, Twitter } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuMobile from '@/components/CardMenu/Index'

const Index = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
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
                {
                    openMenu ? (
                        ''
                    ) : (
                        <button className='open' onClick={() => setOpenMenu(true)}>
                            <Menu />
                        </button>
                    )
                }
                {
                    openMenu && (
                        <MenuMobile closed={setOpenMenu}/>
                    )
                }
            </nav>
        </header>
    )
}

export default Index