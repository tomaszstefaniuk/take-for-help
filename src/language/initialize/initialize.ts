import i18next from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { defaultLanguage } from "../languages.json";
import en from "../resources/en.json";
import pl from "../resources/pl.json";

i18next.use(detector).use(initReactI18next).init({
  resources: { en, pl },
  fallbackLng: defaultLanguage,
});
