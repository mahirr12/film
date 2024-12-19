import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, searchIntialValueAction } from '../../redux/actions/action';
import './style.css';
import { useNavigate } from 'react-router-dom';


export const SearchBox = (props) => {
    
    const [searchLine, setSearchLine] = useState("")
    const dispatch = useDispatch()
    const { firstsearchLine } = useSelector(state => state)
    const nav = useNavigate()

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${firstsearchLine[0]}&apikey=f11ab7c0`)
            .then(res => res.json())
            .then(apiData => {
                dispatch(getMovies(apiData?.Search))
            })
    }, [dispatch, firstsearchLine])

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        
        fetch(`https://www.omdbapi.com/?s=${searchLine}&apikey=f11ab7c0`)
            .then(res => res.json())
            .then(apiData => {
                if (apiData?.Search) {
                    dispatch(getMovies(apiData?.Search))
                }
            })
            .catch(err => console.log(err))
            .finally(() => {
                props.datadom.current.style.top = "-100vh";
                dispatch(searchIntialValueAction(searchLine))
                nav("/")
            })
    }
    return (
        
            <form className="search-form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-label" id='search-input'>
                    Search movie by name:
                    <input
                        type="text"
                        id='search-input'
                        className="search_input"
                        placeholder="Search....."
                        onChange={(e) => { setSearchLine(e.target.value) }} />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                >
                    Search
                </button>
            </form>

            
    )
}