const regForm = document.getElementById('regForm');

regForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(regForm);
  const res = Object.fromEntries(formData);
  try {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(res),
    });
    const result = await response.json();
    if (result) {
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
});
