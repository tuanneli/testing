import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../../store/reducers/selectors/getCounterValue/getCounterValue";
import {decrement, increment} from "../../store/reducers/counterReducer";

const Counter = () => {
    const dispatch = useDispatch();

    const value = useSelector(getCounterValue);

    function incrementClick() {
        dispatch(increment())
    }

    function decrementClick() {
        dispatch(decrement())
    }

    return (
        <div>
            <h1 data-testid={'value-title'}>{value}</h1>
            <button data-testid={'increment-btn'} onClick={incrementClick}>increment</button>
            <button data-testid={'decrement-btn'} onClick={decrementClick}>decrement</button>
        </div>
    );
};

export default Counter;