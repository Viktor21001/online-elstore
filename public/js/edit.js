console.log('Скрипт для внесения изменений подключен');

// const editForm = document.querySelector('#edit-form');
const { editForm } = document.forms;
editForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(editForm);
  const inputs = Object.fromEntries(formData);
  console.log(inputs);
  try {
    const response = await fetch(`/editDevice/edit/${event.target.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    console.log(response);
    const result = await response.json();
    if (result) {
      window.location = '/profile';
    } else {
      console.error('Что-то пошло не так');
    }
  } catch (error) {
    console.error('Ошибка при отправке данных', error);
  }
});
