console.log('Я тут');
const del = document.querySelector('#delDevice');

del.addEventListener('click', async (event) => {
  if (event.target.classList.contains('delete1')) {
    event.preventDefault();

    try {
      const { id } = event.target;
      console.log(event.target);
      const response = await fetch(`/profile/delete/${id}`, {
        method: 'DELETE',
      });
      console.log(response);
      const result = await response.json();
      console.log(result);
      if (result.success) {
        event.target.closest('.deldevice-card').remove();
      }
    } catch (error) {
      console.log('Ошибка аляляля:', error);
    }
  }
});
