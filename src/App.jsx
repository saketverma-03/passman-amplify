import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import {
  Outlet, createBrowserRouter,
} from "react-router-dom";
import AddNewPassword from "./component/AddNewPassword";
import MainBody from "./component/MainBody";
import UpdatePassword from "./component/UpdatePassword";
import "./index.css";

import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import "./index.css";
Amplify.configure(awsExports);

export const router = createBrowserRouter(
[  {
    path: '/',
    element: <>
    <div className="magicpattern corner-left "></div>
    <div className="magicpattern corner-right "></div>
    <div className="magicpattern corner-right bottom "></div>
    <Authenticator>
      <Outlet />
    </Authenticator>
    {/* <div className="image b"></div> */}
    </>,
    children: [
      { 
        path: "",
        element: <MainBody />
      },
      {
        path:"addNewPassword",
        element:<AddNewPassword />
      },{
        path: "updatePassword",
        element: <UpdatePassword />
      }
    ]
  }
]
)
