import type { NextPage } from 'next';
import { SEO } from '../components/seo';
import { Statistics } from '../components/statistics';
import { Features1 } from '../components/features1';
import { Features2 } from '../components/features2';
import { Features3 } from '../components/features3';
import { Testimonials } from '../components/tesminonials/index';
import { Trusted } from '../components/trusted';
import { Plans } from '../components/plans';
import { Faq } from '../components/faq';
import { Trial } from '../components/trial';
import { Footer } from '../components/footer';
import { Nav } from '@/components/navbar/navbar';
import { Layout } from '@/components/navbar/layout';
import { Hero } from '@/components/hero';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO 
        title="PT Mutu Cipta Utama - Konsultan Profesional Jakarta"
        description="Layanan konsultasi manajemen, teknologi informasi, pengembangan e-commerce, dan jasa keinsinyuran. NIB: 1003250034417. Hubungi 081387230801."
        keywords="konsultan manajemen jakarta, teknologi informasi, e-commerce development, jasa keinsinyuran, arsitektur, konsultasi transportasi, PT Mutu Cipta Utama"
      />
      <Layout>
        <Nav />
        <Hero />
        <Statistics />
        <Features1 />
        <Features2 />
        <Features3 />
        <Testimonials />
        <Trusted />
        {/* <Plans /> */}
        <Faq />
        <Trial />
        <Footer />
      </Layout>
    </>
  );
};

export default HomePage;
