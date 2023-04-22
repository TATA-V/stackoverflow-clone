import styled from 'styled-components';
import DetailHead from './DetailMeterial/DetailHead';
import DetailView from './DetailMeterial/DetailView';
import LeftSideBar from '../StackSidebar/LeftSideBar';
import StackFoot from '../StackFoot/StackFoot';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setDetailQuestion } from '../../reducer/questionSlice';
import axios from 'axios';

const Container = styled.div`
  position: relative;
  top: 50px;
  width: 100vw;
  height: 100vh;
  .wrapper {
    margin: 0 auto 50px;
    max-width: 1246px;
    height: 100%;
    display: flex;
  }
`;

const MainBox = styled.div`
  border-left: 1px solid #d6d9dc;

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: 164px;
  padding: 24px;
  min-width: 800px;
  div.hr-line {
    margin-top: 12px;
    border-bottom: 1.5px solid #d6d9dc;
  }
`;

const DetailQuestion = ({ curTab, onTabSelect }) => {
  //요청할 API 주소를 위함
  const { question_id } = useParams();
  //로딩 및 에러 처리
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // questions 전역 상태관리
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:4000/questions/?question_id=${question_id}`);
        // 데이터를 전역 store에 저장하기위함
        dispatch(setDetailQuestion(response.data[0]));
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, []);
  //최초 렌더링시 undefined, 렌더링 직후 useEffect로 데이터를 받기에 아래와 같이 분기처리
  // 로딩중이면 로딩컴포넌트 보여주기, 추후에 만들기
  if (loading) {
    return <Container>로딩중...</Container>;
  }
  // 받아온 응답이 없다면
  if (!questions.question) return null;
  // catch문의 Error처리
  if (error) {
    return <Container>에러 발생...</Container>;
  }

  const stackFoot = <StackFoot num={980} />;
  console.log(stackFoot);

  return (
    <>
      {questions.question && (
        <Container>
          <div className='wrapper'>
            <LeftSideBar curTab={curTab} onTabSelect={onTabSelect} />
            <MainBox>
              <DetailHead question={questions.question} />
              <DetailView question={questions.question}></DetailView>
            </MainBox>
          </div>
          <StackFoot />
        </Container>
      )}
    </>
  );
};

export default DetailQuestion;
