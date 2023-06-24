import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
    const [van, setVan] = React.useState({})
    const params = useParams()

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
        .then( data => setVan(data.vans))
    }, [params])
    
    return (
        <main className="detail-page">
            {
                van ? (<article className="detail-article">
                    <header className="detail-header">
                        <h2> {van.name} </h2>
                        <img className="detail-image" src={van.imageUrl} alt={`${van.name} image`} />
                    </header>

                    <div className="detail-body">
                        <p> ${van.price}<span>/day</span></p>
                        <p> {van.description}</p>
                    </div>

                   
                    
                    
                </article> ):<h1>Loading...</h1>
            }
        </main>
    )
}