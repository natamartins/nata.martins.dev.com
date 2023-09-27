import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface Dates {
    img: any,
    title: string,
    description: string,
    link_site: string,
    link_github: string

}

const Index = ({ img, title, description, link_site, link_github }: Dates) => {
    return (
        <div className='box_card-projects'>
            <Image src={img} alt={title + description} />
            <h4>{title}</h4>
            <p>{description}</p>
            <ul>
                <li>
                    <Link href={link_site} target='__blank'>
                        Site
                    </Link>
                </li>
                <li>
                    <Link href={link_github} target='__blank'>
                        Github
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Index