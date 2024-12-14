import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './ProductDetails.css'; // Import the CSS file

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(`Fetching product details for ID: ${id}`);
        fetch(`https://api.sampleapis.com/coffee/hot/${id}`)
            .then((data) => {
                if (!data.ok) {
                    throw new Error('Network response was not ok');
                }
                return data.json();
            })
            .then((result) => {
                console.log('Fetched product details:', result);
                setProduct(result);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
                setError(error.message);
            });
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-details-page"> {/* Apply the CSS class */}
            <Card style={{ maxWidth: 600, margin: '50px auto' }}>
                <Card.Img variant="top" src={product?.image || 'default-image-url.jpg'} height={'440'} />
                <Card.Body>
                    <Card.Title>{product?.title || 'No title available'}</Card.Title>
                    <Card.Text>{product?.description || 'No description available'}</Card.Text>
                    <Card.Text><strong>Ingredients:</strong> {Array.isArray(product?.ingredients) ? product.ingredients.join(', ') : 'N/A'}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductDetails;