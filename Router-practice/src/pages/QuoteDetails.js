import { useParams, Route, Link , useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
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

const QuoteDetails = () => {
    const param = useParams();

    const match = useRouteMatch();

    console.log(match);

    const quote = DUMMY_QUOTES.find(quote => quote.id === param.quotesId);

    if (!quote) {
        return <p>No Quote found.</p>
    }

    return (
        <div>
            {/* <h1>Quotes Details : {param.quotesId}</h1> */}
            <HighlightedQuote text={quote.text} author={quote.author} />
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