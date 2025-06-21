import Image from 'next/image';

import { Article } from '@/types';

import styles from '@/styles/ArticleCard.module.css';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div>
      <div className={styles.imageWrapper}>
        <Image
          src={article.cover_image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 300vw, 300px"
          className={styles.image}
        />
        
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.description}>{article.description}</p>

      </div>
    </div>
  );
};

export default ArticleCard;
