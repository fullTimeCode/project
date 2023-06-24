import React from 'react'
import { Link, Outlet  } from "react-router-dom";
const HostLayout = () => {
  return (
      <>
        <header className="">
            <nav>
                <Link to="/host">Host</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
        </header>
        <h1> Host </h1>
        <Outlet  />
      </>
  )
}

export default HostLayout