import MockDate from 'mockdate';

export function setupMockDate(wannaMock) {
  if (!wannaMock) return;
  MockDate.set('2025-09-02 00:00:05');
}
