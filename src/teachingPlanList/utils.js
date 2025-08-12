import { filterBySelections, filterBySelectionsSingle, isSubSequence } from '@/lib/utils';

export function getFilteredLessons(
  lessonPlans,
  categoryFilter,
  difficultyFilter,
  learningPartnerFilter,
  titleFilter,
  mode
) {
  const filteredByCategoryLessons = filterBySelections(lessonPlans, 'category', categoryFilter, mode);
  const filteredByDifficultyLessons = difficultyFilter === 'all' ?
    filteredByCategoryLessons
    : filteredByCategoryLessons.filter((lesson) => lesson.difficulty === difficultyFilter);
  const filteredByLearningPartnerLessons = filterBySelectionsSingle(filteredByDifficultyLessons, 'lpName', learningPartnerFilter, mode);
  
  let filteredLessons = filteredByLearningPartnerLessons;

  if (titleFilter && titleFilter.trim()) {
    const searchTerm = titleFilter.trim().toLowerCase();
    filteredLessons = filteredLessons.filter(lesson => {
      const lessonTitleLower = lesson.title.toLowerCase();
      return isSubSequence(lessonTitleLower, searchTerm);
    });
  }

  return filteredLessons;
}
