import React, {Component, Fragment} from 'react';
import {BUTTONS} from '../../constants';
import Button from '../../components/Button/Button';
import ShowResult from '../../components/ShowResult/ShowResult';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    numbers: state.numbers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: () => dispatch({type: 'DELETE'}),
    addNumber: (event) => dispatch({type: 'ADD', numbers: event.target.value}),
    result: () => dispatch({type: 'RESULT'})
  };
};

class CalculatorMy extends Component {
  render() {
    return (
      <Fragment>
        <ShowResult value={this.props.numbers}/>
        {BUTTONS.map(value => (
          <Button key={value} value={value} click={this.props.addNumber}></Button>
        ))}
        <Button click={this.props.result} value='='></Button>
        <Button click={this.props.delete} value='Очистить'></Button>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorMy);