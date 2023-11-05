import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px 12px 12px;
  background-color: #25282d;
  border-bottom: 1px solid #5c5c5c;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  z-index: 1000;

  box-sizing: border-box;
`;

export const StyledIconButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 5px;
`;

export const GameBuddyText = styled.div`
  display: none; // 기본적으로는 숨기고

  @media screen and (min-width: 768px) {
    display: flex; // 768px 이상에서는 flex로 설정
    align-items: center; // 세로 중앙 정렬
    justify-content: center; // 가로 중앙 정렬
    cursor: pointer;

    font-family: var(--Black-ops);
    font-size: 22px;
    color: var(--color-purple);
    margin-left: 20px;
  }
`;

export const GoBackIconWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: none; // 768px 이상에서는 숨김
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  background-color: #dbdbdb;
  border: 1px solid #dbdbdb;
  border-radius: 32px;
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    margin-left: 150px;
    margin-right: 40px;
  }
`;
