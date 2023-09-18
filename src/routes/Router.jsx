import Main from './../modules/main/pages/Main';
import App from './../App' ;
import { AboutRoutes } from '../modules/AboutUs/routes/Aboutroutes';
import { NewsRoutes } from '../modules/News/routes/NewsRoutes';

 const routes = [
    {
    path : "/vite-routes-task-4/" ,
    element : <App />,
    children: [
        {
            path : "/vite-routes-task-4/" ,
            element : <Main />,
        },
        ...AboutRoutes,
        ...NewsRoutes,
        
    ]
    }
]

export default routes



