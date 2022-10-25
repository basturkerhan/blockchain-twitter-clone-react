import React from 'react'

export const Button = (props) => {
  const twitter = "#3f72af";
  const white = "#d9d9d9";

  const style = {
    background: (props.outlined ? 'transparent' : twitter),
    color: (props.outlined ? twitter : white),
    border: (props.outlined ? `1px solid ${twitter}` : 'none'),
    padding: "16px",
    borderRadius: "25px",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
    outline: "0"
  }

  return (
    <button style={style}>{props.children}</button>
  )
}
