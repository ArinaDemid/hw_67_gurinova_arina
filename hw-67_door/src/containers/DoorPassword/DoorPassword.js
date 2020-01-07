import React, {Component, Fragment} from 'react';
import './DoorPassword.css';
import {BUTTONS} from '../../constants';
import Button from '../../components/Button/Button';
import ShowPassword from '../../components/ShowPassword/ShowPassword';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    password: state.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteLastNumber: () => dispatch({type: 'DELETE'}),
    addNumber: (event) => dispatch({type: 'ADD', password: event.target.value}),
    verifyPassword: () => dispatch({type: 'VERIFY'})
  };
};

class DoorPassword extends Component {
  render() {
    return (
      <Fragment>
        <ShowPassword value={this.props.password}/>
        {BUTTONS.map(value => (
          <Button key={value} value={value} click={this.props.addNumber}></Button>
        ))}
        <Button click={this.props.deleteLastNumber} value='<'></Button>
        <Button click={this.props.verifyPassword} value='E'></Button>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoorPassword);