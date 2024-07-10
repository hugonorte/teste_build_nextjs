"use client";

import { getDictionary } from '@/app/[lang]/dictionaries';
import { Language } from '@/types/language';
import styles from './styles.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import { Dictionary } from '@/types/dictionary'; 
import { usePathname } from 'next/navigation'

function Header(props : Language) {
    const [dict, setDict] = useState<Dictionary | null>(null);
    const pathname = usePathname().split('/');
    const chgLang = pathname.length > 2 ? '/teste_build_nextjs/' : '';

    useEffect(() => {
        const fetchDictionary = async () => {
            const dictionary = await getDictionary(props.language);
            setDict(dictionary);
        };
        fetchDictionary();
    }, [props.language]);

    const handleLanguageChange = (event : ChangeEvent<HTMLSelectElement>) => {
        const language = event.target.value;
        window.location.href = `${chgLang}/${language}`;
    };

    if (!dict) {
        return <div>Loading...</div>;
    }

    return (
        <header className={styles.header}>
            <div>
                <h1>Hugo Norte</h1>  
                <h3>{dict.index.professional_title}</h3>
            </div>
            <div>
                <select 
                    id="language_selector" 
                    defaultValue="default"
                    onChange={(e) => {
                        handleLanguageChange(e)
                    }}>
                    <option value="pt-br"> 🇧🇷 PT-BR</option>
                    <option value="en">🇬🇧 EN </option>
                    <option value="de">🇩🇪 DE </option>
                    <option value="es">🇪🇸 ES </option>
                    <option value="default">{dict.index.change_language}</option>
                </select>
            </div>
        </header>
    )
}

export default Header