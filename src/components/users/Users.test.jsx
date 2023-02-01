import Users from "./Users";
import {render, screen} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import axios from "axios";
import UserDetailsPage from "../../pages/UserDetailsPage";
import userEvent from "@testing-library/user-event";
import AppRouter from "../AppRouter";
import {renderWithRouter} from "../../tests/renderWithRouter";

jest.mock('axios');

describe(("UsersForTest tests"), () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                },
            ]
        }
    })
    test('work with axios', async () => {
        axios.get.mockReturnValue(response);
        render(renderWithRouter());
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        const user = users[0];
        expect(user).toBeInTheDocument();
        userEvent.click(user);
        expect(await screen.queryByTestId('user-detail-page'))
        expect(axios.get).toHaveBeenCalledTimes(1);
    });
    afterEach(() => {
        jest.clearAllMocks();
    })
})