import Title from './Title';
import Questions from './Questions';
import BottomBar from './BottomBar';
import React from 'react';

export default function Body() {
    return (
        <section className="main">
            <>
                <Title />
                <Questions />
                <BottomBar />
            </>
        </section>
    );
}