import App from "@/App";
import AddBook from "@/pages/addBook/AddBook";
import AllBooks from "@/pages/allBooks/AllBooks";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index:true, Component:Home},
      { path: "/allBooks", Component: AllBooks },
      { path: "/addBook", Component: AddBook },
      { path: "/borrowSummary", Component: AddBook },
    ],
  },
]);
export default router;
