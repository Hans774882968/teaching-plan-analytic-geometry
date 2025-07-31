import { filterBySelections } from '@/lib/utils';

export function getFilteredLessons(lessonPlans, categoryFilter, difficultyFilter, mode) {
  const filteredByCategoryLessons = filterBySelections(lessonPlans, 'category', categoryFilter, mode);
  const filteredByDifficultyLessons = difficultyFilter === 'all' ?
    filteredByCategoryLessons
    : filteredByCategoryLessons.filter((lesson) => lesson.difficulty === difficultyFilter);
  return filteredByDifficultyLessons;
}
