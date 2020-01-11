import { lazy } from 'react';


const Dashboard = lazy(() => import('../components/dashboard'));

export const routes = [
    {
        path: '/',
        component: Dashboard,
        isNotRequired:true
        
    },
  

]

