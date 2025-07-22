import {
  genJsxPrompt,
  genJsxRelativePath,
} from 'virtual:prompt-display';
import { Helmet } from 'react-helmet-async';
import styles from '@/component/teachingPlan/basic.module.scss';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import Section from '@/component/teachingPlan/Section';
import Card from '@/component/teachingPlan/Card';
import Footer from '@/component/teachingPlan/Footer';
import { LONG_ELEMENT_HOVER_SCALE } from '@/common/consts';

function Inner() {
  return (
    <div className={styles.container}>
      <Section whileHover={{ scale: LONG_ELEMENT_HOVER_SCALE }}>
        <h2 className={styles.teachingPlanH2}>📝 {genJsxRelativePath}</h2>
        <Card whileHover={{ scale: LONG_ELEMENT_HOVER_SCALE }}>
          <MarkdownRenderer content={genJsxPrompt} />
        </Card>
      </Section>
      <Footer>
        <p>数学教案库 &copy; {new Date().getFullYear()} - 让数学教学更简单</p>
      </Footer>
    </div>
  );
}

export default function PromptDisplay() {
  return (
    <>
      <Helmet>
        <title>让 LLM 生成教案的提示词 - JSX</title>
      </Helmet>
      <Inner />
    </>
  );
}
