const React = require('react');
const Layout = require('./Layout');

function Login({ login, isAdmin }) {
  return (
    <Layout>
      <h3 style={{ textAlign: 'center' }} className="hTag">
        Введите данные для авторизации:
      </h3>
      <hr />
      <form action="/login" method="POST" id="loginForm">
        <label
          style={{ marginLeft: '10px' }}
          htmlFor="loginInput"
          className="form-label"
        >
          Введите ваш логин:
        </label>
        <input
          style={{ width: '100%', margin: '0 auto 20px' }}
          name="login"
          type="text"
          className="form-control shadow rounded"
          id="loginInput"
        />
        <label
          style={{ marginLeft: '10px' }}
          htmlFor="passwordInput"
          className="form-label"
        >
          Введите ваш пароль:
        </label>
        <input
          style={{ width: '100%', margin: '0 auto 20px' }}
          name="password"
          type="password"
          className="form-control shadow rounded"
          id="passwordInput"
        />
        <button
          style={{
            margin: '20px auto 0',
            backgroundColor: '#898681',
            borderColor: 'black',
          }}
          type="submit"
          className="btn btn-primary shadow rounded"
        >
          Войти
        </button>
      </form>
      <script defer src="/js/logFetch.js"></script>
      <hr />
      <h3 style={{ textAlign: 'center' }} className="regMsg">
        {' '}
      </h3>
    </Layout>
  );
}

module.exports = Login;
