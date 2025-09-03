import MockDate from 'mockdate';

export function setupMockDate(wannaMock = false) {
  if (!wannaMock) return;
  MockDate.set('2025-09-04 00:00:05');
}
