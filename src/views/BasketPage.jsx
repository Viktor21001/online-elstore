const React = require('react');
const Layout = require('./Layout');

function BasketPage({ items }) {
  return (
    <Layout>
      <div>
        <h1>Корзина</h1>
        <ul>
          {items?.map((item, index) => (
            <li key={index}>
              {item?.name} - {item?.price}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

module.exports = BasketPage;
