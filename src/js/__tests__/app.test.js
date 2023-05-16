import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('check getLevel(1)', () => {
  const response = { status: 'ok', level: 1 };
  fetchData.mockReturnValue(response);
  const result = getLevel(1);
  expect(result).toEqual('Ваш текущий уровень: 1');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('check getLevel(2)', () => {
  const response = { status: null };
  fetchData.mockReturnValue(response);
  const result = getLevel(2);
  expect(result).toEqual('Информация об уровне временно недоступна');
  expect(fetchData).toBeCalledWith('https://server/user/2');
});
