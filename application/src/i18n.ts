import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    pl: {
        translation: {
            site: {
                title: 'Kurs TypeScript',
            },
            nav: {
                home: 'Strona główna',
                course: 'Kurs',
                about: 'O kursie',
            },
            hero: {
                title: 'Prawdopodobnie najlepszy\ndarmowy kurs TypeScript',
                subtitle: 'Kompleksowy kurs od podstaw do zaawansowanych technik',
                cta: 'Rozpocznij naukę',
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
                title: 'TypeScript Course',
            },
            nav: {
                home: 'Home',
                course: 'Course',
                about: 'About',
            },
            hero: {
                title: 'Probably the best\nfree TypeScript course',
                subtitle: 'Comprehensive course from basics to advanced techniques',
                cta: 'Start Learning',
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
        fallbackLng: 'pl',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

export default i18n;
