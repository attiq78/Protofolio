import Head from 'next/head';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { personalInfo } from '@/models/data';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>{`Contact - ${personalInfo.name}`}</title>
        <meta name="description" content="Get in touch with me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

