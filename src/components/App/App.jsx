import { useState } from "react";
import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import About from "../About/About";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import ModalContext from "../Modal/ModalContext";
import Bookings from "../Bookings/Bookings";
import Film from "../Film/Film";
import VideoModal from "../VideoModal/VideoModal";
import VideoModalContext from "../VideoModal/VideoModalContext";
import Gallery from "../Gallery/Gallery";
import Events from "../../assets/images/events";
import Corporate from "../../assets/images/corporate";
import Weddings from "../../assets/images/weddings";
import Landing from "../Landing/Landing";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Gallery images={Weddings} />,
    },
    {
      path: "/weddings",
      element: <Gallery images={Weddings} />,
    },
    {
      path: "/corporate",
      element: <Gallery images={Corporate} />,
    },
    {
      path: "/events",
      element: <Gallery images={Events} />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "film",
      element: <Film />,
    },
    {
      path: "bookings",
      element: <Bookings />,
    },
  ]);

  const [modalSrc, setModalSrc] = useState(null);
  const [videoModalSrc, setVideoModalSrc] = useState(null);

  return (
    <>
      <VideoModalContext.Provider value={{ videoModalSrc, setVideoModalSrc }}>
        <ModalContext.Provider value={{ modalSrc, setModalSrc }}>
          <VideoModal />
          <Modal />
          <Header />
          <div style={{ marginBottom: 16 }}>
            <RouterProvider router={router} />
          </div>
        </ModalContext.Provider>
      </VideoModalContext.Provider>
    </>
  );
}

export default App;
