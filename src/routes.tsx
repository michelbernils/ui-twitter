import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Default } from "./layout/Default/Default";

import { Status } from "./pages/Status/Status";

import { Timeline } from "./pages/Timeline/Timelines";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />
      },
      {
        path: '/status',
        element: <Status />
      }
    ]
  }
])