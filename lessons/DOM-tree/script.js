// Задание 1 (тайминг 30 минут)
// Работа с BOM
// 1. Определение текущего размера окна браузера:
// ○ Напишите функцию, которая будет выводить текущую
// ширину и высоту окна браузера при его изменении.
// 2. Подтверждение закрытия страницы:
// ○ Создайте всплывающее окно или диалоговое окно,
// которое появляется при попытке закрыть вкладку
// браузера и спрашивает пользователя, уверен ли он в
// своем решении закрыть страницу.
// 3. Управление историей переходов:
// ○ Используйте объект history для управления историей
// переходов на веб-странице. Создайте кнопки "Назад" и
// "Вперед" для перемещения по истории.


// Задача 1
// const updateWindowSize = () => {
//     const widthEl = window.innerWidth;
//     const heightEl = window.innerHeight;

//     const windowSizeElement = document.querySelectorAll('.window-size');
    
//     width.textContent = widthEl;
//     height.textContent = heightEl;
// }

// window.addEventListener('load', updateWindowSize);
// window.addEventListener('resize', updateWindowSize);

// Задача 2
// window.addEventListener('beforeunload', function (e) {
//     e.preventDefault();
//     e.returnValue = 'Text';
// });

// Задача 3
// goBack.addEventListener('click', function (e) {
//     window.history.back();
// });

// goForward.addEventListener('click', function (e) {
//     window.history.forward();
// });

// Задание 2 (тайминг 30 минут)
// Вы должны создать веб-страницу, которая позволяет пользователю динамически
// управлять элементами на странице. Ниже приведены основные требования и
// функциональность:
// 1. На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и
// "Клонировать элемент".
// 2. При нажатии на кнопку "Добавить элемент" на страницу добавляется новый
// квадратный элемент (<div>) с размерами 100x100 пикселей. Этот элемент
// должен иметь класс .box и содержать текст, указывающий порядковый номер
// элемента (1, 2, 3 и так далее).
// 3. При нажатии на кнопку "Удалить элемент" удаляется последний добавленный
// элемент, если таковой имеется.
// 4. При нажатии на кнопку "Клонировать элемент" создается копия последнего
// добавленного элемента и добавляется на страницу.
// 5. Все элементы имеют класс .box и стилизованы с помощью CSS (см. пример).
// 6. Элементы могут быть добавлены, удалены и клонированы в любом порядке и в
// любом количестве.

// const containerEl = document.querySelector('#container');

// addButton.addEventListener('click', function (e) {
//     const newBox = document.createElement('div');
//     newBox.classList.add('box');
//     newBox.textContent = containerEl.children.length + 1;
//     containerEl.append(newBox);
// });

// removeButton.addEventListener('click', function (e) {
//     if (containerEl.children.length > 0) {
//         const lastBox = containerEl.lastChild;
//         containerEl.removeChild(lastBox);
//     }
// });

// cloneButton.addEventListener('click', function (e) {
//     if (containerEl.children.length > 0) {
//         const lastBox = containerEl.lastChild;
//         const clone = lastBox.cloneNode(true);
//         containerEl.append(clone);
//     }
// });

// Задание 3 (тайминг 50 минут)
// 1. Вы создаете веб-страницу для отображения списка статей. Каждая статья состоит
//  из заголовка и
// текста. Вам необходимо использовать Bootstrap для стилизации элементов.
// 2. Используйте Bootstrap, чтобы стилизовать элементы:
// a. Заголовок статьи (<h2>)
// b. Текст статьи (<p>)
// c. Кнопки "Добавить статью", "Удалить" и "Редактировать".
// 3. Создайте начальный список статей, который будет загружаться при загрузке страницы.
//  Используйте
// JSON-данные для определения заголовков и текстов статей.
// 4. Позвольте пользователю добавлять новые статьи. При нажатии на кнопку "Добавить 
// статью" должна
// появиться новая статья с заголовком "Новая статья" и текстом "Введите содержание 
// статьи...".
// 5. Реализуйте функциональность удаления статей. При нажатии на кнопку "Удалить" 
// соответствующая
// статья должна быть удалена из списка.
// 6. Реализуйте функциональность редактирования статей. При нажатии на кнопку 
// "Редактировать"
// пользователь должен иметь возможность изменить заголовок и текст статьи. Используйте
// всплывающее окно или prompt для ввода новых данных.
// 7. Все изменения (добавление, удаление, редактирование) должны быть сохранены 
// в локальное
// хранилище браузера, чтобы они сохранялись после перезагрузки страницы.

const articleData = [
    {
        title: 'Заголовок статьи 1',
        content: 'Содержание статьи 1'
    },
    {
        title: 'Заголовок статьи 2',
        content: 'Содержание статьи 2'
    }
]


articleData.forEach(element => {
    const articleItem = createArticle(element.title, element.content);
    articleList.append(articleItem);
});

function createArticle(title, content) {
    const articleItem = document.createElement('li ');
    articleItem.classList.add('list-group-item');

    const articleTitle = document.createElement('h2');
    articleTitle.classList.add('mb-3');
    articleTitle.textContent = title;

    const articleContent = document.createElement('p');
    articleContent.textContent = content;

    const editButton = document.createElement('button');
    editButton.textContent = 'Редактировать';
    editButton.classList.add('btn', 'btn-warning');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.classList.add('btn', 'btn-danger');

    articleItem.append(articleTitle);
    articleItem.append(articleContent);
    articleItem.append(editButton);
    articleItem.append(deleteButton);

    return articleItem;
};

addArticleButton.addEventListener('click', function (e) {
    const newArticle = {
        title: 'Новая статья',
        content: 'Введите новый текст статьи'
    }

    const articleItem = createArticle(newArticle.title, newArticle.content);
    articleList.append(articleItem);
});

articleList.addEventListener('click', function (e) {
    if (e.target.textContent == 'Удалить') {
        const articleItem = e.target.closest('li');
        articleItem.remove();
    }

    if (e.target.textContent == 'Редактировать') {
        const articleItem = e.target.closest('li');
        const articleTitle = articleItem.querySelector('h2');
        const articleContent = articleItem.querySelector('p');

        const newTitle = prompt('Введите новый заголовок', articleTitle.textContent);
        const newContent = prompt('Введите новое содержимое', articleContent.textContent);

        if (newTitle !== null && newContent !== null) {
            articleTitle.textContent = newTitle;
            articleContent.textContent = newContent;
        }
    }
});


