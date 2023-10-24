import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import tokenValidAPI from "../API/tokenValidAPI";
import Header from "../Components/Commons/Header/Header";
import Footer from "../Components/Commons/Footer";
// import SwitchMode from "../Components/Main/SwitchMode";
import PostList from "../Components/Main/PostList";
import PostDetailModal from "../Components/Main/PostDeatilModal/PostDetailModal";

function MainFeedPage() {
  const [tokenValid, setTokenValid] = useState(true);

  tokenValidAPI(setTokenValid);

  return tokenValid ? (
    <>
      <Header type="main" />
      <PostList />
      <Footer />
      <PostDetailModal />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default MainFeedPage;
