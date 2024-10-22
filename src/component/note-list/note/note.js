import React, { Component } from 'react';
import './note.scss';

class Note extends Component{
  static defaultProps = {
    title: '',
    text: '',
    date: new Date()
  };

  state ={
    showEditModal: false,
    showDeleteModal: false,
  };

  changeEditToogle = () => {
    this.setState({
      showChangeModal: !this.state.showChangeModal
    });
  };

  changeDeleteToogle = () => {
    this.setState({
      changeDeleteModal: !this.state.changeDeleteModal
    });
  };

  render = () => (
    <div id="note">
      <div id="note-menu">
        <span>{this.props.title}</span>
        <span>
          <span id="showChangeModal" onclick={this.changeEditToogle}>
            편집
          </span>
          <span id="changeDeleteModal" onclick={this.changeDeleteToogle}>
            삭제
          </span>
        </span>
      </div>
      <div id="date">
        <span>
          {this.props.date.toISOString()}
          {this.props.edited && ' (edited'}
        </span>
      </div>
      <div>{this.props.text}</div>
    </div>
  );
}


export default Note;