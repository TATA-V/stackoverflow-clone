import styled from 'styled-components';
import googleLogo from '../../../assets/google-icon.svg';

const LoginWithBlock = styled.div`
  width: 288px;
  height: 130px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    width: 288px;
    height: 38px;
    border-radius: 6px;
    font-size: 12.5px;

    &:focus {
      outline: 4px solid #ddddde;
    }
  }

  span {
    margin-left: 5px;
  }

  .google {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #5f6467;
    text-shadow: 0 0 0 #5f6467;
    background-color: #fff;
    border: 1px solid #d3d3d2;

    &:hover {
      background-color: #f8f9f9;
    }

    img {
      width: 16px;
    }
  }

  .github {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    text-shadow: 0 0 0 #fff;
    background-color: #2f3337;
    border: 1px solid #d3d3d2;

    &:hover {
      background-color: #242529;
    }

    .i-github-icon {
      font-size: 16px;
    }
  }

  .facebook {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    text-shadow: 0 0 0 #fff;
    background-color: #385499;
    border: 1px solid #d3d3d2;

    &:hover {
      background-color: #304986;
    }

    &:focus {
      outline: 4px solid #d1dfed;
    }

    .i-facebook-icon {
      font-size: 17px;
    }
  }
`;

const LoginWith = () => {
  return (
    <LoginWithBlock>
      <button className='google'>
        <img src={googleLogo} alt='google-logo' />
        <span>Log in with Google</span>
      </button>

      <button className='github'>
        <i className='i-github-icon' />
        <span>Log in with Github</span>
      </button>

      <button className='facebook'>
        <i className='i-facebook-icon' />
        <span>Log in with Facebook</span>
      </button>
    </LoginWithBlock>
  );
};

export default LoginWith;
