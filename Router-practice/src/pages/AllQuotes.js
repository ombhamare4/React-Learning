import React , {useEffect} from 'react';
import QuoteList from '../components/quotes/QuoteList';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import {getAllQuotes} from '../lib/api';
import '../index.css';

// const DUMMY_QUOTES = [
//     {
//         id: 'q1',
//         author: 'Itachi Uchiha',
//         text: '“People’s lives don’t end when they die, it ends when they lose faith.”'
//     },
//     {
//         id: 'q2',
//         author: 'Monkey D. Luffy ',
//         text: '“If you don’t take risks, you can’t create a future!”'
//     },
//     {
//         id: 'q3',
//         author: 'Naruto Uzumaki',
//         text: '“If you don’t like your destiny, don’t accept it.”'
//     },
//     {
//         id: 'q4',
//         author: 'Nagato',
//         text: '“If you don’t share someone’s pain, you can never understand them.”'
//     },
//     {
//         id: 'q5',
//         author: 'Saitama',
//         text: '“I’ll leave tomorrow’s problems to tomorrow’s me.”'
//     },
// ]

const AllQuotes = () => {
    const {sendRequest,status, data:loadedQuotes,error} = useHttp(getAllQuotes, true);
    useEffect(()=>{
        sendRequest();
    },[sendRequest]);
    if(status==='pending'){
        return(
            <div className="centered">
                <LoadingSpinner />
            </div>
        )
    };
    if(error){
        return(
            <p className="centered focused">{error}</p>
        )
    }
    if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
        return(
            <NoQuotesFound/>
        )
    }
    // console.log(loadedQuotes);
    return (
        <div>
            <QuoteList quotes={loadedQuotes}/>
        </div>
    )
};

export default AllQuotes;