import React, { Component } from 'react';
import {connect} from 'react-redux';
import {clearItems, loadItems} from '../actions/index'
import Get from 'lodash/get';

export function Items(props) {
  return (<div>
    <button onClick = {props.load}>Load</button>
    <button onClick = {props.clear}>Clear</button>
    <TodoList {...props}/>
  </div>)
}

function TodoList(props) {
  if(Get(props, 'items.length', null) == null) {
    return <div></div>
  }
  return props.items.map(item => {
    return (<div key={item.task}>
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
