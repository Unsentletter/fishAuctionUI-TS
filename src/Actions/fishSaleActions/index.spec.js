import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import * as types from '../types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');
describe('FishSaleAction', () => {
  it('should return the correct object when called', () => {
    const expectedActions = [
      {
        type: types.FOR_SALE,
        payload: [
          {
            created_at: '2019-08-17T11:27:25.000Z',
            description: null,
            id: 1,
            location: null,
            name: 'Fish',
            price: '15',
            species: null,
            user_id: 65,
          },
        ],
        type: 'for_sale',
      },
    ];
    const expectedValue = [
      {
        id: 1,
        name: 'Fish',
        price: '15',
        user_id: 65,
        description: null,
        location: null,
        species: null,
        created_at: '2019-08-17T11:27:25.000Z',
      },
    ];
    const response = { data: expectedValue };
    axios.get.mockResolvedValue(response);
    const store = mockStore({ FOR_SALE: [] });

    return store.dispatch(actions.getFishForSale()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  // TODO - Write a test for failure when I am handling it correctly
});
