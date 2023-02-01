import Counter from "./Counter";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import {createReduxStore} from "../../store/store";
import {renderWithRedux} from "../../tests/renderWithRedux";
import {renderWithTestApp} from "../../tests/renderWithTestApp";

describe('Counter testing', () => {
    test("Test router", async () => {
        const {getByTestId} = render(renderWithTestApp(null, {
            initialRouter: '/',
            initialState: {
                counter: {value: 10}
            }
        }));
        const incrementBtn = getByTestId('increment-btn');
        const decrementBtn = getByTestId('decrement-btn');
        expect(getByTestId('value-title')).toHaveTextContent('10');
        userEvent.click(incrementBtn);
        expect(getByTestId('value-title')).toHaveTextContent('11');
    })
})