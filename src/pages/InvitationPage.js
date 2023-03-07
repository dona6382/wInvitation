import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll; /* 스크롤바 생성 */
`;

const TopSection = styled.div`
  height: 60%;
  background-image: url('/images/logo512.png');
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const TextSection = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ButtonSection = styled.div`
  height: 10%;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function InvitationPage() {
    return (
        <PageContainer>
            <TopSection>
                <Overlay />
            </TopSection>

            <TextSection>
                <Title>안녕하세요. Deer님</Title>
                <Subtitle>2023년 7월 1일, 결혼합니다.</Subtitle>
                <Subtitle>우리 결혼식에 초대합니다.</Subtitle>
            </TextSection>

            <ButtonSection>
                <Button>참석 여부 확인하기</Button>
            </ButtonSection>
        </PageContainer>
    );
}

export default InvitationPage;
