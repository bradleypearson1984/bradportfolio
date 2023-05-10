import Head from 'next/head';
import { Inter } from 'next/font/google'; 
const inter = Inter({ subsets: ['latin'] })

export default function Resume(props) {
    
    
    return (
        <>
        <Head>
        <title>Resume | Brad Pearson's Portfolio Page</title>
        <meta name="description" content="Brad Pearson's resume, learn more about my profesional experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={inter.className} >
            <section>
                <h5>download a copy of this resume <a target="_blank" href="https://docs.google.com/document/d/1ILOZo0eYivaWJsV9ySoA-OtabniC0UaHyWH50A8cpHY/edit?usp=sharing"></a></h5>
            </section>
            <h2>Summary</h2>
        <p>
            Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit.
            Repellat, sint debitis pariatur quis voluptas eveniet, 
            dolorum sit quibusdam assumenda tenetur culpa ipsam et 
            aspernatur harum illum autem distinctio impedit. Tenetur.
        </p>
        <hr />

        <h2>Technical Skills</h2>
            <ul>
                <li><strong>Languages:</strong>JavaScript, Python, HTML5, CSS3</li>
                <li><strong>Frameworks/Libraries:</strong>Next.js, React, Django, Jquery, Tailwind, Materialize</li>
                <li><strong>Databases/Backeds:</strong>Google Firebase, MongoDB, PostgreSQL</li>
                <li><strong>Methodologies:</strong>MVC, RESTful Architecture</li>
                <li><strong>Tools:</strong>Git, VS Code, Postman</li>
            </ul>
            <hr />
            <h2>Tech-Related Experience</h2>
            <h3>Job job job job job job </h3>
            <ul>
                <li>did such a good job</li>
                <li>did such a good job</li>
            </ul>
            <hr />
            <h2>Other Experience </h2>
            {/* TODO: Add other experience here  */}
            <hr />
            <h2>Education</h2>
            <ul>
                <li><strong>mcad</strong>bfa </li>
            </ul>
        </main>
        </>
    )
}