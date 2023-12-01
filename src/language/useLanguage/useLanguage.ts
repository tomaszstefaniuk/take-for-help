import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import supportedLanguages from "../languages.json";

import "../initialize/initialize";

export const useLanguage = () => {
  const [t, i18n] = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const updateLanguage = () => {
    i18n.changeLanguage(language);
  };
  useEffect(updateLanguage, [i18n, language]);

  const { languageList } = supportedLanguages;
  const options = { language, setLanguage, t, languageList };

  return options;
};
