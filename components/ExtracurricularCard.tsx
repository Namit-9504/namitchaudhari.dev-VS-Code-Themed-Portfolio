import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Article } from '@/types';
import styles from '@/styles/ExtracurricularCard.module.css';

interface ArticleCardProps {
  article: Article;
}

const ExtracurricularCard = ({ article }: ArticleCardProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % article.images.length);
    }, 2000); // change image every 2 seconds

    return () => clearInterval(interval);
  }, [article.images.length]);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {article.images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`${article.title} - ${i}`}
            fill
            sizes="(max-width: 768px) 300vw, 300px"
            className={`${styles.image} ${i === index ? styles.active : ''}`}
          />
        ))}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.description}>{article.description}</p>
      </div>
    </div>
  );
};

export default ExtracurricularCard;