import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const actressEndpoint = 'https://lanciweb.github.io/demo/api/actresses/'
const actorsEndpoint = 'https://lanciweb.github.io/demo/api/actors/'
const Main = () => {
    // definiamo la variabile di stato per gli attori/attrici
    const [actresses, setActresses] = useState([]);
    const [actors, setActors] = useState([]);

    // definizione della funzione che effettua la chiamata ajax
    const getActress = () => {
        axios.get(actressEndpoint).then((resp) => {
            console.log(resp.data);
            setActresses(resp.data)
        });
    };

    const getActors = () => {
        axios.get(actorsEndpoint).then((resp) => {
            console.log(resp.data);
            setActors(resp.data);
        });
    };

    useEffect(() => {
        getActress();
        getActors();
    }, []);

    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-12'>
                    <h2>Attrici</h2>
                </div>
            </div>
            <div className='row g-3'>
                {actresses.map((actress) => {
                    return (
                        <>
                            <div key={`actress- ${actress.id}`} className='col-12 col-md-6 col-lg-3'>
                                <div className='bg-black text-white'>
                                    <div className='card-image'>
                                        <img src={actress.image} className='img-fluid' />
                                    </div>
                                    <div className='card-info'>
                                        <h3>{actress.name}</h3>
                                        <p>
                                            <em>Birth Year: {actress.birth_year}</em>
                                            <br />
                                            Nationality: {actress.nationality}
                                        </p>
                                        <p>{actress.biography}</p>
                                        <p>{actress.awards}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className='row mt-4'>
                <div className='col-12'>
                    <h2>Attori</h2>
                </div>
            </div>
            <div className='row g-3'>
                {actors.map((actor) => {
                    return (
                        <>
                            <div key={`actor- ${actor.id}`} className='col-12 col-md-6 col-lg-3'>
                                <div className='bg-black text-white'>
                                    <div className='card-image'>
                                        <img src={actor.image} className='img-fluid' />
                                    </div>
                                    <div className='card-info'>
                                        <h3>{actor.name}</h3>
                                        <p>
                                            <em>Birth Year: {actor.birth_year}</em>
                                            <br />
                                            Nationality: {actor.nationality}
                                        </p>
                                        <p>{actor.biography}</p>
                                        <p>{actor.awards}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default Main;