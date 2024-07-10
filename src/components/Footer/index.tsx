import { getDictionary } from '@/app/[lang]/dictionaries';
import { Language } from '@/types/language';

async function Footer(props: Language) {
  const dict = await getDictionary(props.language);

    return (
        <footer>
            <hr />
            <p>Teresópolis, Rio de Janeiro, {dict.index.brazil} - {2024}</p>
        </footer>
    )
}

export default Footer