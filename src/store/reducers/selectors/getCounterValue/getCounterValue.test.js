import {getCounterValue} from "./getCounterValue";

describe('getCounterValue', () => {
    test('work with empty state', () => {
        expect(getCounterValue({})).toBe(0);
    })

    test('work with state', () => {
        expect(getCounterValue({value: 1000})).toBe(0);
    })
})