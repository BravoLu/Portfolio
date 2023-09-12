// File1.js
import React, { createContext, useState } from 'react';

const languageContext = createContext();

function LanContextProvider({ children }) {
  const [language, setLanguage] = useState('en'); // 默认语言是英文

  const toggleLanguage  = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  } 

  return (
    <languageContext.Provider value={{ language, toggleLanguage }}>
        { children }
    </languageContext.Provider>
  );
}

export {languageContext, LanContextProvider};
