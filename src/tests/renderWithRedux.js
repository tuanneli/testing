import {MemoryRouter} from "react-router-dom";
import AppRouter from "../components/AppRouter";
import {Provider} from "react-redux";
import {createReduxStore} from "../store/store";

export const renderWithRedux = (component, initialState) => {
    return (
        <Provider store={createReduxStore(initialState)}>
            {component}
        </Provider>
    )

}