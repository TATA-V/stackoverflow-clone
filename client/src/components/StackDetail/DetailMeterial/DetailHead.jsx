import styled from 'styled-components';
import SharedButton from '../../SharedButton';
import { Link } from 'react-router-dom';
const DetailHeadBox = styled.div`
  /* min-width: 750px; */
  display: flex;
  justify-content: space-between;
  div.title {
    font-size: 27px;
    font-weight: 400;
    line-height: 36.45px;
    color: rgb(59, 64, 69);
  }
`;
const DetailInfo = styled.div`
  margin-top: 6px;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  color: rgb(106, 115, 124);
  span {
    color: rgb(35, 38, 41);
    margin-right: 10px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const DetailHead = ({ question }) => {
  return (
    <>
      <DetailHeadBox>
        <div className='title'>{question.title}</div>
        <StyledLink to='/questions/ask'>
          <SharedButton buttonText='Ask Question' />
        </StyledLink>
      </DetailHeadBox>
      <DetailInfo>
        Asked <span>today</span> Modified <span>today</span> Viewed <span>3 times</span>
      </DetailInfo>
      <div className='hr-line'></div>
    </>
  );
};

export default DetailHead;
