import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { languageContext } from "../Button/LanguageButton";
import text from "../../scripts.json"
import SocialMedia from "./SocialMedia";

function AboutCard() {
  const { language, toggleLanguage } = useContext(languageContext);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {language === "en" &&
            <p style={{ textAlign: "justify" }}>
              Hi, I am <span className="purple">LU, Shaohao </span>
              from <span className="purple"> Zhuhai, Guangdong, China.</span> I am a both software engineer and algorithm engineer.
              <br /> I got both the bachelor and the master degree in <span className="purple">Sun-Yat-Sen University. </span>
              With this website, I share my daily life, including the text, pictures and videos in the process of learning and traveling, to record the progress of self-promotion.
              In the mean time, I use it to show my achievements in learning and working.
              <br />
              In my spare time, some other activities that I love to do:
            </p>
          }
          {
            language === "zh" &&
            <p style={{ textAlign: "justify" }}>
              嗨，我是<span className="purple">卢少豪</span>, 来自<span className="purple">中国广东珠海</span>。 我是一位软件工程师兼算法工程师.
              我在<span className="purple">中山大学</span>获得学士和硕士学位。这个个人站是我用来分享我日常生活，学习，旅游过程中的文字，图片，视频，记录我一步步成长的脚步。
              同时这个个人站也是一个自我展示的窗口，用来展示我的学习，工作成果等～
              <br />
              业余时间，我喜欢：
            </p>
          }
          <ul>
            <li className="about-activity">
              <ImPointRight /> {text[language].game}
            </li>
            <li className="about-activity">
              <ImPointRight /> {text[language].workout}
            </li>
            <li className="about-activity">
              <ImPointRight /> {text[language].cooking}
            </li>
            <li className="about-activity">
              <ImPointRight /> {text[language].movie}
            </li>
          </ul>
          <h2> <span className="purple">{text[language].socialmedia}</span> </h2>
          <div> 
           {language === "en" && <p>If you're interested in me, feel free to contact me on:</p>}
           {language === "zh" && <p>你可以通过以下社交媒体联系我：</p>}
          </div>
          <SocialMedia />
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Investing yourself is one of the best investment!"{" "}
          </p>
          <footer className="blockquote-footer">LU, Shaohao</footer> */}
        </blockquote>
      </Card.Body>
    </Card >
  );
}

export default AboutCard;
