import { createRef } from 'react';
import { useScreenshot, createFileName } from "use-react-screenshot";

import Tatooine from '../assets/Tatooine.png';
import Alderaan from '../assets/Alderaan.png';
import Yavin4 from '../assets/Yavin4.png';
import Hoth from '../assets/Hoth.png';
import Dagobah from '../assets/Dagobah.png';
import Bespin from '../assets/Bespin.png';
import Endor from '../assets/Endor.png';
import Naboo from '../assets/Naboo.png';
import Coruscamt from '../assets/Coruscant.png';
import Kamino from '../assets/Kamino.png';

import { setImage } from '../utilities/setImages';

function Planets({planet}:any) {
    const imgs:string[] = [Tatooine,Alderaan,Yavin4,Hoth,Dagobah,Bespin,Endor,Naboo,Coruscamt,Kamino]

    const img:string = setImage(planet.name, imgs)

    const ref:any = createRef();
    const [image, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    });

    const download = (image:any, { name = "img", extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
    };

    const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

    return (
        <div className="card my-3" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt={planet.name} width="286"/>
            <div className="card-body" style={{backgroundColor: "#333", borderRadius: "0 0 5px 5px"}}>
                <h5 className="card-title" style={{color: "#fff"}}>{planet.name}</h5>
                <p className="card-text">
                    <strong style={{color: "#FFE300"}}>Climate</strong> 
                    <span className='fw-light' style={{color: "#fff"}}> {planet.climate}</span>
                </p>
                <p className='card-text'>
                    <strong style={{color: "#FFE300"}}>Type</strong> 
                    <span className='fw-light' style={{color: "#fff"}}> {planet.terrain}</span>
                </p>
                <p className="card-text">
                    <strong style={{color: "#FFE300"}}>Population</strong> 
                    <span className='fw-light' style={{color: "#fff"}}> {planet.population}</span>
                </p>
                <p className='card-text'> 
                    <strong style={{color: "#FFE300"}}>Diameter</strong> 
                    <span className='fw-light' style={{color: "#fff"}}> {planet.diameter}</span>
                </p>
                <div className="d-flex justify-content-around">
                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" title='Save Image'>
                        <i className="fa-solid fa-floppy-disk"></i>
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" >
                            <div className="modal-content" style={{backgroundColor: "#333", color: 'white', borderRadius: "0 0 5px 5px"}}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Detalle</h5>
                                </div>
                            <div className="modal-body" ref={ref} style={{backgroundColor: "#333"}}>
                                <h3 className='text-center text-warning'>{planet.name}</h3>
                                <img src={img} className="card-img-top" alt={planet.name} width="286"/>
                            </div>
                                <div className="modal-footer" >
                                    <button type="button" className="btn btn-light" onClick={downloadScreenshot}>Descargar Imagen</button>
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <a href={`https://starwars.fandom.com/es/wiki/${planet.name}`} target='_blank' className="btn btn-warning" title='More Info'>
                        <i className="fa-solid fa-circle-info"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Planets