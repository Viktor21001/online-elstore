console.log('Скрипт подключен');

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

  addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const { productId } = button.dataset;
      console.log(`Добавлен товар с ID ${productId} в корзину`);
      // Здесь можно добавить логику для добавления товара в корзину через AJAX запрос или другой способ
    });
  });
});
