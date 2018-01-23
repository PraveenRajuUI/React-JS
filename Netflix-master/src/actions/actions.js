import DataService from './services/ServiceApi';
import {
    SET_DATA_FROM_SERVICE,
    REMOVE_TILE,
    ADD_TILE
} from './actionTypes';

export function loadData() {
    return function(dispatch) {
        return DataService.getData().then(
            function(response) {
                console.log(response);
                dispatch(loadDataSuccess(response));
            },
            function(e) {
                console.log("Error" + e);
            }
        )
    }
}

function loadDataSuccess(response) {
    // const mylist = response.mylist;
    const recommendations = response.recommendations;
    let payload = {};
    // payload.mylist = mylist;
    payload.recommendations = recommendations;
    return {
        type: SET_DATA_FROM_SERVICE,
        payload
    };
};

export function addTile(tile) {
    console.log(tile);
    return function(dispatch) {
        dispatch({
            type: ADD_TILE,
            tile
        })
    }
}

export function removeTile(tile) {
    console.log(tile);
    return function(dispatch) {
        dispatch({
            type: REMOVE_TILE,
            tile
        })
    }
}
