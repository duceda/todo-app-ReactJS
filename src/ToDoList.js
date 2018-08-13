import React from 'react';
import ReactDOM from 'react-dom';
import TaskAction from './TaskAction';

class ToDoList extends React.Component {
    render() {
        return (
            <div className="row padded">
                <div className="col-lg-12">
                    <h4>Tasks</h4>
                    <hr />
                    <ul className="list-group">
                        {
                            this.props.tasks.map(function (task, index) {
                                var cssClass = 'list-group-item list-group-item-';
                                if (task.completed) {
                                    cssClass += 'info';
                                } else {
                                    cssClass += 'success';
                                }
                                return (
                                    <li key={index} className={cssClass}>
                                        <TaskAction
                                            index={index}
                                            completed={task.completed}
                                            setStatus={this.props.taskAction}
                                            edit={this.props.edit}
                                            remove={this.props.remove} />
                                        {task.text}
                                    </li>
                                )
                            }, this)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default ToDoList;