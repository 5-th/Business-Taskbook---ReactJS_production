import React, { Component } from 'react';

class Task extends Component {

    render() {
        const   {task, showComment,  onTitleClick, onRemoveClick, onEditClick, isDone} = this.props, //чтение свойств и состояний из props
                done = (task.isDone === true) ? 'done' : 'not',        
                comment = showComment && <section className={'comment ' + done}>{task.comment}</section>;
        return ( //построчный вывод заданий
            <div className="chain all-tasks-block">
                <div className={'chain date ' + done}> {task.date} </div>
                    <div className={'chain title ' + done} onClick={onTitleClick}> {task.title} </div>
                        <span className="glyphicon glyphicon-ok icons ok" onClick={isDone}> </span>
                            <span className="glyphicon glyphicon-edit icons edit" onClick={onEditClick}> </span>
                                <span className="glyphicon glyphicon-remove icons remove" onClick={onRemoveClick}> </span>
                { comment } {/*вывод комментария если showComment*/}
            </div>
        );
    };
};
export default Task;