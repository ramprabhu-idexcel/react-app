import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoMatch from './NoMatch';
import Layout from './layouts/Layout';
import NavigationBar from './layouts/NavigationBar';
import Jumbotron from './layouts/Jumbotron';
import ArticleList from './articles/ArticleList';
import ArticleAdd from './articles/ArticleAdd';
import ArticleInfo from './articles/ArticleInfo';
import ArticleEdit from './articles/ArticleEdit';
import ProductList from './products/ProductList';
import {HashRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return(
         <React.Fragment>
          <Router>
            <NavigationBar></NavigationBar>
          </Router>
          <Jumbotron />
          <Layout>
           <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/articles" component={ArticleList} />
              <Route exact path="/articles/new" component={ArticleAdd} />
              <Route exact path="/articles/:id" component={ArticleInfo} />
              <Route exact path="/articles/:id/edit" component={ArticleEdit} />
              <Route exact path="/products" component={ProductList} />
              <Route component={NoMatch} />
            </Switch>
           </Router>
          </Layout> 
         </React.Fragment>   
    )
  }
}

export default App;
