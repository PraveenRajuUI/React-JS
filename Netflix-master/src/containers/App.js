import React, {
    PropTypes
} from 'react';
import '../stylesheets/style.css';
import {
    Grid
} from 'react-bootstrap';
import TilesList from '../components/TilesList';
import data from '../data/data.json';
import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux';
import {
    loadData,
    removeTile,
    addTile
} from '../actions/actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = data;
        console.log('==>',this.state);
        this.addTitle = this.addTitle.bind(this);
        this.removeTitle = this.removeTitle.bind(this);
    }

    componentWillMount() {
        this.props.loadData();
    }
    componentWillReceiveProps() {
        console.log("here");
    }
    removeTitle(tile) {
        this.props.removeTile(tile);
    }
    addTitle(tile) {
        this.props.addTile(tile);
    }
    render() {
        console.log(this.props);
        if (!this.props.recommendations) return null;
        return ( <
            Grid fluid >
            <TilesList data = { this.props.recommendations } button = "fa-minus fav" buttonLabel="REMOVE" isMyList={true} header = "My List" onClick = {(title) => {
                this.removeTitle(title)
            }}/>
            <TilesList data = { this.props.recommendations } button = "fa-heart list" buttonLabel="ADD" isMyList={false} header = "Recommendations"
                          onClick = {
                              (title) => {
                                  this.addTitle(title)
                              }
                          }/>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        myList: state.dataReducer.mylist,
        recommendations: state.dataReducer.recommendations
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: bindActionCreators(loadData, dispatch),
        removeTile: bindActionCreators(removeTile, dispatch),
        addTile: bindActionCreators(addTile, dispatch)
    }

}

App.propTypes = {
    myList: PropTypes.array,
    recommendations: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
