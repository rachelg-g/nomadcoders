import React,  { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  // Render: ComponentWillMount() -> render() -> ComponentDidMounr()
  // Update ComponentWillReceiveProps() -> shouldComponentUpdate() -> ComponentWillUpdate(): spinner(로딩중) -> reder() -> ComponentDidUpdate(): 로딩중 메세지나 아이콘 숨기기
  // 컴포넌트가 존재하기 시작하면 리액트 세계는 will mount -> did render -> did mount를 작동한다

  state = {}

  // componentDidMount: 컴포넌트가 mount되면 5초 기다리고 greeting을 업데이트 함
  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie
        title={movie.title_english}
        poster={movie.large_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
        />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render(){ // 데이터
    // console.log('did render')
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
