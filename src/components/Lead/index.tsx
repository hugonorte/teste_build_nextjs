import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import LinkedInLogo from '../../../public/img/linkedin.svg'
import { getDictionary } from '@/app/[lang]/dictionaries';
import { Language } from '@/types/language';

async function Lead(props: Language) {
  const dict = await getDictionary(props.language);

  return (
    <>
      <section id="linkedin">
        <p className={styles.linkedin}>
          <Link href="https://www.linkedin.com/in/hugonorte" target="_blank">
            <Image
              src={LinkedInLogo}
              width={500}
              height={500}
              alt="Picture of the author"
              className={styles.linkedin_logo}
            />
          </Link>

          <Link href="https://www.linkedin.com/in/hugonorte" target="_blank">
            @hugonorte
          </Link>
        </p>
      </section>

      <section id="lead">
        <p className={styles.lead}>{dict.index.lead}</p>
      </section>
    </>
  );
}

export default Lead