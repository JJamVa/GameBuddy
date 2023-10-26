import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import tokenValidAPI from "../API/tokenValidAPI";
import Header from "../Components/Commons/Header/Header";
import Footer from "../Components/Commons/Footer";
// import SwitchMode from "../Components/Main/SwitchMode";
import PostList from "../Components/Main/PostList";
import PostDetailModal from "../Components/Main/PostDeatilModal/PostDetailModal";
import Loading from "../Components/Commons/Loading";
import { useRecoilValue } from "recoil";
import { isTouchFeed } from "../Store/Store";

function MainFeedPage() {
  const [tokenValid, setTokenValid] = useState(true);
  const [isLoading, setIsLoading] = useState(true); //로딩 상태 관리
  const isVisible = useRecoilValue(isTouchFeed);

  useEffect(() => {
    setIsLoading(true); // API 호출 시작 전에 로딩 상태를 true로 설정
    tokenValidAPI(setTokenValid).finally(() => {
      setIsLoading(false); // API 호출이 끝나면 로딩 상태를 false로 설정
    });
  }, []);

  if (isLoading) {
    return <Loading />; // 로딩 중일 때 <Loading/> 렌더링
  }

  return tokenValid ? (
    <>
      <Header type="main" />
      <PostList />
      <Footer />
      {isVisible && <PostDetailModal />}
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default MainFeedPage;
