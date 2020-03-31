import { ADD_MOVIE, DELETE_MOVIE, GET_KEYWORD, GET_RATING, EDIT_MOVIE } from "../Actions/types"
import { v4 as uuidv4 } from 'uuid'


const initState = [{
    id: uuidv4(),
    title: "Le Dernier maître de l'air",
    year: "2010",
    image: "https://occ-0-55-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa5wHCHzhjCPGQifwn3YCvFvMKuPZLSvQNB9DJ4LLNE60l_bTyRyN51W2HXJnBnwNyWwd3HZBuO6mHDrgPmSucveqBI.jpg?r=2cb",
    rating: 3,
    description: 'kskskkssksjhdhhdhdhskdshdkshdkshdsdhkhdkshcbcbcbcbcbcbcbcbcbcbcbxjxjjxjxjxjxjxxx'
},
{
    id: uuidv4(),
    title: "Mowgli",
    year: "2018",
    image: "https://occ-0-55-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUNK79CkWE_H9y3SfktKeR4AZIteyT6SBVOlocAqW8ZjWxJRnkuIr-edO-axfM4tKrAf29CWqtlUhV6Z3ZPE8KPz44fpt7ob9tVbiONtxyaSYfaaB1GUM7os97Xw.jpg?r=cec",
    rating: 5,
    description: 'kskskkssksjhdhhdhdhskdshdkshdkshdsdhkhdkshcbcbcbcbcbcbcbcbcbcbcbxjxjjxjxjxjxjxxx'
},
{
    id: uuidv4(),
    title: "The Witcher",
    year: "2019",
    image: "https://occ-0-778-300.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYCXCfVkAFjsSQJGuFsXPb7ANJ4GKjDYZU85JaiQ-qDc1QJJCH_55dJJ1RWTdlo62fLFpBLMWrM4JunTyNQbGZm0_iKOwdU91su6fYovYxIWxgtI1KJzhdbWq8ta.jpg?r=382",
    rating: 4,
    description: 'kskskkssksjhdhhdhdhskdshdkshdkshdsdhkhdkshcbcbcbcbcbcbcbcbcbcbcbxjxjjxjxjxjxjxxx'
}]





const MovieReducer = (
    state = { movies: initState, keyword: "", rating: 1 },
    action) => {
    switch (action.type) {

        case ADD_MOVIE:
            return { ...state, movies: state.movies.concat(action.payload) };
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(el => el.id !== action.payload)
            };
        case EDIT_MOVIE:
            return {
                ...state, movies: state.movies.map(el => el.id === action.payload.id ? { ...el, ...action.payload.upadatedMovie } : el )
            };
        case GET_KEYWORD:
            return { ...state, keyword: action.payload };
        case GET_RATING:
            return { ...state, rating: action.payload };
        default:
            return state;
    }

}
export default MovieReducer;
