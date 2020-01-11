import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import RouteWithLayout  from './RouteWithLayout';
import Layout from '../components/layout';
import { routes } from './route';


const RouterApp = (props) => {
    return (
        <div className="App">
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {
                            routes.map((v, k) => {
                                if (v.isNotRequired) {
                                    return (
                                        <Route key={k} path='/' component={v.component} exact={true} />
                                    )
                                } else {
                                    return (
                                        <ProtectedRoute key={k} exact path={v.path} component={v.component} />
                                    )
                                }
                            }) 
                        }
                    </Switch>
                </Suspense>
            </Router>
        </div>
    )
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            isLogin() ?
                <Layout location={props.location} history={props.history}>
                    <Component  {...props} />
                </Layout>
                :
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )} />
    )
};

const isLogin = () => {
   return true
}


export default RouterApp; 