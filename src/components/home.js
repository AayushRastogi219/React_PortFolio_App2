import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {changestate} from '../store/action/action'

class Home extends Component {
  constructor(props){
    super(props)
    this.state={userName:''};
  }

  _changeData(){
      console.log('event called');
  }
  changeState(){
    // console.log('changeState called');
    // changestate();
    this.props.changeStateInReducer(this.state.userName);
    this.setState({userName:''});
  }
  handleTextBoxChange(event){
    let val = event.target.value;
    this.setState({userName:val});
  }

  render(){
      return(
          <div>
            <h1>Hello World {this.props.userName}</h1>
            <button onClick={this._changeData.bind(this)}>Change</button>
            <button onClick={this.changeState.bind(this)}>Change State</button><br/>
            <input type='text' onChange={this.handleTextBoxChange.bind(this)} value={this.state.userName} />
            <Link to='/about'>Go to About</Link>
          </div>
      )
  }
}
function mapStateToProps(state){
  return({userName: state.rootReducer.userName});
}
function mapDispatchToProps(dispatch){
  return({
    changeStateInReducer:(updatedUserName)=>{
      dispatch(changestate(updatedUserName));
    }
  });
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
