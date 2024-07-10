import styles from './styles.module.scss';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { Language } from '@/types/language';

async function Education(props: Language) {

    const dict = await getDictionary(props.language);

    const card_01 = dict.index?.work_experience_cards?.card_01;

  if (!card_01) {
    console.log('Card 01 is missing in education');
  }

    return (
        <section id='education'>
            <h2>{dict.index.education_title}</h2>
            <div id="education_01" className={styles.education_card}>
                <h3>{dict.index.education_cards.card_01.title} <span className={styles.education_h3_parenthesis}>({dict.index.education_cards.card_01.title_parenthesis})</span></h3>
                <p className={styles.education_degree}>{dict.index.education_cards.card_01.degree} – {dict.index.from} 2023 – 2027</p>
                <p className={styles.education_instituition}>
                    <strong>{dict.index.institution}</strong>: Unifeso
                </p>
                <p className={styles.education_location}>
                    <strong>{dict.index.location}</strong>: Teresópolis, Rio de Janeiro, {dict.index.brazil}
                </p>
            </div>
            <div id="education_02" className={styles.education_card}>
                <h3>{dict.index.education_cards.card_02.title}</h3>
                <p className={styles.education_degree}>{dict.index.education_cards.card_01.degree} – From 2002 – 2006</p>
                <p className={styles.education_instituition}>
                    <strong>{dict.index.institution}</strong>: UniverCidade
                </p>
                <p className={styles.education_location}>
                    <strong>{dict.index.location}</strong>: Rio de Janeiro, Rio de Janeiro, {dict.index.brazil}
                </p>
            </div>
        </section>
    )
}

export default Education