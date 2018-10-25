import styled from 'styled-components'

const LoginPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 1280px;
  height: 100%;
  margin: 0 auto;
  border: 1px solid;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  background-size: 100% 100%;
`
const LoginPageWrap = styled.div`
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 3px 3px 3px #fff;

  .login-form-title {
    font-size: 20px;
    color: #253c5f;
    margin-bottom: 10px;
  }
  .login-form-button {
    margin: 0 auto;
    width: 100%;
    text-align: center;
    background-color: #60402c;
    color: #fff;
  }
`

export { LoginPage, LoginPageWrap }
