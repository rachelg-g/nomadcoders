import React,  { Component } from 'react';
import './App.css';
import Movie from './Movie'

const movies = [
  {
    title: "The Lion King",
    poster: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjAo6T0wtvjAhVTPnAKHaIwAUUQjRx6BAgBEAU&url=http%3A%2F%2Fimg.movist.com%2F%3Fimg%3D%2Fx00%2F05%2F11%2F79_p1.jpg&psig=AOvVaw1W2bOeglkIY0jqX9AJNWUC&ust=1564537607634427",
  },
  {
    title: "Aladdin",
    poster: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj_wPn_wtvjAhWKE4gKHfakCOwQjRx6BAgBEAU&url=http%3A%2F%2Fimg.movist.com%2F%3Fimg%3D%2Fx00%2F05%2F11%2F49_p1.jpg&psig=AOvVaw0cWj3Xu6pVWkWdq2x7iBMV&ust=1564537631928647",
  },
  {
    title: "The King's Letters",
    poster: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiN4ZWSw9vjAhXFFIgKHeqQDogQjRx6BAgBEAU&url=http%3A%2F%2Fimg.movist.com%2F%3Fimg%3D%2Fx00%2F05%2F03%2F76_p1.jpg&psig=AOvVaw1S-9_01l8kR9C0RELgdzEi&ust=1564537670319653",
  },
  {
    title: "Spider-Man: Far From Home",
    poster: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiW3-uIw9vjAhXOE4gKHZnuB_gQjRx6BAgBEAU&url=http%3A%2F%2Fimg.movist.com%2F%3Fimg%3D%2Fx00%2F04%2F90%2F19_p1.jpg&psig=AOvVaw1w0qXLFU-PSI8SpRmWsF8v&ust=1564537650575421",
  }
]

class App extends Component {
  render(){
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
