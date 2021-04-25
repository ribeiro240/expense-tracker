import styled from 'styled-components';

export const Graph = styled.div`
  width: 94%;
  height: 200px;
  display: flex;
  align-items: flex-end;
  padding: 30px 10px;
  box-shadow: 1px 1px 7px #b6c8e7;
  margin: 0 auto;
  border-radius: 5px;

  .expenses__graph--bar {
    width: 8.33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    .bar {
      width: 20px;
      height: 80%;
      background: #00094e;
    }
  }
`