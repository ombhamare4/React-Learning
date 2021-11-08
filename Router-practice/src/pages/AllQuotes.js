import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Itachi Uchiha',
        text: '“People’s lives don’t end when they die, it ends when they lose faith.”'
    },
    {
        id: 'q2',
        author: 'Monkey D. Luffy ',
        text: '“If you don’t take risks, you can’t create a future!”'
    },
    {
        id: 'q3',
        author: 'Naruto Uzumaki',
        text: '“If you don’t like your destiny, don’t accept it.”'
    },
    {
        id: 'q4',
        author: 'Nagato',
        text: '“If you don’t share someone’s pain, you can never understand them.”'
    },
    {
        id: 'q5',
        author: 'Saitama',
        text: '“I’ll leave tomorrow’s problems to tomorrow’s me.”'
    },
]

const AllQuotes = () => {
    return (
        <div>
            <QuoteList quotes={DUMMY_QUOTES}/>
        </div>
    )
};

export default AllQuotes;