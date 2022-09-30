import { useEffect, useState } from 'react';
import getPlanets from "./services/api";

import Planets from './components/Planets';

function App() {

    const [planets, setPlanets] = useState<any>([])

    useEffect(() => { getPlanets().then(res => setPlanets([res])) }, [])

    return (
        <div className='container' >
            <h1 className='text-center text-warning py-4' >SWAPI PLANETS</h1>
            <div className="row">
                {
                    planets.length !== 0 ?
                        planets[0].map((planet: any) => (
                            <div className="col" key={planet.name}>
                                <Planets planet={planet}/>
                            </div>
                        )) : 
                        <div
                            className='d-flex justify-content-center align-items-center'
                            style={{color: 'white',height: '100vh'}} 
                        >
                            <div className="spinner-border text-light" role="status">
                                <span className="sr-only">Cargando...</span>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default App