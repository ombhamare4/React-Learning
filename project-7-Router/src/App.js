import { Route, Switch , Redirect } from "react-router-dom";
import Welcome from './Pages/Welcome';
import Products from './Pages/Products';
import Header from "./components/Header/Header";
import ProductDetails from "./Pages/ProductDetails"
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/welcome'/>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path='/products/:productId'>
          <ProductDetails />
        </Route>
        

      </Switch>

      {/* <Routes> */}

      {/* <Route path="/products" element={<Products />} /> */}
      {/* </Routes> */}

    </div>
  );
}

export default App;
