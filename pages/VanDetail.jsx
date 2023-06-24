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
        <>
            {
                van ? (<main className="van-detail">
                    <header>
                        <img src={ van.imageUrl } alt={van.name + " image"} />
                    </header>

                    <h2> {van.name} </h2>
                    <p> ${van.price}<span>/day</span></p>
                     <p> {van.description}</p>
                    
                </main> ):<h1>Loading...</h1>
            }
        </>
    )
}