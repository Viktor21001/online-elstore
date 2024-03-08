console.log('Уляля три коня');

const form = document.querySelector('.newDevice');

form.addEventListener('submit', async (event) => {
  if (!event.target.classList.contains('newDev')) {
    event.preventDefault();
    const formData = new FormData(form);
    const inputs = Object.fromEntries(formData);
    try {
      const response = await fetch('/newDevice/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      });
      const result = await response.json();
      if (result) {
        window.location = '/profile';
      }
    } catch (error) {
      console.log('Ошибка ===> ', error);
    }
  }
});
