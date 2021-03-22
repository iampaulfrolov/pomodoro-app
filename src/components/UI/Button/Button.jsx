import React from 'react'
import c from './Button.module.sass'
import icon from '../../../assets/Settings-icon.svg'

// eslint-disable-next-line react/prop-types
export const Button = ({settings, setSettings}) => {
  return (
    <button onClick={() => setSettings(!settings)}>
      <img
        /* eslint-disable-next-line no-undef */
        src={`${process.env.PUBLIC_URL}${icon}`}
        className={c.icon}
        alt=""
      />
    </button>
  )
}
