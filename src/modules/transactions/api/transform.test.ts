import { transformGetTransactions } from './transform';

const mockTransactions = [
  {
    user_id: 'b4521412-2eeb-43f3-a50d-be976b23189d',
    timestamp: '2020-05-29T16:59:39Z',
    currency: 'GBP',
    amount: '-886.69',
  },
  {
    user_id: 'b4521412-2eeb-43f3-a50d-be976b23189d',
    timestamp: '2019-12-05T18:28:13Z',
    currency: 'EUR',
    amount: '-853.62',
  },
  {
    user_id: 'b4521412-2eeb-43f3-a50d-be976b23189d',
    timestamp: '2019-12-05T18:28:13Z',
    currency: 'USD',
    amount: '-853.62',
  },
];
describe('transform transaction data', () => {
  it('should return an array of user balances calcualted from the transactions', () => {
    const computeTransform = transformGetTransactions(mockTransactions);
    expect(computeTransform).toStrictEqual([
      {
        userId: 'b4521412-2eeb-43f3-a50d-be976b23189d',
        lastTransactionDate: '2020-05-29T16:59:39Z',
        GBP: '-886.69',
        EUR: '-853.62',
        USD: '-853.62',
      },
    ]);
  });
});
