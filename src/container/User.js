import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { getUserInfo } from "../store/user";

function User(props) {
  return (
    <div>
      <h1>hello, {props.userinfo.name}, this is user</h1>
    </div>
  )
}

User.loadData = (store) => {
  return store.dispatch(getUserInfo());
}

export default connect(
  state => {
    return { userinfo: state.user.userinfo }
  },
  { getUserInfo }
)(User)
