import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { getIndexList } from "../store/index";
import styles from './Index.css'
import withStyle from '../withStyle'

function Index(props) {
  const [count, setCount] = useState(1)
  useEffect(() => {
    if (!props.list.length)
      props.getIndexList()
  }, [])
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>hello, {props.title}</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>add</button>
      <hr />
      <ul>
        {props.list.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

Index.loadData = (store) => {
  return store.dispatch(getIndexList());
}

export default connect(
  state => ({ list: state.index.list }),
  { getIndexList }
)(withStyle(Index, styles))
