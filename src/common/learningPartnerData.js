import conanThinking from '@/assets/conan-thinking-1.png';
import conanThumbUp from '@/assets/conan-thumb-up-1.png';
import chitandaThinking from '@/assets/chitanda-thinking-1.png';
import chitandaThumbUp from '@/assets/chitanda-thumb-up-1.png';
import menheraThinking from '@/assets/menhera-thinking-1.png';
import menheraThumbUp from '@/assets/menhera-thumb-up-1.png';

export const lpMap = {
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

export const learningPartnerKeys = Object.keys(lpMap);
export const lpCount = learningPartnerKeys.length;

export const LEARNING_PARTNER_TEXT_COLOR = {
  conan: 'text-[var(--lp-text-color-male)]',
  chitanda: 'text-[var(--lp-text-color-female)]',
  menhera: 'text-[var(--lp-text-color-female)]',
};

export const LEARNING_PARTNER_MAP = {
  conan: '柯南',
  chitanda: '千反田爱瑠',
  menhera: 'menhera酱',
};
