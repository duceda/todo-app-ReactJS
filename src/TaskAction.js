import React from 'react';
import ReactDOM from 'react-dom';

class TaskAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tasks: [
            { text: "Tarea 1", completed: false },
            { text: "Tarea 2", completed: false },
            { text: "Tarea 3", completed: false },
            { text: "Tarea 4", completed: true }
          ],
          edit: null
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.handleEdit = this.handleEdit.bind(this); 
      }

    handleStatus() {
        this.props.setStatus(this.props.index);
    }
    handleEdit() {
        this.props.edit(this.props.index);
    }
    handleRemove() {
        this.props.remove(this.props.index);
    }
    getButton() {
        if (!this.props.completed) {
            return (
                <button type="button"
                    onClick={this.handleStatus}
                    className="btn btn-xs btn-success">
                    <i className="glyphicon glyphicon-ok"></i>
                </button>
            )
        } else {
            return (
                <button type="button"
                    onClick={this.handleStatus}
                    className="btn btn-xs btn-info">
                    <i className="glyphicon glyphicon-repeat"></i>
                </button>
            )
        }
    }
    render() {
        return (
            <div className="btn-group btn-group-xs pullright"
                role="group">
                {this.getButton()}
                <button type="button"
                    onClick={this.handleEdit}
                    className="btn btn-xs btn-primary" >
                    <i className="glyphicon glyphiconpencil"></i>
                </button>
                <button type="button"
                    onClick={this.handleRemove}
                    className="btn btn-xs btn-danger" >
                    <i className="glyphicon glyphiconremove"></i>
                </button>
            </div>
        )
    }
}

export default TaskAction;