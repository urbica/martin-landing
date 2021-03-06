import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 0;

  width: 320px;
  padding: 20px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);
  background-color: rgba(28,28,48,0.9);
  color: #dadfee;

  z-index: 3;
  
  @media (max-width: 500px) {
    position: initial;

    width: 100%;
  }
`;
