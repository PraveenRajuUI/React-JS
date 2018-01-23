import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class TilesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data
    })
  }
  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={12} className="col">
          <label htmlFor="tops" className="header">{this.props.header}
            {
                !!this.props.recommendations ? (<sup>{this.state.data ? this.state.data.length : 0}</sup>) : ''
            }
          </label>
          <ul id="tops">
            {
              this.state.data.length ? this.state.data.map((d, i) => {
                return ( (this.props.isMyList && d.isFav ) || (!this.props.isMyList && !d.isFav) ) &&  (
                  <li key={i} tabIndex="-1">
                    <div className="tile" tabIndex="0">
                      <img width="100%" src={d.img} tabIndex="-1" />
                      <button tabIndex="1" onClick={() => { this.props.onClick(d) }} className={'button button-primary'} data-toggle="tooltip" title={!this.props.my ? 'Add to favorites' : 'Remove from favorites'}>
                        {this.props.buttonLabel}
                      </button>
                    </div>
                  </li>
                )
              }) : <div className="empty">{!this.props.isMyList ? 'Please add some recommendations' : `May be it's time pick some favs :P`}</div>
            }
          </ul>
        </Col>
      </Row>
    );
  }
}

TilesList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array,
  isMyList: PropTypes.bool,
  button: PropTypes.string,
  onClick: PropTypes.func
}
