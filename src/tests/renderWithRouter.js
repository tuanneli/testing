import {MemoryRouter} from "react-router-dom";
import AppRouter from "../components/AppRouter";

export const renderWithRouter = (component, initialRouter = '/') => {
    return (
        <MemoryRouter initialEntries={[initialRouter]}>
            <AppRouter/>
            {component}
        </MemoryRouter>
    )

}