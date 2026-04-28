import { ExternalLink, FileText, Home, Mail, MapPin } from "lucide-react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const contactLinks = [
  {
    label: "Email",
    value: "ryanwding@gmail.com",
    href: "mailto:ryanwding@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/CrackHegg",
    href: "https://github.com/CrackHegg",
    image: "contact/githubIcon.svg",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ryan-ding-2a8987273",
    href: "https://www.linkedin.com/in/ryan-ding-2a8987273/",
    image: "contact/linkedinIcon.svg",
  },
  {
    label: "Resume",
    value: "Ryan_Ding_Resume.pdf",
    href: "/Ryan_Ding_Resume.pdf",
    icon: FileText,
  },
  {
    label: "Portfolio",
    value: "ryan ding portfolio",
    href: "#home",
    icon: Home,
  },
];

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Interested in robotics, autonomy, computer vision, or AI infrastructure? Reach out.</p>
      </div>
      <ul className={styles.links}>
        {contactLinks.map((link) => {
          const Icon = link.icon;
          const isExternal = link.href.startsWith("http") || link.href.endsWith(".pdf");

          return (
            <li className={styles.link} key={link.label}>
              <a
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                <span className={styles.linkIcon} aria-hidden="true">
                  {Icon ? (
                    <Icon strokeWidth={1.8} />
                  ) : (
                    <img src={getImageUrl(link.image)} alt="" />
                  )}
                </span>
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.value}</small>
                </span>
                {isExternal && <ExternalLink aria-hidden="true" size={15} strokeWidth={2} />}
              </a>
            </li>
          );
        })}
      </ul>
      <div className={styles.location}>
        <MapPin aria-hidden="true" size={16} strokeWidth={1.8} />
        <p>Pittsburgh, PA | (225) 333-6811</p>
      </div>
    </footer>
  );
};
