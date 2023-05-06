import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import ProjectCard from '@/components/ProjectCard';
import projectData from '@/public/project-data';
import Form from '@/components/Form';

// icon image imports



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
          <section className={`${styles.pageSection} ${styles.skillsSection}`} >
            <h2>Skills</h2>
            <div>
              <Image src="/html5_icon.png" width={64} height={64} alt="html5" />
              <Image src="/css3_icon.png" width={64} height={64} alt="css3" />
              <Image src="/javascript_icon.png" width={64} height={64} alt="javascript" />
              <Image src="/react_icon.png" width={64} height={64} alt="react" />
              <Image src="/sass_icon.png" width={64} height={64} alt="sass" />
              <Image src="/nodejs_icon.png" width={64} height={64} alt="nodejs" />
              <Image src="/server_icon.png" width={64} height={64} alt="mongodb" />
              <Image src="/python_icon.png" width={64} height={64} alt="python" />
            </div>
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
           <Form />
          </section>
      </main>
    </>
  );
}
