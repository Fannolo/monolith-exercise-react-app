import { AxiosRequestConfig } from 'axios';
import api from 'src/api';
import {
  TRANSACTIONSLARGE,
  TRANSACTIONSMEDIUM,
  TRANSACTIONSSMALL,
} from './constants';
import { transformGetTransactions } from './transform';

const transactionsAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: (): AxiosRequestConfig => ({
        url: TRANSACTIONSSMALL,
        method: 'get',
      }),
      transformResponse: transformGetTransactions,
    }),
    getMediumTransactions: builder.query({
      query: (): AxiosRequestConfig => ({
        url: TRANSACTIONSMEDIUM,
        method: 'get',
      }),
      transformResponse: transformGetTransactions,
    }),
    getLargeTransactions: builder.query({
      query: (): AxiosRequestConfig => ({
        url: TRANSACTIONSLARGE,
        method: 'get',
      }),
      transformResponse: transformGetTransactions,
    }),
  }),
  overrideExisting: true,
});

export const {
  useLazyGetTransactionsQuery,
  useLazyGetMediumTransactionsQuery,
  useLazyGetLargeTransactionsQuery,
} = transactionsAPI;
