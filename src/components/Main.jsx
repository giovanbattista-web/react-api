import { Axios } from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const actressEndpoint = 'https://lanciweb.github.io/demo/api/actresses/'
const Main = () => {
    // definiamo la variabile di stato per gli attori/attrici
    const [actress, setActress] = useState([]);

    // definizione della funzione che effettua la chiamata ajax
    const getActress = () => {
        axios.get(actressEndpoint).then((resp) => {
            console.log(resp.data);
        });
    };

    useEffect(() => getActress(), [])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>Hello World</div>
            </div>
        </div>
    )
}

export default Main;