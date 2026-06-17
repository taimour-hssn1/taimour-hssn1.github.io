import { TypeAnimation } from "react-type-animation";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AsciiPortrait from "./AsciiPortrait";
import FadeInSection from "./FadeInSection";
import { config } from "../config";

const Hero = () => {
    return (
         <div id="intro">
      <div className="intro-simulation">
        <AsciiPortrait />
      </div>
      <div className="intro-block">
        <div className="intro-title">
          {"hi, "}
          <span className="intro-name">
            <TypeAnimation
              sequence={[config.nickname]}
              wrapper="span"
              cursor={false}
              repeat={0}
            />
          </span>
          {" here."}
          <span className="intro-cursor">|</span>
        </div>
        <FadeInSection>
          <div className="intro-desc">
            Software Engineer in Lahore. I provide MLOps / DevOps solutions at 
            GoSaaS Inc at day time and I usually try to build something interesting by night.
            Sometimes, I do both at the same time.
          </div>
          <a href={`mailto:${config.email}`} className="intro-contact">
            <EmailRoundedIcon />
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    </div>
    );

};

export default Hero;