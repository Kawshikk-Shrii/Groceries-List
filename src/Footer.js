import React from 'react'

const Footer = ({ length }) => {
    const day = new Date();
  return (
    <footer>
      <p>{length} List { length === 1 ? "item" : "items"}</p>
      <p>Copyright &copy; {day.getFullYear()}</p>
    </footer>
  )
}

export default Footer
