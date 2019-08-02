import React,  { Component } from 'react';
import './App.css';
import Movie from './Movie'

const movies = [
  {
    title: "The Lion King",
    poster: "http://img.movist.com/?img=/x00/05/11/79_p1.jpg",
  },
  {
    title: "Aladdin",
    poster: "http://img.movist.com/?img=/x00/05/11/49_p1.jpg",
  },
  {
    title: "The King's Letters",
    poster: "http://img.movist.com/?img=/x00/05/03/76_p1.jpg",
  },
  {
    title: "Spider-Man: Far From Home",
    poster: "http://img.movist.com/?img=/x00/05/13/00_p1.jpg",
  }
]

class App extends Component {

  // Render: ComponentWillMount() -> render() -> ComponentDidMounr()
  // Update ComponentWillReceiveProps() -> shouldComponentUpdate() -> ComponentWillUpdate(): spinner(로딩중) -> reder() -> ComponentDidUpdate(): 로딩중 메세지나 아이콘 숨기기
  // 컴포넌트가 존재하기 시작하면 리액트 세계는 will mount -> did render -> did mount를 작동한다

  // componentWillMount(){ // api 요청
  //   console.log('will mount')
  // }

  // componentDidMount(){
  //   console.log('did mount')
  // }

  render(){ // 데이터
    // console.log('did render')
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
