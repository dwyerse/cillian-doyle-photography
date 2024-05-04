import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../Landing";
import About from "../About/About";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import ModalContext from "../Modal/ModalContext";
import Bookings from "../Bookings/Bookings";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "bookings",
      element: <Bookings />,
    },
  ]);

  const [modalSrc, setModalSrc] = useState(null);

  return (
    <>
      <ModalContext.Provider value={{ modalSrc, setModalSrc }}>
        <Modal />
        <Header />
        <RouterProvider router={router} />
      </ModalContext.Provider>
    </>
  );
}

export default App;
