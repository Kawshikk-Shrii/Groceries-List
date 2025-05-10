import React from 'react'

const Footer = () => {
    const day = new Date();
  return (
    <footer>
      <p>Copyright &copy; {day.getFullYear()}</p>
    </footer>
  )
}

export default Footer
