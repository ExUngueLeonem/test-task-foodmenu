# Тестовое задание на позицию Инженер - программист

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Запуск проложения 
    запуск вервера на 3000 порту
    json-server db.json -m ./node_modules/json-server-auth

    запуск клиента
    npm start
## что НУЖНО доделать
оптимизировать запросы на остальных страницах

http://localhost:3001/admin/order
добавление удаление заказов, 
просмотр предыдущих дней

http://localhost:3001/user/order
странцу заказа для юзера нужно полностью сделать

форма входа
разделить на форму фхода и форму регистрации, 
на форме регистрации сделать еще поле для Никнейма 
поэтому нового пользователя нельзя регнуть
## что хорошего сделано

переиспользуемый список
вынос сервисов
сделал mobX(не полностью перевел)
оптимизировал запросы на сервер на /admin/menu
сохраняются токены доступа в local storage

## что плохого
(исправлено) не использован стейт менеджер
(частично исправлено) контекст нужно сделать  нормально
плохая оптимизация запросов
плохая структура данных

## что можно доделать
AdminOrderPage сделать подсветку для выбранного пользователя

настроить навигацию, чтобы показывало переменные в адресной строке

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
