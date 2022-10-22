// import { Fragment } from "react";
import { Fragment } from "react";
import {  Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts";
import { publicRoutes } from "./routes";

function App() {
  return (
    // <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = DefaultLayout
          const Page = route.component
          if (route.layout) {
            Layout = route.layout
          } else if (route.layout === null) {
            Layout = Fragment
          }
          
          return (
          <Route 
          path={route.path} 
          key={index}
          element={
            <Layout>
              <Page />
            </Layout>
          }
          />
          );
        })}     
      </Routes>
    // </Router>
      
  );
}

export default App;
