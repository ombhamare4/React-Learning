import React, { useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetails = () => {
    const params = useParams();

    const match = useRouteMatch();
    //Geting Quote ID 
    const { quotesId } = params;//Object Destructuring

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);


    useEffect(() => {
        sendRequest(quotesId);
    }, [sendRequest, quotesId]);

    // const quote = DUMMY_QUOTES.find(quote => quote.id === param.quotesId);

    // if (!loadingQuotes ) {
    //     return <NoQuotesFound/>
    // }

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        )
    };

    if (error) {
        return (
            <p className="centered focused">{error}</p>
        )
    }

    console.log(loadedQuote);
    if (!loadedQuote.text) {
        return <p>No quote found!</p>;
    }

    return (
        <div>
            {/* <h1>Quotes Details : {param.quotesId}</h1> */}
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={`${match.path}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>load Comment</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </div>
    )
};

export default QuoteDetails;