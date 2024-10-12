import Layout from "../components/layout";
import Home from "../pages/home/home";
import About from "../pages/about/about";

export const ROUTE = [
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>,
            }
        ]
    }
]