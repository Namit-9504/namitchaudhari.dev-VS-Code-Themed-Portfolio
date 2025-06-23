import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Namit Chaudhari</h1>
        <div className={styles.subtitle}>AI Agent Developer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m an engineering graduate from Pune, India, with a primary 
              background in Mechanical Engineering and an Honors specialization in Data Science. 
              I love building intelligent systems that combine real-world problem-solving 
              with emerging technologies like AI and machine learning.
            </p>
            <p className={styles.paragraph}>
              I&apos;m passionate about leveraging Python, Streamlit, and 
              large language models (LLMs) to build meaningful AI-driven solutions.
              deeply interested in prompt engineering and leveraging LLMs to create personalized,
              purpose-driven AI agents that solve real-world challenges.
              

            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>LTIMindtree</span> as
              as a Graduate Engineer Trainee (GET), contributing to IT and AI-driven 
              solutions while continuing to explore the intersection of data science and 
              intelligent systems.
            </p>
            <p className={styles.paragraph}>
              Developed KarmaBot — an AI-powered chatbot built using Python, Streamlit,
               LangChain, and Groq APIs, designed to provide mental well-being support 
               through insights from the Bhagavad Gita.
            </p>
            <p className={styles.paragraph}>
              Gained hands-on experience in problem-solving, software development, and 
              AI agent design across academic and real-world settings.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              I&apos;m someone who believes in growth through curiosity, discipline, and service.
              I also find purpose in giving back—whether it&apos;s through organizing community events, 
              mentoring peers, or volunteering for causes that matter. I thrive in environments 
              where collaboration, creativity, and compassion intersect. Whether leading a student 
              initiative or helping a friend debug life (or code), I aim to be someone others can 
              count on.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
