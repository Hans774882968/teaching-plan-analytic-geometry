import { motion } from 'motion/react';
import FilterButton from './FilterButton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/component/ui/select';
import { useLessonFilterStore } from './states/lessonFilterState';
import { FILTER_STYLE, useSettingsStore } from '@/component/layout/states/settingsState';

// 按难度过滤
export default function DifficultySelector({
  difficulties,
  difficultyColors,
  onDifficultyFilterChange,
}) {
  const {
    difficultyFilter,
  } = useLessonFilterStore();
  const { filterStyle } = useSettingsStore();
  const difficultyOptions = [{ label: '全部', value: 'all' }, ...difficulties.map((d) => {
    return {
      label: d,
      value: d,
    };
  })];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="max-w-4xl"
    >
      <div className="flex flex-wrap items-center gap-3">
        选择难度：
        {
          filterStyle === FILTER_STYLE.FLAT ? (
            <>
              <FilterButton
                onClick={() => onDifficultyFilterChange('all')}
                selected={difficultyFilter === 'all'}
              >
                所有
              </FilterButton>
              {
                difficulties.map((difficulty, index) => (
                  <FilterButton
                    defaultColorCls={difficultyColors[difficulty]}
                    key={index}
                    onClick={() => onDifficultyFilterChange(difficulty)}
                    selected={difficultyFilter === difficulty}
                  >
                    {difficulty}
                  </FilterButton>
                ))
              }
            </>
          ) : (
            <Select onValueChange={onDifficultyFilterChange} defaultValue="all">
              <SelectTrigger className="w-50 sm:w-70 md:w-90">
                <SelectValue placeholder="请选择" />
              </SelectTrigger>
              <SelectContent>
                {
                  difficultyOptions.map(({ label, value }) => {
                    return (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    );
                  })
                }
              </SelectContent>
            </Select>
          )
        }
      </div>
    </motion.div>
  );
}
