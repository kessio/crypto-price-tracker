import setupStore from '../redux/configStore';
import renderWithProviders from '../test-utils';
import DisplayCoins from '../components/DisplayCoins';

const store = setupStore({});

describe('Coins details redux initial state and status', () => {
  it('should initially set coin details to an empty array', () => {
    const state = store.getState().coinDetails;
    expect(state.lists).toEqual([]);
  });
  it('should initially set status to null', () => {
    const state = store.getState().coinDetails;
    expect(state.status).toEqual(null);
  });
});

describe('fetches data from the api', () => {
  test('fetches & receives data after clicking the details button', async () => {
    renderWithProviders(<DisplayCoins />);
  });
});
