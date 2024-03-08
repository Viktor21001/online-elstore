const React = require('react');
const Layout = require('./Layout');
function ItemFormNew({ login, isAdmin }) {
  return (
    <Layout login={login} isAdmin={isAdmin}>
      <div className="card-entity card-edit">
        <form id="item-form" className="newDevice">
          <label htmlFor="name-input" className="info-label">
            Название товара
          </label>
          <input
            name="name"
            type="text"
            className="input-area"
            id="name-input"
            placeholder="Название товара"
            required
          />
          <hr />
          <label htmlFor="price-input" className="info-label">
            Цена
          </label>
          <input
            id="price-input"
            type="number"
            name="price"
            className="form-control input-area"
            placeholder="Цена"
            required
          />
          <hr />
          <label htmlFor="rating-input" className="rate-label">
            Рейтинг товара
          </label>
          <input
            name="rating"
            type="number"
            id="rating-input"
            className="input-area"
            placeholder="Рейтинг товара"
            required
          />
          <hr />
          <label htmlFor="photo-input" className="info-label">
            Фото (ссылка)
          </label>
          <input
            name="img"
            type="text"
            className="input-area"
            id="photo-input"
            placeholder="Фото (ссылка)"
          />
          <hr />
          <label htmlFor="brand-input" className="info-label">
            Бренд
          </label>
          <input
            name="brand"
            type="text"
            className="input-area"
            id="brand-input"
            placeholder="Бренд"
          />
          <hr />
          <label htmlFor="type-input" className="info-label">
            Тип
          </label>
          <input
            name="type"
            type="text"
            className="input-area"
            id="type-input"
            placeholder="Тип"
          />
          <hr />
          <label htmlFor="description-title" className="info-label">
            Заголовок
          </label>
          <input
            name="title"
            type="text"
            className="input-area"
            id="description-title"
            placeholder="Заголовок"
            required
          />
          <hr />
          <label htmlFor="description-input" className="info-label">
            Описание товара
          </label>
          <textarea
            name="description"
            rows="5"
            id="description-input"
            className="input-area input-textarea"
            placeholder="Описание товара"
            required
          ></textarea>
          <hr />
          <button
            type="submit"
            id="add-btn"
            className="button yellow card-edit"
          >
            Создать товар
          </button>
        </form>
        <div id="auth-alert" className="white-alert"></div>
        <script defer src="/js/newDevice.js" />;
      </div>
    </Layout>
  );
}

module.exports = ItemFormNew;
