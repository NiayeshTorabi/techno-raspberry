import Link from "next/link";

import { FaTelegram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaTelegram />, path: "/" },
  { icon: <FaWhatsapp />, path: "/" },
  { icon: <FaEnvelope />, path: "mailto:info@technoraspberry.ir" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
};

export default Social;
