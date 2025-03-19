// Инициализация приложения
Telegram.WebApp.ready();

// Получаем данные о пользователе
const user = Telegram.WebApp.initDataUnsafe.user;

// Отображаем информацию о пользователе
if (user) {
  const userInfo = `
    ID: ${user.id}<br>
    Имя: ${user.first_name}<br>
    Фамилия: ${user.last_name || 'Не указана'}<br>
    Username: ${user.username || 'Не указан'}
  `;
  document.getElementById('user-info').innerHTML = userInfo;
} else {
  document.getElementById('user-info').innerHTML = "Информация о пользователе недоступна.";
}

// Обработка кнопки закрытия
document.getElementById('close-btn').addEventListener('click', () => {
  Telegram.WebApp.close();
});
