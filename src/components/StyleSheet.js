import React from 'react'
import './myStyles.css'

function StyleSheet({primary}) {
    let isPrimary = primary ? 'primary' : ''
  return (
    <div className={`${isPrimary} font-show`}>StyleSheet</div>
  )
}

export default StyleSheet