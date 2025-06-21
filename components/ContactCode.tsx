import styles from '@/styles/ContactCode.module.css';

const contactItems = [
 
  {
    social: 'Email',
    link: 'namitschaudhari@gmail.com',
    href: 'mailto:namitschaudhari@gmail.com',
  },
  {
    social: 'Github',
    link: 'Namit-9504',
    href: 'https://github.com/Namit-9504',
  },
  {
    social: 'Linkedin',
    link: 'Namit-chaudhari',
    href: 'https://www.linkedin.com/in/namit-chaudhari/',
  },
  {
    social: 'Telegram',
    link: 'Namit Chaudhari',
    href: 'https://t.me/NamitChaudhari',
  },
  {
    social: 'Instagram',
    link: 'Chaudharinamit_',
    href: 'https://www.instagram.com/chaudharinamit_',
  },
  {
    social: 'Whatsapp',
    link: '+91 9623127245',
    href: 'https://wa.me/9623127245?text=Hii',
  },
  {
    social: 'Twitter',
    link: 'ChaudhariNamit',
    href: 'https://www.twitter.com/ChaudhariNamit',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
