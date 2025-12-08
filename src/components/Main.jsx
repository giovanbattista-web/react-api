import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const actressEndpoint = 'https://lanciweb.github.io/demo/api/actresses/'
const actorsEndpoint = 'https://lanciweb.github.io/demo/api/actors/'
const Main = () => {
    // definiamo la variabile di stato per gli attori/attrici
    const [actresses, setActresses] = useState([]);
    const [actors, setActors] = useState([]);

    // bonus 2
    const [cast, setCast] = useState([]);

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

    useEffect(() => {
        setCast([...actresses, ...actors]);
    }, [actresses, actors]);

    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-12'>
                    {/* <h2>Attrici</h2> */}
                    <h2>Cast</h2>
                </div>
            </div>
            <div className='row g-3'>
                {/* {actresses.map((actress) => { */}
                {cast.map((person) => {
                    return (
                        <>
                            <div key={`person- ${person.id}`} className='col-12 col-md-6 col-lg-3'>
                                <div className='bg-black text-white'>
                                    <div className='card-image'>
                                        <img src={person.image} className='img-fluid' />
                                    </div>
                                    <div className='card-info'>
                                        <h3>{person.name}</h3>
                                        <p>
                                            <em>Birth Year: {person.birth_year}</em>
                                            <br />
                                            Nationality: {person.nationality}
                                        </p>
                                        <p>{person.biography}</p>
                                        <p>{person.awards}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            {/* <div className='row mt-4'>
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
                                        <p>{actor.awards.join(", ")}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div> */}
        </div>
    );
};

export default Main;