const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout>
      <h1>Registration</h1>
      <form id="regForm" action="/register" method="POST">
        <div>
          <label>Login:</label>
          <input type="text" name="login" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <script defer src="/js/regFetch.js"></script>
    </Layout>
  );
}

module.exports = Registration;
