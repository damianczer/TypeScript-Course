import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    pl: {
        translation: {
            site: {
                title: 'TypeScript',
            },
            nav: {
                home: 'Strona główna',
                course: 'Kurs',
                about: 'O kursie',
            },
            hero: {
                title: 'Prawdopodobnie\nnajlepszy darmowy\nkurs\nTypeScript',
                subtitle: 'Kompleksowy kurs od podstaw do zaawansowanych technik',
                cta: 'Rozpocznij naukę',
                welcomeTitle: 'Witaj w kursie TypeScript!',
                welcomeP1: 'Cześć! Cieszę się, że trafiłeś na tę stronę. Stworzyłem ten kurs, ponieważ wierzę, że TypeScript to jeden z najważniejszych języków, którego warto się nauczyć w dzisiejszych czasach.',
                welcomeP2: 'Przez lata pracy z JavaScriptem i TypeScriptem zebrałem wiedzę i doświadczenie, którymi chcę się z Tobą podzielić. Ten kurs to efekt mojej pasji do programowania i chęci pomocy innym w rozwoju.',
                welcomeP3: 'Niezależnie od tego, czy dopiero zaczynasz swoją przygodę z programowaniem, czy jesteś doświadczonym developerem - znajdziesz tu coś dla siebie. Wszystko za darmo, bez ukrytych kosztów.',
                welcomeP4: 'TypeScript jest aktywnie rozwijany przez Microsoft i społeczność open source. W związku z tym, kurs będzie regularnie aktualizowany o nowe funkcje i najlepsze praktyki, aby zawsze dostarczać Ci najbardziej aktualne informacje.',
                feature1Title: 'Kompleksowy',
                feature1Desc: 'Od podstaw do zaawansowanych technik TypeScript',
                feature2Title: 'Praktyczny',
                feature2Desc: 'Przykłady z prawdziwych projektów i zadania',
                feature3Title: 'Darmowy',
                feature3Desc: 'Całkowicie za darmo, bez ukrytych kosztów',
            },
            pages: {
                courseTitle: 'Kurs TypeScript',
                courseContent: 'Treść kursu pojawi się wkrótce...',
                aboutTitle: 'O kursie',
                aboutContent: 'Informacje o kursie pojawią się wkrótce...',
            },
            footer: {
                description: 'Darmowy, kompleksowy kurs TypeScript dla początkujących i zaawansowanych.',
                navigation: 'Nawigacja',
                contact: 'Kontakt',
                github: 'GitHub',
                email: 'Email',
                copyright: 'Wszystkie prawa zastrzeżone.',
                author: 'Autor',
            },
            language: {
                switch: 'English',
            },
        },
    },
    en: {
        translation: {
            site: {
                title: 'TypeScript',
            },
            nav: {
                home: 'Home',
                course: 'Course',
                about: 'About',
            },
            hero: {
                title: 'Probably the best\nfree\nTypeScript course',
                subtitle: 'Comprehensive course from basics to advanced techniques',
                cta: 'Start Learning',
                welcomeTitle: 'Welcome to the TypeScript Course!',
                welcomeP1: 'Hi! I\'m glad you found this page. I created this course because I believe TypeScript is one of the most important languages worth learning today.',
                welcomeP2: 'Through years of working with JavaScript and TypeScript, I\'ve gathered knowledge and experience that I want to share with you. This course is the result of my passion for programming and desire to help others grow.',
                welcomeP3: 'Whether you\'re just starting your programming journey or you\'re an experienced developer - you\'ll find something for yourself here. Everything for free, no hidden costs.',
                welcomeP4: 'TypeScript is actively developed by Microsoft and the open source community. Because of this, the course will be regularly updated with new features and best practices to always provide you with the most current information.',
                feature1Title: 'Comprehensive',
                feature1Desc: 'From basics to advanced TypeScript techniques',
                feature2Title: 'Practical',
                feature2Desc: 'Examples from real projects and exercises',
                feature3Title: 'Free',
                feature3Desc: 'Completely free, no hidden costs',
            },
            pages: {
                courseTitle: 'TypeScript Course',
                courseContent: 'Course content coming soon...',
                aboutTitle: 'About',
                aboutContent: 'Information about the course coming soon...',
            },
            footer: {
                description: 'Free, comprehensive TypeScript course for beginners and advanced developers.',
                navigation: 'Navigation',
                contact: 'Contact',
                github: 'GitHub',
                email: 'Email',
                copyright: 'All rights reserved.',
                author: 'Author',
            },
            language: {
                switch: 'Polski',
            },
        },
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage'],
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage'],
        },
    });

export default i18n;
