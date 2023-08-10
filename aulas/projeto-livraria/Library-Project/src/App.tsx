import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Index from "./pages/Index/Index";

const router: any = createBrowserRouter([
	{
		path: '/',
		element: <Root/>,
		children: [
			{
				index: true,
				element: <Index/>
			}
		]
	},
]);

const App = () => {
	return <RouterProvider router={router}/>;
};

export default App;
