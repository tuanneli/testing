import App from "./App";
import {findAllByTestId, getAllByTestId, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Users from "./components/users/Users";
import UserDetailsPage from "./pages/UserDetailsPage";

describe('Test app', () => {
    test('Router test', () => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>);
        const homeLink = screen.getByTestId('home-link');
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        userEvent.click(homeLink);
        expect(screen.getByTestId('home-page')).toBeInTheDocument();
    })

    test('Error test', () => {
        render(
            <MemoryRouter initialEntries={['/not-existing-page']}>
                <App/>
            </MemoryRouter>);
        expect(screen.getByTestId('error-page')).toBeInTheDocument();
    })
})