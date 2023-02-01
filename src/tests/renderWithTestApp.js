import {MemoryRouter} from "react-router-dom";
import AppRouter from "../components/AppRouter";
import {Provider} from "react-redux";
import {createReduxStore} from "../store/store";

export const renderWithTestApp = (component, options) => {
    return (
        <Provider store={createReduxStore(options.initialState)}>
            <MemoryRouter initialEntries={[options.initialRouter]}>
                <AppRouter/>
                {component}
            </MemoryRouter>
            {component}
        </Provider>
    )

}