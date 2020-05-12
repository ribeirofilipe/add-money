import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  background: #FFF;

  width: 100%;
  height: 100%;

  @media (max-width: 515px) {
    display: flex;
    justify-content: center;
    height: 300px;
    width: 350px;
    max-height: 350px;
    padding-top: 20px;
  }

  max-width: 900px;
  max-height: 190px;

  border-radius: 4px;

  margin-bottom: 10px;
  position: relative;

  div {
    padding: 20px;
    display: flex;

    align-items: flex-start;

    img {
      margin-right: 25px;
    }

    aside {
      h4 {
        color: #059D42;
        margin-bottom: 10px;
      }

      p {
        width: 85%;
        color: #63666A;
        font-size: 12px;
      }

      div {
        padding: 0;
        margin-top: 20px;
        width: 100%;

        display: flex;
        flex-direction: column;
        font-size: 10px;

        p {
          margin-left: auto;
          text-align: right;
          color: #778489;
        }

        span {
          width: 95%;
          background: #E9E9E9;
          border-radius: 10px;

          input {
            transition: width 0.3s;
            color: ${(props) => (props.total > 0 ? '#FFF' : '#303030')};
            background: ${(props) => (props.total > 0 ? '#059D42' : '#E9E9E9')};
            border-radius: 10px;
            border: 0;
            padding: 2px 4px;
            width: ${(props) => (props.total > 0 ? `${props.total / 2}%` : '10%')};

            @media (max-width: 515px) {
              width: ${(props) => (props.total > 0 ? `${props.total / 2}%` : '40%')};
            }
          }
        }
      }

      span {
        display: flex;
        align-items: center;

        margin-top: 10px;

        button {
          border: 0;
          background: #FFF;
          color: #059D42;
          font-size: 12px;
        }
      }
    }
  }


`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  top: 20px;
  z-index: 1;

  position: relative;
  background: ${(props) => (props.total > 0 ? '#059D42' : '#E14646')};
  margin-left: 42%;

  height: 38px;
  width: 260px;

  img {
    margin-right: 10px;
  }

  p {
    color: #FFF;
    font-weight: bold;
  }

  @media (max-width: 515px) {
    margin-left: 32%;

    height: 38px;
    width: 220px;
  }

`;
