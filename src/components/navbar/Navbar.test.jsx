import {render, screen} from "@testing-library/react";
import {renderWithRouter} from "../../tests/renderWithRouter";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe('Navbar testing', () => {
    test('Test about link', () => {
        render(renderWithRouter(<Navbar/>));
        const aboutLink = screen.getByTestId('about-link');
        const homeLink = screen.getByTestId('home-link');
        const usersLink = screen.getByTestId('users-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page'));
    })

    test('Test home link', () => {
        render(renderWithRouter(<Navbar/>));
        const aboutLink = screen.getByTestId('about-link');
        const homeLink = screen.getByTestId('home-link');
        const usersLink = screen.getByTestId('users-link');
        userEvent.click(homeLink);
        expect(screen.getByTestId('home-page'));
    })

    test('Test users link', () => {
        render(renderWithRouter(<Navbar/>));
        const aboutLink = screen.getByTestId('about-link');
        const homeLink = screen.getByTestId('home-link');
        const usersLink = screen.getByTestId('users-link');
        userEvent.click(usersLink);
        expect(screen.getByTestId('users-page'));
    })

});