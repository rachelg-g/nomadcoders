import React,  { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  // Render: ComponentWillMount() -> render() -> ComponentDidMounr()
  // Update ComponentWillReceiveProps() -> shouldComponentUpdate() -> ComponentWillUpdate(): spinner(로딩중) -> reder() -> ComponentDidUpdate(): 로딩중 메세지나 아이콘 숨기기
  // 컴포넌트가 존재하기 시작하면 리액트 세계는 will mount -> did render -> did mount를 작동한다

  state = {

  }

  // componentDidMount: 컴포넌트가 mount되면 5초 기다리고 greeting을 업데이트 함
  componentDidMount(){
    fetch('https://yts.lt/api/v2/list_movies.json?sort_by=like_count')
    .then(potato => potato.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render(){ // 데이터
    // console.log('did render')
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
