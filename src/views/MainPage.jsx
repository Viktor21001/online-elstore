const React = require('react');
const Layout = require('./Layout');

function MainPage({ devices, login, isAdmin }) {
  return (
    <Layout login={login} isAdmin={isAdmin}>
      <div className="products-container">
        {devices?.map((device) => (
          <div
            className="card device-card"
            key={device.id}
            id={device.id}
            style={{ maxWidth: '300px', maxHeight: '200px' }}
          >
            <img src={device?.img} alt={device?.name} />
            <div className="card-body">
              <h5 className="card-title">{device?.name}</h5>
              <p className="card-description">{device?.description}</p>
              <p className="card-price">{device?.price} руб.</p>
              <a href={`/products/${device.id}`} className="btn btn-primary">
                Подробнее
              </a>
              <button
                class="btn btn-primary addToCart"
                data-device-id="${device.id}"
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        ))}
      </div>
      <script defer src="/js/index.js" />
    </Layout>
  );
}

module.exports = MainPage;
