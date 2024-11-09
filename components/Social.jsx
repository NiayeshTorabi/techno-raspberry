import Link from "next/link";

import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const socials = [
  { icon: <FaPhone />, path: "tel:09120383929" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/technoraspberry" },
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
