import counterReducer, {decrement, increment} from "./counterReducer";

describe('Testing counter reducer', () => {
    test('increment', () => {
        expect(counterReducer({value: 0}, increment())).toEqual({value: 1})
    })

    test('decrement', () => {
        expect(counterReducer({value: 0}, decrement())).toEqual({value: -1})
    })

    test('increment empty state', () => {
        expect(counterReducer(undefined, increment())).toEqual({value: 1})
    })

    test('increment empty state', () => {
        expect(counterReducer(undefined, increment())).toEqual({value: -1})
    })
})