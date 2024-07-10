import styles from './styles.module.scss';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { Language } from '@/types/language';

async function WorkExperience(props: Language) {
    const dict = await getDictionary(props.language);

    return (
        <section id="work_experience">
            <h2>{dict.index.work_experience_title}</h2>
            <div id="work_experience_01">
                <h3>{dict.index.work_experience_cards.card_01.title}</h3>
                <p className={styles.work_experience_company}>
                    <strong>{dict.index.company}</strong>: Medportal&nbsp; 
                    <span className={styles.work_experience_time}>
                        (1.5 {dict.index.years})
                    </span>
                </p>
                <p className={styles.work_experience_location}>
                    <strong>{dict.index.location}</strong>: Teresópolis, Rio de Janeiro,&nbsp; 
                    {dict.index.brazil}
                </p>
                <ul>
                    <li>{dict.index.work_experience_cards.card_01.bullet01}</li>
                    <li>{dict.index.work_experience_cards.card_01.bullet02}</li>
                    <li>{dict.index.work_experience_cards.card_01.bullet03}</li>
                </ul>
            </div>
            <div id="work_experience_02">
                <h3>{dict.index.work_experience_cards.card_02.title}</h3>
                <p className={styles.work_experience_company}>
                    <strong>{dict.index.company}</strong>: Medportal&nbsp; 
                    <span className={styles.work_experience_time}>(4 {dict.index.years})</span>
                </p>
                <p className={styles.work_experience_location}>
                    <strong>{dict.index.location}</strong>: Teresópolis, Rio de Janeiro,&nbsp; 
                    {dict.index.brazil}
                </p>
                <ul>
                    <li>{dict.index.work_experience_cards.card_02.bullet01}</li>
                    <li>{dict.index.work_experience_cards.card_02.bullet02}</li>
                    <li>{dict.index.work_experience_cards.card_02.bullet03}</li>
                </ul>
            </div>
        </section>
    );
}

export default WorkExperience;
