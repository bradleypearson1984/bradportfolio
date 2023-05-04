import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import ProjectCard from '@/components/ProjectCard';
import projectData from '@/public/project-data';

console.log(projectData)

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Brad Pearson's Portfolio Page</title>
        <meta name="description" content="Brad Pearson's Portfolio Page, skills and projects by a human man" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} ${styles.homeMain}`}>
      <section className={styles.pageSection} >

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Mollitia fugiat quidem eveniet, praesentium facere nihil iusto perspiciatis distinctio. 
          Itaque culpa et sit sapiente voluptate aperiam quasi beatae, adipisci hic debitis.
          </p>
      </section >
          <section className={styles.pageSection} >
            <h2>Skills</h2>
          </section  >
          <section className={styles.pageSection} >
            <h2>Projects</h2>
            <div className={styles.projectsWrapper} >

            {
              projectData.map((project, index) => {
                return (

                  <ProjectCard 
                    src={project.src}
                    title={project.title}
                    key={index}
                  />
                  )
                })
              }
              </div>
              </section>
          <section className={styles.pageSection} >
            <h2>Contact</h2>
          </section>
      </main>
    </>
  );
}
