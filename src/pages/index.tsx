import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import ProjectsPreview from '@/components/ProjectsPreview';
import ContactPreview from '@/components/ContactPreview';
import Footer from '@/components/Footer';
import { personalInfo } from '@/models/data';
import Education from '@/components/Education';
import Resume from '@/components/Resume';

export default function Home() {
  return (
    <>
      <Head>
        <title>{personalInfo.name} - Portfolio</title>
        <meta name="description" content={personalInfo.bio} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Resume />
        <ProjectsPreview />
        <ContactPreview />
      </main>
      <Footer />
    </>
  );
}

