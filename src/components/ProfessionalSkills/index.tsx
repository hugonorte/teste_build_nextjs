import styles from './styles.module.scss'
import { getDictionary } from '@/app/[lang]/dictionaries';
import { Language } from '@/types/language';

async function ProfessionalSkills(props: Language) {
    const dict = await getDictionary(props.language);

    return (
        <section id='professional_skills'>
            <h2>{dict.index.professional_skills_title}</h2>
            <h3>{dict.index.programming_languages}</h3>
            <ul>
                <li>Python</li>
                <li>Javascript</li>
                <li>PHP</li>
                <li>GO</li>
            </ul>

            <h3>{dict.index.databases}</h3>
            <ul>
                <li>MySQL</li>
                <li>PostGres</li>
            </ul>

            <h3>{dict.index.frontend}</h3>
            <ul>
                <li>NextJs</li>
                <li>React</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>PostGres</li>
            </ul>

            <h3>{dict.index.idioms.title}</h3>
            <ul>
                <li>{dict.index.idioms.country.en} – {dict.index.idioms.proficiency.advanced}</li>
                <li>{dict.index.idioms.country.es} – {dict.index.idioms.proficiency.basic}</li>
                <li>{dict.index.idioms.country.ch} – {dict.index.idioms.proficiency.basic}</li>
                <li>{dict.index.idioms.country.pt} – {dict.index.idioms.proficiency.native}</li>
            </ul>
        </section>
    )
}

export default ProfessionalSkills