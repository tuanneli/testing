import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('Test App', () => {
    test('renders learn react link', () => {
        render(<App/>);
        const helloElement = screen.getByText(/Hello there/i);
        const btn = screen.getByRole('button');
        const input = screen.getByPlaceholderText(/input value/i)
        expect(helloElement).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(input).toMatchSnapshot();
    });

    test('Async', async () => {
        render(<App/>);
        screen.debug();
        const dataElement = await screen.findByText(/data/i);
        expect(dataElement).toBeInTheDocument();
        expect(dataElement).toHaveStyle({color: 'red'});
        screen.debug();
    });

    test('Event click', async () => {
        render(<App/>);
        const toggleBtn = screen.getByTestId('toggle-btn');
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
        fireEvent.click(toggleBtn);
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
        fireEvent.click(toggleBtn);
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    });

    test('Input Fire Event', async () => {
        render(<App/>);
        const input = screen.getByTestId('input-elem');
        expect(screen.queryByTestId('value-elem')).toContainHTML('');
        fireEvent.input(input, {
            target: {value: '123123'}
        });
        expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
    });

    test('Input User Event', async () => {
        render(<App/>);
        const input = screen.getByTestId('input-elem');
        expect(screen.queryByTestId('value-elem')).toContainHTML('');
        userEvent.type(input, '123123')
        expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
    });
})

