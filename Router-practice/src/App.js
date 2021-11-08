import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import QuoteDetails from './pages/QuoteDetails';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to='/' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quotesId'>
            <QuoteDetails />
          </Route>
          <Route path='/new-quotes'>
            <NewQuotes />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
