import React,  { Component } from 'react';
import './App.css';
import Movie from './Movie'

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

  // state: 리액트 컴포넌트 안에 있는 오브젝트
  // 컴포넌트 안에 state가 바뀔 때마다 render이 발생한다
  state = {
    greeting: 'Hello!',
    movies: [
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
  }

  // componentDidMount: 컴포넌트가 mount되면 5초 기다리고 greeting을 업데이트 함
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "EXIT",
            poster: "http://img.movist.com/?img=/x00/05/05/36_p1.jpg"
          },
          ...this.state.movies,
        ]
      })
    }, 5000)
  }

  render(){ // 데이터
    // console.log('did render')
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
