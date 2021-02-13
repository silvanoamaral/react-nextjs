import apiHello from '../pages/api/hello'

const mockResponse = () => {
  let res = {};
  res = {
    ...res,
    status: jest.fn().mockReturnValue(res),
    json: jest.fn().mockReturnValue(res)
  }
  return res;
}

describe('API Hello', () => {
  it('Should request sucess', async () => {
    const req = jest.fn();
    const res = mockResponse();
    await apiHello(req, res);

    expect(res.statusCode).toEqual(200);
  })
})

