import React, { Component } from 'react';
import {connect} from 'react-redux';
import {clearItems, loadItems} from '../actions/index'

export function Items(props) {
  return (<div>
    <button onClick = {props.load}>Load</button>
    <button onClick = {props.clear}>Clear</button>
    <TodoList {...props}/>
    <AddItem />
  </div>)
}

function TodoList(props) {
  if(!props.items.length) {
    return <div></div>
  }
  return props.items.map(item => {
    return (<div>
      <p>{item.task} - {item.done ? 'Done': 'Pending'}</p>
      </div>)
  })

}

function mapStateToProps(state) {
  return state;
}

function mapDispatchAction(dispatch) {
  return {
    load: () => dispatch(loadItems()),
    clear: () => dispatch(clearItems())
  }
}

export default connect(mapStateToProps, mapDispatchAction)(Items);
