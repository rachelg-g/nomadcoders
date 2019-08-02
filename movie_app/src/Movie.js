import React, { Component } from 'react';
import PropsType from 'prop-types';
import './Movie.css';

// 꼭 기억하기 
// Component > render > return > JSX(리액트로 작성하는 html)

class Movie extends Component {

    // 가져올 정보가 문자라는 것을 체크
    // isRequired: movie 컴포넌트는 title과 poster이라는 porp을 제공하는 것이 필수로 설정
    static propsType = {
        title: PropsType.string.isRequired, 
        poster: PropsType.string.isRequired,
    }

    render(){
        // console.log(this.props)
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {

    static propsType = {
        poster: PropsType.string.isRequired,
    }

    render(){
        // console.log(this.props)
        return(
            <img src={this.props.poster} />
        )
    }
}
export default Movie