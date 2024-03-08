// editPage.jsx
const React = require('react');
const Layout = require('./Layout');

function EditPage({ login, isAdmin, device, deviceInfo }) {
  return (
    <Layout login={login} isAdmin={isAdmin}>
      <div className="card-entity card-edit">
        <form id={device?.id} name="editForm">
          <label htmlFor="name-input" className="info-label">
            Название товара
          </label>
          <input
            name="name"
            type="text"
            className="input-area"
            id="name-input"
            placeholder="Название товара"
            defaultValue={device?.name}
            required
          />

          <label htmlFor="price-input" className="info-label">
            Цена
          </label>
          <input
            id="price-input"
            type="number"
            name="price"
            className="form-control input-area"
            placeholder="Цена"
            defaultValue={device?.price}
            required
          />

          <label htmlFor="rating-input" className="rate-label">
            Рейтинг товара
          </label>
          <input
            name="rating"
            type="number"
            id="rating-input"
            className="input-area"
            placeholder="Рейтинг товара"
            defaultValue={device?.rating}
            required
          />

          <label htmlFor="photo-input" className="info-label">
            Фото (ссылка)
          </label>
          <input
            name="img"
            type="text"
            className="input-area"
            id="photo-input"
            defaultValue={device?.img}
            placeholder="Фото (ссылка)"
          />

          <label htmlFor="brand-input" className="info-label">
            Бренд
          </label>
          <input
            name="brand"
            type="text"
            className="input-area"
            id="brand-input"
            defaultValue={device?.brand}
            placeholder="Бренд"
          />

          <label htmlFor="type-input" className="info-label">
            Тип
          </label>
          <input
            name="type"
            type="text"
            className="input-area"
            id="type-input"
            defaultValue={deviceInfo?.title}
            placeholder="Тип"
          />

          <label htmlFor="description-title" className="info-label">
            Заголовок
          </label>
          <input
            name="title"
            type="text"
            className="input-area"
            id="description-title"
            defaultValue={deviceInfo?.description}
            placeholder="Заголовок"
            required
          />

          <label htmlFor="description-input" className="info-label">
            Описание товара
          </label>
          <textarea
            name="description"
            rows="5"
            id="description-input"
            className="input-area input-textarea"
            placeholder="Описание товара"
            type="text"
            defaultValue={device?.description}
            required
          ></textarea>
          <button type="submit" className="button yellow card-edit">
            Сохранить изменения
          </button>
        </form>
        <script defer src="/js/edit.js" />;
      </div>
    </Layout>
  );
}

module.exports = EditPage;
