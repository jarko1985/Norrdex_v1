import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Services from "../components/Services";
import FeaturedTours from "../components/FeaturedTours";
import PartnerSlider from "../components/PartnerSlider";
import ContactForm from "../components/ContactForm";
import HomeCardsContainer from "../components/Cards/HomeCardsContainer.jsx";
import HomeSlider from "../components/HomeSlider";

import SubscribeModal from "../components/Modals/SubscribeModal";
import Axios from "axios";

const Home = () => {
  //Modal Settings
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const onSubscribe = () => {
    toast.success("successfully subscribed!!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
    Axios.post(
      "https://yahoo.us7.list-manage.com/subscribe/post?u=6961996b9e079bf70f92987b4&amp;id=e04f35e54d",
      {
        mode: "no-cors",
      }
    ).then((res) => {
      console.log("success");
    });
    setShow(false);
  };

  //Modal Settings

  return (
    <React.Fragment>
      {/* <SubscribeModal
        handleClose={handleClose}
        show={show}
        onSubscribe={onSubscribe}
      /> */}

      <ToastContainer />
      <HomeSlider />
      <HomeCardsContainer />
      <Services />
      <FeaturedTours />
      <PartnerSlider />
      <ContactForm />
    </React.Fragment>
  );
};
export default Home;
