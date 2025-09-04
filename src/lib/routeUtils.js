import { lessonUrls } from '@/common/lessonRoutes';

export function isLessonUrl(url) {
  return lessonUrls.includes(url);
}

export function isLessonOrBlogUrl(url) {
  return isLessonUrl(url) || url.startsWith('/blog/');
}
