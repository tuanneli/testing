import React from 'react';
import Counter from "../components/counter/Counter";

const HomePage = () => {
    return (
        <div data-testid={'home-page'}>
            HOME PAGE
            <Counter/>
        </div>
    );
};

export default HomePage;