import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import defaultComponent from './components/defaultComponent/defaultComponent'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const  Layout = route.isShowHeader ? defaultComponent : Fragment;
            return (
              <Route 
                key={route.path}
                path={route.path} 
                element={
                  <Layout>
                    <Page />
                  </Layout>
                } 
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
