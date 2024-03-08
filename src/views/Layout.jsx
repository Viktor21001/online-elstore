const React = require('react');

function Layout({ children, login, isAdmin }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Интернет-магазин</title>
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/css/style.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Интернет-магазин
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {login ? (
                  <>
                    {isAdmin && (
                      <>
                        <a className="nav-link" href="/users">
                          Все пользователи
                        </a>
                      </>
                    )}
                    <a className="nav-link" href="/profile">
                      Профиль
                    </a>
                    <a className="nav-link" href="/logout">
                      Выйти
                    </a>
                    <a className="nav-link" href="/basket">
                      Корзина
                    </a>
                  </>
                ) : (
                  <>
                    <a className="nav-link" href="/login">
                      Войти
                    </a>
                    <a className="nav-link" href="/register">
                      Зарегистрироваться
                    </a>
                    <a className="nav-link" href="/basket">
                      Корзина
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
        <div className="bodyMainContent">{children}</div>
      </body>
      <footer
        className="footer"
        style={{ textAlign: 'center', position: 'fixed', bottom: '0' }}
      >
        <div>Copyright © 2024, Все права почти защищены</div>
      </footer>
    </html>
  );
}

module.exports = Layout;
