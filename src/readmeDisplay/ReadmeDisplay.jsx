import {
  readmeContent,
  readmeRelativePath,
} from 'virtual:readme-display';
import { Helmet } from 'react-helmet-async';
import styles from '@/component/teachingPlan/basic.module.scss';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import Section from '@/component/teachingPlan/Section';
import Card from '@/component/teachingPlan/Card';
import Footer from '@/component/teachingPlan/Footer';
import { TOO_LONG_ELEMENT_HOVER_SCALE } from '@/common/consts';

function Inner() {
  return (
    <div className={styles.container}>
      <Section whileHover={{ scale: TOO_LONG_ELEMENT_HOVER_SCALE }}>
        <h2 className={styles.teachingPlanH2}>📝 {readmeRelativePath}</h2>
        <Card whileHover={{ scale: TOO_LONG_ELEMENT_HOVER_SCALE }}>
          <MarkdownRenderer content={readmeContent} />
        </Card>
      </Section>
      <Footer>
        <p>数学教案库 &copy; {new Date().getFullYear()} - 让数学教学更简单</p>
      </Footer>
    </div>
  );
}

export default function ReadmeDisplay() {
  return (
    <>
      <Helmet>
        <title>开发笔记</title>
      </Helmet>
      <Inner />
    </>
  );
}
