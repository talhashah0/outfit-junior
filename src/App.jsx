import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

import "./App.css";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "80px" }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />

            <Route
              path="/shop"
              element={
                <PageWrapper>
                  <Shop />
                </PageWrapper>
              }
            />

            <Route
              path="/product/:id"
              element={
                <PageWrapper>
                  <Product />
                </PageWrapper>
              }
            />

            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}
