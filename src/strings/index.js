import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// Strings language
import translationEN from "./languages/en.json";
import translationPT from "./languages/pt.json";

// Language packages
const resources = {
    en: {
        translation: translationEN,
    },
    pt: {
        translation: translationPT,
    },
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n