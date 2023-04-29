import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  AiOutlineMail as Email,
  AiFillFacebook as Facebook,
  AiFillLinkedin as Linkedin,
  AiFillRedditCircle as Reddit,
  AiFillTwitterCircle as Twitter,
  AiOutlineWhatsApp as WhatsApp,
} from "react-icons/ai";
import { BsTelegram as Telegram } from "react-icons/bs";
import { useEffect, useRef } from "react";

const Share = ({ setShowShare }) => {
  const ref = useRef(null);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowShare(false);
      }
    });
    console.log(ref);
    window.addEventListener("keydown", () => {
      setShowShare(false);
    });
  }, []);
  return (
    <div className="share_buttons slide-fwd-top" ref={ref}>
      <p>
        just click <span>Ctrl + v</span> to past the Quote
      </p>
      <FacebookShareButton url="https://www.linkedin.com/in/ahmed-shahin-64ba80256/">
        <Facebook />
      </FacebookShareButton>
      <EmailShareButton url="https://www.linkedin.com/in/ahmed-shahin-64ba80256/">
        <Email />
      </EmailShareButton>

      <LinkedinShareButton url="https://www.linkedin.com/in/ahmed-shahin-64ba80256/">
        <Linkedin />
      </LinkedinShareButton>

      <RedditShareButton url="https://www.linkedin.com/in/ahmed-shahin-64ba80256/">
        <Reddit />
      </RedditShareButton>
      <TelegramShareButton url="https://www.linkedin.com/in/ahmed-shahin-64ba80256/">
        <Telegram />
      </TelegramShareButton>

      <TwitterShareButton url="https://www.linkedin.com/in/ahmed-shahin-64ba80256/">
        <Twitter />
      </TwitterShareButton>

      <WhatsappShareButton url="https://www.linkedin.com/in/ahmed-shahin-64ba80256/">
        <WhatsApp />
      </WhatsappShareButton>
      <p>
        press <span>any key</span> to close
      </p>
    </div>
  );
};

export default Share;
