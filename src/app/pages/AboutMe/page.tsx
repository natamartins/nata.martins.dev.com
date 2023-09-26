import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='box_about-me'>
      <div className='about'>
        <h2>Sobre</h2>
        <p>
          Olá, sou o  Natã Martins, desenvolvedor front-end!
          Comecei minha jornada no mundo da programação em 2021, desde então essa virou minha paixão, ao longo desses anos venho me especializando cada vez mais nesta área do front.
          Sou amante de esportes, pratico corrida, luto Kickbox, jogo um fut às vezes, sempre prezo e cuido da minha saúde, afinal, <b>“nem só de código  vive um dev”</b>.
          No meu blog tem um artigo bem legal sobre uma prova de corrida que realizei, deixarei o link aqui.
        </p>
        <Link href='https://nata-codedev-com-br.vercel.app/posts/PrimeiroPost' target='__blank' >
          Artigo!!!
        </Link>

        <p>
          Criando diversos projetos, venho praticando e aprimorando minhas habilidades no front-end, não ficando preso apenas nessa área, sempre reservo um tempo para estudar outras áreas, como o back-end e designer.
          Meu foco é me tornar um especialista na frente.
        </p>
      </div>

      <div className='experience'>
        <h2>Experiência</h2>
        <p>
          Tive uma experiência de 5 meses em uma startup de tecnologia, onde tive a oportunidade de conhecer o mundo da programação da vida real, fora dos cursos!
          Desenvolvimento e manutenção da plataforma principal Pingback. A plataforma tem milhares de acessos mensalmente, onde os usuários podem criar, interagir, gerenciar, medir e monetizar. Fui responsável por implementar e disponibilizar em produção componentes React JS da nova interface. Adquiri um grande conhecimento.
        </p>

        <p>
          Estou constantemente aprimorando minhas habilidades e me mantendo atualizado com as últimas tendências e tecnologias em desenvolvimento front-end. Estou sempre pronto para enfrentar novos desafios e ampliar meus conhecimentos!
        </p>
      </div>
    </div>
  )
}

export default page