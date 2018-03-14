import React, {PureComponent} from 'react'
import Task from './Task';
import tasks from '../base of tasks/tasks';

export default class TasksList extends PureComponent {
    state = {
        currentTasks: tasks.slice(), //записываем ../base of tasks/tasks в локальное состояние
        currentTaskId: null //состояние ID текущего задания, используем при работе с функциями ОПД
    }
    
    render() {
        const tasksList = this.state.currentTasks.map((elem, index) => {
            return (
                <span key={index}>  
                <Task   task = {elem} 
                        showComment = {this.state.currentTaskId === elem.id}  
                        onTitleClick = {this.toogleComment.bind(this, elem.id)}
                        onRemoveClick = {this.removeTask.bind(this, elem.id)} 
                        onEditClick = {this.editTask.bind(this, elem.id, elem.title, elem.comment, elem.date)} 
                        isDone = {this.isDone.bind(this, elem.id)}/> <br/>
                </span> //формируем tasklist при помощи компонента Task и привязываем функции ОПД для изменения task-ов  
            )
        });
        return (
            <div>
                <div className="new-task-block"> {/* блок ввода новой / edit-a старой задачи*/}
					<div className="new-task-block-label chain">Task:</div> <input type="text" className="new-task-block-input" id="tsk-title" placeholder="new task"/><br/>
					<div className="new-task-block-label chain">Comment:</div> <input type="text" className="new-task-block-input" id="tsk-cmt" placeholder="comment for new task"/><br/>
					<div className="new-task-block-label chain">Date:</div> <input id="tsk-date" type="datetime-local" className="new-task-block-date"/>
					<button onClick={this.sortTasksByDate} onMouseDown={this.newTask} value=""> add task </button><br/>
				</div>
                {tasksList} {/* передаем тасклист родителю */}
            </div>
        )
    }

    sortTasksByDate =()=> { //автосортировка по дате, привязана к кнопке add task
        const arr = this.state.currentTasks.slice();
        arr.sort((task1, task2) => {
            return task1.date > task2.date;
        });
        this.setState({ currentTasks: arr })
    }
    

    toogleComment = currentTaskId => { //прячем комментарий при повторном нажатии
         this.setState({ currentTaskId: this.state.currentTaskId === currentTaskId ? null : currentTaskId })
    }
    removeTask = currentTaskId => { //удаляем задание
        const arr = this.state.currentTasks.filter(elem => elem.id !== currentTaskId);
		this.setState({	currentTasks: arr })
     }

    newTask =()=> { //функция добавления нового задания, привязана к кнопке add task
        this.setState({ currentTasks: this.addTask() })
	}
	addTask =()=> { //обработка формы и передача данных в метод newTask
		const 	tsk_title = document.getElementById('tsk-title').value,
					tsk_comment = document.getElementById('tsk-cmt').value,
						tsk_date = document.getElementById('tsk-date').value
	
		if (tsk_title !== '' && tsk_comment !== '' && tsk_date !== '') { //валидность инпутов
			return [
				...this.state.currentTasks, {id: Math.floor(Math.random()*999999999999), date: tsk_date,
					title: tsk_title, comment: tsk_comment, isDone: false}
			]
		} else {
            alert('Please fill all fields in the form!')
            return this.state.currentTasks
        }
    }
    
    editTask = (id, title, comment, date) => { //передача данных в форму для изменения
        document.getElementById('tsk-title').value = title; 
            document.getElementById('tsk-cmt').value = comment;
                document.getElementById('tsk-date').value = date;
        this.removeTask(id); //удаление изменяемого задания из списка
    }

    isDone = currentTaskId => { //функция обработки выполненного задания
        const arr = this.state.currentTasks.slice();
        arr.map(elem => {
            if (elem.id === currentTaskId) {
                elem.isDone = true;
            }
            return -1;
        });
       this.setState({ currentTasks: arr })
    }
};