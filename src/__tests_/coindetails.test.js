import store from '../redux/configStore'

describe('Coins details redux initial state and status', () => {
    it('should initially set coin details to an empty array', () => {
        const state = store.getState().coinDetails
        expect(state.lists).toEqual([])
    })
    it('should initially set status to null', () => {
        const state = store.getState().coinDetails
        expect(state.status).toEqual(null)
    })
})