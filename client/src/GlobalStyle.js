import { createGlobalStyle } from 'styled-components';
import { useLocation } from 'react-router-dom';

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
		padding: 0;
    height: 100vh;
    background-color: ${({ backgroundColor }) => backgroundColor || '#FFF'};

  }
`;

export function BackgroundColor() {
  const location = useLocation();
  let backgroundColor;
  switch (location.pathname) {
    case '/login':
    case '/signup':
      backgroundColor = '#F1F2F3';
      break;
    case '/questions/ask':
      backgroundColor = '#fafafa';
      break;
    default:
      backgroundColor = '#FFF';
  }
  return <GlobalStyled backgroundColor={backgroundColor} />;
}
