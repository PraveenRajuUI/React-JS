import {SET_DATA_FROM_SERVICE, ADD_TILE, REMOVE_TILE} from '../actions/actionTypes';
const initialState = {};
const sd = {};

export default function dataReducer(state = initialState, action) {
    let newState = Object.assign([], state);
    switch (action.type) {
        case SET_DATA_FROM_SERVICE:

            console.log(action.payload);
            return action.payload;
            break;
        case ADD_TILE:
            newState
                .recommendations
                .map((card) => {
                    card.isFav = card.id === action.tile.id
                        ? true
                        : card.isFav;
                });
            
            if (newState.recommendations.find((d) => {
                return d.id === action.tile.id
            })) {
                return Object.assign({}, state, {
                    recommendations: [
                        ...state.recommendations
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    recommendations: [
                        ...state.recommendations
                    ]
                })
            }
            break;
        case REMOVE_TILE:
            newState
                .recommendations
                .map((card) => {
                    card.isFav = card.id === action.tile.id
                        ? false
                        : card.isFav;
                });
            return Object.assign({}, state, {
                recommendations: [
                    ...state.recommendations
                ]
            })
            break;
        default:
            return state;
            break;
    }
}