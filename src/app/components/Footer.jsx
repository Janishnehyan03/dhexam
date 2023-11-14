import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 absolute bottom-0 w-full">
      <div className="w-full mx-auto justify-center flex items-center">
        <a target="_blank" href="https://www.facebook.com/DHIUniversity/" className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-200  rounded-lg ">
          <FontAwesomeIcon icon={faFacebook} className="h-4" />
        </a>
        <a target="_blank" href="https://www.youtube.com/@dhmediayt" className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-200  rounded-lg ">
          <FontAwesomeIcon icon={faYoutube} className="h-4" />
        </a>
        <a target="_blank" href="https://www.instagram.com/darulhudaislamicuniversity/" className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-200  rounded-lg ">
          <FontAwesomeIcon icon={faInstagram} className="h-4" />
        </a>
        <a target="_blank" href="https://twitter.com/DarulHudaIU" className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-200  rounded-lg ">
          <FontAwesomeIcon icon={faTwitter} className="h-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
