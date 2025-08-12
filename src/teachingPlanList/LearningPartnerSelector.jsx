import { motion } from 'motion/react';
import FilterButton from './FilterButton';
import { addOrDeleteItem } from '@/lib/utils';
import { useLessonFilterStore } from './states/lessonFilterState';
import { FILTER_STYLE, useSettingsStore } from '@/component/layout/states/settingsState';
import MultipleSelector from '@/component/ui/multiselect';
import NoData from '@/component/NoData';
import { LEARNING_PARTNER_MAP } from '@/common/consts';

export default function LearningPartnerSelector({
  learningPartners,
  learningPartnerColors,
  onLearningPartnerFilterChange,
}) {
  const {
    learningPartnerFilter,
  } = useLessonFilterStore();
  const { filterStyle } = useSettingsStore();

  const learningPartnerOptions = learningPartners.map((tag) => ({ label: LEARNING_PARTNER_MAP[tag] || tag, value: tag }));

  const onSingleItemClick = (learningPartner) => {
    const selected = addOrDeleteItem(learningPartnerFilter, learningPartner);
    onLearningPartnerFilterChange(selected);
  };

  const onLearningPartnerSelectorChange = (selectedOptions) => {
    const selectedCategories = selectedOptions.map(opt => opt.value);
    onLearningPartnerFilterChange(selectedCategories);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-4xl"
    >
      <div className="flex flex-wrap items-center gap-3">
        学习伙伴：
        {
          filterStyle === FILTER_STYLE.FLAT ? (
            learningPartners.map((learningPartner, index) => (
              <FilterButton
                defaultColorCls={learningPartnerColors[learningPartner]}
                key={index}
                onClick={() => onSingleItemClick(learningPartner)}
                selected={learningPartnerFilter.includes(learningPartner)}
              >
                {LEARNING_PARTNER_MAP[learningPartner] || learningPartner}
              </FilterButton>
            ))
          ) : (
            <MultipleSelector
              commandProps={{
                label: '请选择',
                className: 'w-50 sm:w-70 md:w-90',
              }}
              value={learningPartnerOptions.filter(opt => learningPartnerFilter.includes(opt.value))}
              onChange={onLearningPartnerSelectorChange}
              defaultOptions={learningPartnerOptions}
              placeholder="请选择"
              hidePlaceholderWhenSelected
              emptyIndicator={<NoData />}
            />
          )
        }
      </div>
    </motion.div>
  );
}
