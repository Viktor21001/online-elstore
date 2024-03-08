const React = require('react');
const Layout = require('./Layout');
const MainPage = require('./MainPage'); // Импортируем компонент MainPage

function ProfilePage({ user, login, isAdmin, devices }) {
  return (
    <Layout login={login} isAdmin={isAdmin}>
      <div>
        <h1>Профиль пользователя</h1>
        <p>Логин: {user.login}</p>
        <p>Email: {user.email}</p>
        <p>Роль: {user.role}</p>
      </div>
      {isAdmin && devices && (
        <div className="products-container" id="delDevice">
          <button type="button" className="btn btn-primary newDev1">
            <a href="/newDevice" style={{ color: 'white' }}>
              Добавить
            </a>
          </button>
          {devices.map((device) => (
            <div className="card deldevice-card" key={device.id}>
              <img src={device.img} alt={device.name} />
              <div className="card-body">
                <h5 className="card-title">{device.name}</h5>
                <p className="card-description">{device.description}</p>
                <p className="card-price">{device.price} руб.</p>
                <a href={`/products/${device.id}`} className="btn btn-primary">
                  Подробнее
                </a>
                <button
                  type="button"
                  id={device.id}
                  className="btn btn-primary delete1"
                >
                  Удалить
                </button>
                {isAdmin && (
                  <a
                    href={`/products/${device.id}/edit`}
                    className="btn btn-primary edit"
                  >
                    Изменить
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <script defer src="/js/delete.js" />
      {/* <script defer src="/js/index.js" /> */}
    </Layout>
  );
}

module.exports = ProfilePage;
