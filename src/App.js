import { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import routes from './router';

function App() {
  const NotProtected = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        return (document.title = rest.title) && <Component {...props} />;
      }}
    />
  );

  return (
    <Suspense
      fallback={
        <Loading custom={{ position: 'relative', top: '50%', left: '50%' }} />
      }
    >
      <Router>
        <Header />
        <Switch>
          {routes.map((route, i) => {
            const component = lazy(() => import(`${route.component}`));
            return (
              <NotProtected
                key={'routes' + i}
                exact
                title={route.title}
                path={route.path}
                component={component}
              />
            );
          })}
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
