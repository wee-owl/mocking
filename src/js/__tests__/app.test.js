import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('check getLevel', () => {
  fetchData.mockReturnValue(JSON.stringify({}));

  const response = getLevel(1);
  expect(response)
    .toEqual(
      response.status === 'ok'
        ? `Ваш текущий уровень: ${response.level}`
        : 'Информация об уровне временно недоступна',
    );
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
