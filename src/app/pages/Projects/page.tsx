import { ArrowDownLeftIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import CardProjects from '@/components/CardProjects/Index'
import { Projects } from '@/api'

const page = () => {
    return (
        <div className='card_projects'>
            <Link href='/'>
                <ArrowDownLeftIcon /> Home
            </Link>
            <div className='box_projects'>
                <h2>Projetos</h2>
                <div className='container_projects'>
                    {
                        Projects && Projects.map((project) => (
                            <>
                                <CardProjects
                                    img={project.img}
                                    title={project.title}
                                    description={project.description}
                                    link_site={project.site}
                                    link_github={project.github}
                                />
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default page