import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import text from '../../scripts.json';
import {languageContext} from "../Button/LanguageButton";

function Type() {
  const {language, toggleLanguage} = useContext(languageContext);

  return (
    <Typewriter
      options={{
        strings: [
          text[language].se,
          text[language].ae,
          text[language].yt,
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
