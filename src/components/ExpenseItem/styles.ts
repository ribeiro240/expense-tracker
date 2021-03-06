import styled from 'styled-components';

export const Container = styled.div`
  width: 94%;
  height: 100px;
  box-shadow: 1px 1px 7px #b6c8e7;
  margin: 10px auto;
  display: flex;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  .expense-item__title {
    margin-left: 10px;
    margin-right: auto;
    font-size: 1.6rem;
    overflow-x: scroll;
    white-space: nowrap;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  .expense-item__amount {
    margin-right: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #363c72;
    padding: 10px;
    background: #b6c8e7;
    border-radius: 5px;
    max-width: 150px;
    overflow-x: scroll;
    flex-shrink: 0;
    margin-left: 10px;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  .expense-item__date {
    width: 9.3rem;
    height: 100%;
    background: #b6c8e7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 600;
    flex-shrink: 0;

    @media (max-width: 480px) {
      width: 6.3rem;
      font-size: 1rem;
    }

    p:nth-child(2) {
      font-size: 0.9rem;
      margin: 3px 0;
    }

    p:nth-child(3) {
      font-size: 1.6rem;
    }
  }

  .expense-item__removeBtn {
    position: absolute;
    right: 0;
    top: 0;
    padding: 2px 9px;
    background: transparent;
    border: none;
    box-shadow: -1px 1px 4px #b6c8e7;
    color: #b6c8e7;
    cursor: pointer;
  }
`;