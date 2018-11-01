import React, { Component } from 'react';
import {connect} from "react-redux";

const List =(props)=>{
        console.log(props)
        return ( 
          props.users.map((users) => 
             ( <h1 key={users} >{users}</h1>)
          )
         );
}

const mapStateToProp = (state)=>{
    return {
        users : state.list
    } 
}

export default connect(mapStateToProp)(List);