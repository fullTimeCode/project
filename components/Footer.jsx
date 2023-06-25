import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
      <footer>
      <p>&#169; {year} #EXCITINGVANLIFE</p>
    </footer>
  )
}

export default Footer