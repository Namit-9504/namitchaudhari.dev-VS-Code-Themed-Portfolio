import ExtracurricularCard from '@/components/ExtracurricularCard';

import { Article } from '@/types';

import styles from '@/styles/ExtracurricularPage.module.css';

export const articles: Article[] = [
  {
    id: "1",
    title: "Rotaract Club of DYPCOE | Sergeant-at-Arms (2023)",
    description: "As Sergeant-at-Arms, I was responsible for maintaining order, discipline, and protocol during club meetings and events. Played a key role in organizing the Y20 Summit on August 4, 2023, an initiative aligned with India’s G20 presidency, where we facilitated youth-led discussions on leadership, sustainability, and innovation.",
    images: ["/images/rotaract1.jpg","/images/rotaract2.jpg","/images/rotaract3.jpg",
      "/images/rotaract4.jpg","/images/rotaract5.jpg","/images/rotaract6.jpg"
    ],
  },
  {
    id: "2",
    title: "National Service Scheme (NSS), DYPCOE | Volunteer (2023–24)",
    description: "Actively participated in social outreach programs focused on community development, environmental awareness, and youth engagement. Contributed to cleanliness drives, health camps, and awareness campaigns, fostering civic responsibility and leadership through service.",
    images: ["/images/Nss1.jpg","/images/Nss2.jpg","/images/Nss3.jpg","/images/Nss4.jpg",
      "/images/Nss5.jpg","/images/Nss6.jpg"
    ],
  },
  {
    id: "3",
    title: "CATIA Workshop Coordinator | Mechanical Dept., DYPCOE (2023)",
    description: "Organized and led hands-on CATIA V5 training sessions, facilitating CAD skill development among peers through structured workshops and faculty collaboration.Empowered over 20+ students with industry-relevant 3D modeling and design skills.",
    images: ["/images/Catia1.jpg","/images/Catia2.jpg"],
  }
];

const ArticlesPage = () => {

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Extracurricular Activites</h1>
      <p className={styles.pageSubtitle}>
      
        
        Here are some of my key extracurricular activities that reflect leadership, teamwork, and community involvement beyond academics.
      </p>
      <div className={styles.container}>
        {articles.map((article) => (
          <ExtracurricularCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};





export default ArticlesPage;
