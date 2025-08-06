import { motion } from 'motion/react';
import FilterButton from './FilterButton';
import { addOrDeleteItem } from '@/lib/utils';
import { useLessonFilterStore } from './states/lessonFilterState';
import { FILTER_STYLE, useSettingsStore } from '@/component/layout/states/settingsState';
import MultipleSelector from '@/component/ui/multiselect';
import NoData from '@/component/NoData';

// 按类别过滤
export default function CategorySelector({
  categories,
  categoryColors,
  onCategoryFilterChange,
}) {
  const {
    categoryFilter,
  } = useLessonFilterStore();
  const { filterStyle } = useSettingsStore();

  const categoryOptions = categories.map((tag) => ({ label: tag, value: tag }));

  const onSingleItemClick = (category) => {
    const selected = addOrDeleteItem(categoryFilter, category);
    onCategoryFilterChange(selected);
  };

  const onCategorySelectorChange = (selectedOptions) => {
    const selectedCategories = selectedOptions.map(opt => opt.value);
    onCategoryFilterChange(selectedCategories);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-4xl"
    >
      <div className="flex flex-wrap items-center gap-3">
        选择类别：
        {
          filterStyle === FILTER_STYLE.FLAT ? (
            categories.map((category, index) => (
              <FilterButton
                defaultColorCls={categoryColors[category]}
                key={index}
                onClick={() => onSingleItemClick(category)}
                selected={categoryFilter.includes(category)}
              >
                {category}
              </FilterButton>
            ))
          ) : (
            <MultipleSelector
              commandProps={{
                label: '请选择',
                className: 'w-50 sm:w-70 md:w-90',
              }}
              value={categoryOptions.filter(opt => categoryFilter.includes(opt.value))}
              onChange={onCategorySelectorChange}
              defaultOptions={categoryOptions}
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
