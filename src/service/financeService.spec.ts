import axios from 'axios';

jest.mock('axios');

import financeService from './financeService'

describe('Service finance', () => {
it('should call finance service and return object empty', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValue({ data: {
      chart: {
        result: {}
      }
    }})

    const data = await financeService()

    expect(data).toEqual({})
    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
  })
})
