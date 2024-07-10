interface WorkExperienceCard {
    title: string;
    bullet01: string;
    bullet02: string;
    bullet03?: string;
  }
  
  interface EducationCard {
    title: string;
    title_parenthesis?: string;
    degree: string;
  }
  
  interface AwardAndHonorsCard {
    type: string;
    bullet01: string;
    bullet02: string;
  }
  
  interface Dictionary {
    index: {
        title: string;
        change_language: string;
        professional_title: string;
        lead: string;
        work_experience_title: string;
        company: string;
        years: string;
        location: string;
        brazil: string;
        from: string;
        institution: string;
        type: string;
        work_experience_cards: {
          card_01: {
            title: string;
            bullet01: string;
            bullet02: string;
            bullet03?: string;
          };
          card_02: {
            title: string;
            bullet01: string;
            bullet02: string;
            bullet03?: string;
          };
        };
        education_title: string;
        education_cards: {
          card_01: {
            title: string;
            title_parenthesis?: string;
            degree: string;
          };
          card_02: {
            title: string;
            title_parenthesis?: string;
            degree: string;
          };
        };
        professional_skills_title: string;
        programming_languages: string;
        databases: string;
        frontend: string;
        idioms: {
          title: string;
          country: {
            en: string;
            pt: string;
            es: string;
            de: string;
            ch: string;
          };
          proficiency: {
            basic: string;
            intermediate: string;
            advanced: string;
            native: string;
          };
        };
        award_and_honors_title: string;
        award_and_honors_cards: {
          card_01: {
            type: string;
            bullet01: string;
            bullet02: string;
          };
          card_02: {
              type: string;
              bullet01: string;
              bullet02: string;
          };
        };
    }
    
  }
  
  export type { Dictionary };
  