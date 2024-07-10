import styles from './styles.module.scss'
import Header from '@/components/Header';
import Lead from '@/components/Lead';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import ProfessionalSkills from '@/components/ProfessionalSkills';
import AwardsAndHonors from '@/components/AwardsAndHonors';
import Footer from '@/components/Footer';
interface PageProps {
  params: {
    lang: string;
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'de' }, { lang: 'es' }, { lang: 'pt-br' }];
}

export default async function Page({ params: { lang } }: PageProps) {
  
  return (
    <>
    <div className={styles.col_1}>
        &nbsp;
    </div>
    <div className={styles.col_2}>
      <Header language={lang} />
      <main>
        <Lead language={lang} />
        <WorkExperience language={lang} />
        <Education language={lang} />
        <ProfessionalSkills language={lang} />
        <AwardsAndHonors language={lang} />
      </main>
      <Footer language={lang} />
    </div>
    <div className={styles.col_3}>
      &nbsp;
    </div>
    </>
  )
}