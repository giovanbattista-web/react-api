import { Axios } from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const actressEndpoint = 'https://lanciweb.github.io/demo/api/actresses/'
const Main = () => {
    // definiamo la variabile di stato per gli attori/attrici
    const [actresses, setActresses] = useState([]);

    // definizione della funzione che effettua la chiamata ajax
    const getActress = () => {
        axios.get(actressEndpoint).then((resp) => {
            // console.log(resp.data);
            setActresses(resp.data)
        });
    };

    useEffect(() => getActress(), []);

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
                            <div className='col-12 col-md-6 col-lg-3'>
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
        </div>
    );
};

export default Main;