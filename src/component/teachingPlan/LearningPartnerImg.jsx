import conanThinking from '@/assets/conan-thinking-1.png';
import conanThumbUp from '@/assets/conan-thumb-up-1.png';
import chitandaThinking from '@/assets/chitanda-thinking-1.png';
import chitandaThumbUp from '@/assets/chitanda-thumb-up-1.png';
import menheraThinking from '@/assets/menhera-thinking-1.png';
import menheraThumbUp from '@/assets/menhera-thumb-up-1.png';

const lpMap = {
  conan: {
    thinking: conanThinking,
    thumbUp: conanThumbUp,
  },
  chitanda: {
    thinking: chitandaThinking,
    thumbUp: chitandaThumbUp,
  },
  menhera: {
    thinking: menheraThinking,
    thumbUp: menheraThumbUp,
  },
};

export default function LearningPartnerImg({ lpStyles, name, status }) {
  const lp = name ? lpMap[name] : lpMap.conan;
  const img = status === 'thinking' ? lp.thinking : lp.thumbUp;

  return (
    <img src={img} className={lpStyles.lpImg} />
  );
}
