import React, { Component } from 'react';
import styled from 'styled-components';
import NoteList from './component/note-list/note-list';
import ModalPage from './component/modal/modal';
import NoteRaw from './component/note-raw/note-raw';

const Container = styled.div`
  height : 100vh;
  display : flex;
  justify-content: clearInterval;
  align-items: clearInterval;
`;

const AppDiv = styled.div`
  width : 50vw;
  height : 50vh;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0 10px 6px -6px #777;
  background-color: #28bbf7;
`;
const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  div > span {
    font-size: 2rem;
    font-weight: bold;
  }

  div > button {
    font-size: 1.2rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    outline: none;
    padding: 0.5rem;
    transition: 0.25s;
    color: #28bbf7;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: #28bbf7;
      color: white;
    }
  }
`;


class App extends Component{
  state = {
    search: '',
    notes: [
      {date: new Date(), text: '첫 번째 메모 텍스트', title: '첫 번째 메모입니다.', edited: false},
      {date: new Date(), text: '두 번째 메모', title: 'SECOND', edited: false},
    ]
  };

  toogleModal = () => {
    this.setState({
      modalToogle: !this.state.modalToogle
    });
  };

  createNote = (title, text) => {
    this.setState({
      notes: [...this.state.notes, {title, text, date: new Date(), edited: false}]
    });
  };

  static defaultProps = {
    title: '',
    text: '',
    subject: '노트 작성',
    key: -1,
    action: () => console.log('Action이 존재하지 않습니다'),
    close: () => console.log('Close가 존재하지 않습니다')
  };

  render(){
    return (
      <Container>
         {this.state.modalToogle && (
          <ModalPage>
              <NoteRaw action={this.createNote} close={this.toogleModal} />
          </ModalPage>
          )}
        <AppDiv id="app">
        <SearchBar>
          <div>
            <span>노트 만들기</span>
          </div>
          <div>
            <button onClick={this.toogleModal}>노트 작성</button>
            <div id="search-bar" />
          </div>
        </SearchBar>
          <NoteList notes={this.state.notes}/>
        </AppDiv>
      </Container>
    );
  }
}


export default App;