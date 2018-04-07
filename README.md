<strong>ReactJS production </strong>
# Business-Taskbook

<p align="center"><img src="screenshot.png" /></p>

## Задание
Создайте приложение - бизнес-ежедневник. <br/>
В приложении должно быть предусмотрено добавление, удаление и сортировка текущих заданий по дате.

## Комментарии
Приложение - бизнес(ежедневник), выполнено с использованием JS + ReactJS

Компонентная структура: Index.html <--> Index.js <--> App.js <--> TasksList.js <--> Task.js <br/>
Начальные задачи(task-и) подгружаются в state slice-копированием из ./base of tasks/tasks.js

Присутствует поле ввода новой задачи и поле вывода списка текущих задачи. <br/>
Сортировка по дате исполнения - автоматическая (setState). <br/>

Присутствуют одна большая кнопка - добавить задачу и три bootstrap иконки (отметить как выполнено, редактировать и удалить).<br/>
Текущие задачи снабжены всплывающим полем с комментарием. <br/>
Выполненные задачи отмечаются цветом. <br/>

Редактирование текущих задач осуществляется через поле ввода новой задачи. <br/>

В приложении присутствует простая проверка валидности полей ввода с алерт-выводом. <br/>

Присутствуют краткие комментарии по коду приложения. <br/>
