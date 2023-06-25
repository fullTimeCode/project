import React from 'react'
import { Link } from 'react-router-dom'

const HostVans = () => {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch('/api/host/vans')
            .then(resp => resp.json())
            .then(data => setVans(data.vans))
    }, [])

    const hostVansEl = vans.map(van => (<Link to={`/host/vans/${van.id}`} key={van.id} className='host-van-link'  >
        <div key={van.id} className="single-van-container">
            <div className="host-van-image">
                <img src={van.imageUrl} alt="van picture"  />
            </div>
            
            <div className="van-info">
                <h3 className="van-title">
                    {van.name}
                </h3>
                <p>${van.price}<span>/day</span> </p>
            </div>
        </div>
    </Link>))

  return (
      <div><h1>Your Vans</h1>
          {   vans.length > 0 ?
              hostVansEl : <p>Loading...</p>
          }    
    </div>
  )
}

export default HostVans