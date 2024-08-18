import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store/store";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import { ErrorBoundary } from "./components/hoc/ErrorBoundary";
import Layout from "./components/Layout/Layout";
import Content from "./components/content/content";
import Account from "./components/pages/Account";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/account" element={<Account />} />
              <Route path="/content/:id" element={<Content />} />
            </Routes>
          </Layout>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
