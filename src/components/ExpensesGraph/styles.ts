import styled from 'styled-components';

export const Graph = styled.div`
  width: 100%;
  height: 183px;
  display: flex;
  align-items: flex-end;
  padding: 0 10px 40px;

  .expenses__graph--bar {
    width: 8.33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 20px;

    .bar {
      width: 20px;
      height: 80%;
      background: #00094e;
    }
  }
`