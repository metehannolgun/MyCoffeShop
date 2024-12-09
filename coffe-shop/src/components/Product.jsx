import React from 'react'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { data } from 'react-router-dom';

function Product({ category }) {

    const [products, setProducts] = useState([]);
    const apiUrls = {
        hot: "https://api.sampleapis.com/coffee/hot",
        ice: "https://api.sampleapis.com/coffee/iced"
    };
    useEffect(() => {
        //api call

        if (category && apiUrls[category]) {
            fetch(apiUrls[category])
                .then((data) => data.json())
                .then((result) => setProducts(result));
        }
    }, [category]);



    // maps ile apideki verileri cardlara aktardık
    const cards = products.map(product => (
        <div className='col-md-3' key={product.id}>
            <Card style={{ maxWidth: 345, marginBottom: '50px' }}>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} height={'440'} />
                </div>
                <Card.Body>
                    <div className='text-center'>
                        <Card.Title>{product.title}</Card.Title>
                    </div>
                    <Card.Text variant='body2' style={{ fontFamily: 'monospace', }}>
                        {product.ingredients}
                    </Card.Text>

                </Card.Body>
            </Card>


        </div>
    ))



    return (
        <>
            <h1>{category === 'hot' ? 'Hot Coffes' : 'Iced  Coffes'}</h1>
            <div className='row'>
                {cards}
            </div>
        </>
    )
}

export default Product