import Head from 'next/head';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import { personalInfo } from '@/models/data';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>{`Projects - ${personalInfo.name}`}</title>
        <meta name="description" content="Explore my portfolio of projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  );
}

