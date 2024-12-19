import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToList, removeToList } from '../../redux/actions/action';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';


export const MovieItem = (props) => {

    const nav = useNavigate(null)
    const dispatch = useDispatch()
    const { list } = useSelector(state => state)

    const addList = (props) => {
        dispatch(addToList(props))
        
        setTimeout(() => {
          
        }, 900)
    }

    const removeItemListAlert = (props) => {
        dispatch(removeToList(props))
    }


    const getMovieDetail = (id) => {
        nav(`/movie/${id}`)
    }

    return (
        <>
            <article className="movie-item">
                {props?.Poster === "N/A" ?
                    <img className="movie-item_poster"
                        src="https://media.comicbook.com/files/img/default-movie.png"
                        alt={props?.Title} />
                    : <img className="movie-item_poster"
                        src={props?.Poster} alt={props?.Title} />
                }

                <div className="movie-item_info">
                    <Link to={`/movie/${props.imdbID}`}><h3 className="movie-item_title">{props?.Title}</h3></Link>
                </div>


            </article>
            <div className='movie-item_action'>
                {list.find(item => item.imdbID === props.imdbID) ?
                    <button onClick={() => removeItemListAlert(props)} > <FavoriteIcon /></button> :
                    <button onClick={() => addList(props)}><FavoriteBorderIcon /></button>}
                <button onClick={() => { getMovieDetail(props.imdbID) }}><InfoIcon /></button>
            </div>
        </>

    )
}



