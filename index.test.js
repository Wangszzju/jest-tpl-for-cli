import { sum } from './index'

test('add 1 + 2 to equal', () => {
  expect(sum(1, 2)).toBe(3)
})