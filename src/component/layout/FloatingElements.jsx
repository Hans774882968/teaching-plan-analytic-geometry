import { motion } from 'motion/react';
import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { shuffle } from 'lodash-es';
import {
  FaDraftingCompass,
  FaMusic,
  FaPlane,
  FaLightbulb,
  FaRocket,
  FaPuzzlePiece,
  FaCode,
  FaFlask,
  FaAtom,
  FaBolt,
  FaStar,
} from 'react-icons/fa';
import { FaCircleDollarToSlot } from 'react-icons/fa6';
import {
  GiLightBulb,
  GiPuzzle,
  GiCompass,
} from 'react-icons/gi';

const ICON_POOL = [
  { icon: FaMusic },
  { icon: FaPlane },
  { icon: FaLightbulb },
  { icon: GiLightBulb },
  { icon: FaRocket },
  { icon: FaStar },
  { icon: FaPuzzlePiece },
  { icon: GiPuzzle },
  { icon: FaCode },
  { icon: FaDraftingCompass },
  { icon: GiCompass },
  { icon: FaFlask },
  { icon: FaAtom },
  { icon: FaBolt },
  { icon: FaCircleDollarToSlot },
];

const floatingEleAttributes = [
  { div1ClsName: 'fixed top-1/5 left-8', div2ClsName: 'text-purple-400' },
  { div1ClsName: 'fixed top-2/5 left-10', div2ClsName: 'text-blue-500' },
  { div1ClsName: 'fixed top-7/10 left-12', div2ClsName: 'text-purple-400' },
  { div1ClsName: 'fixed top-1/3 right-12', div2ClsName: 'text-blue-500' },
  { div1ClsName: 'fixed top-1/2 right-10', div2ClsName: 'text-purple-400' },
  { div1ClsName: 'fixed top-4/5 right-14', div2ClsName: 'text-blue-500' },
];

export default function FloatingElements() {
  const randomIcons = useMemo(() => {
    return shuffle(ICON_POOL).slice(0, floatingEleAttributes.length);
  }, []);

  return (
    <>
      {randomIcons.map((item, index) => {
        const fEleAttr = floatingEleAttributes[index];
        const IconComponent = item.icon;

        return (
          <motion.div
            key={index}
            className={cn(
              'floating',
              'hidden xl:block',
              fEleAttr.div1ClsName
            )}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <div className={cn('flex items-center justify-center', fEleAttr.div2ClsName)}>
              <IconComponent className="text-2xl" />
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
