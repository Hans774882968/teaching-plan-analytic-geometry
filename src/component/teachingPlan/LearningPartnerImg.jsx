import conanThinking from '@/assets/conan-thinking-1.png';
import conanThumbUp from '@/assets/conan-thumb-up-1.png';
import chitandaThinking from '@/assets/chitanda-thinking-1.png';
import chitandaThumbUp from '@/assets/chitanda-thumb-up-1.png';
import menheraThinking from '@/assets/menhera-thinking-1.png';
import menheraThumbUp from '@/assets/menhera-thumb-up-1.png';
import { Img } from 'react-image';
import TpmAvatarFallback from '../TpmAvatarFallback';

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
  const imgAlt = name && status ? `${name}-${status}` : 'conan-thumbUp';

  return (
    <Img
      src={img}
      className={lpStyles.lpImg}
      alt={imgAlt}
      unloader={(
        <TpmAvatarFallback
          className="w-20 md:w-30 lg:w-45 h-20 md:h-30 lg:h-45 hover:scale-100"
          iconClassName="text-3xl md:text-5xl lg:text-7xl"
        />
      )}
    />
  );
}
