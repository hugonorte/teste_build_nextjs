import styles from './styles.module.scss'
import { getDictionary } from '@/app/[lang]/dictionaries';
import { Language } from '@/types/language';

async function AwardsAndHonors(props: Language) {
    const dict = await getDictionary(props.language);

    const card_01 = dict.index?.work_experience_cards?.card_01;

  if (!card_01) {
    console.log('Card 01 is missing in awards');
  }

    return (
        <section id='award_and_honors'>
            <h2>{dict.index.award_and_honors_title}</h2>

            <div id="award_and_honors_01" className={styles.education_card}>
                <h3>Techstars - Startup Weekend 2023</h3>
                <p className={styles.education_instituition}>
                    <strong>{dict.index.type}</strong>: {dict.index.award_and_honors_cards.card_01.type}
                </p>
                <p className={styles.education_location}>
                    <strong>{dict.index.location}</strong>: Teresópolis, Rio de Janeiro, {dict.index.brazil}
                </p>
                <ul>
                    <li>{dict.index.award_and_honors_cards.card_01.bullet01}</li>
                    <li>{dict.index.award_and_honors_cards.card_01.bullet02}</li>
                </ul>
            </div>

            <div id="award_and_honors_02" className={styles.education_card}>
                <h3>Hackaton Unifeso 2023</h3>
                <p className={styles.education_instituition}>
                    <strong>{dict.index.type}</strong>: {dict.index.award_and_honors_cards.card_02.type}
                </p>
                <p className={styles.education_location}>
                    <strong>{dict.index.location}</strong>: Teresópolis, Rio de Janeiro, {dict.index.brazil}
                </p>
                <ul>
                    <li>{dict.index.award_and_honors_cards.card_02.bullet01}</li>
                    <li>{dict.index.award_and_honors_cards.card_02.bullet02}</li>
                </ul>
            </div>
        </section>
    )
}

export default AwardsAndHonors