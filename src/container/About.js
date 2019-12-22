import React from 'react'
import withStyle from '../withStyle'
import styles from './About.css'

function About(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About</h1>
        </div>
    )
}

export default withStyle(About, styles)
