import React from 'react';
import Container from 'react-bootstrap/Container';
import './HomePage.css';

function HomePage() {
    return (
        <div className="homepage">
            <Container className="text-center d-flex flex-column justify-content-center align-items-center h-100">
                <h1 className="display-4 fw-bold">Welcome to Coffee Shop</h1>
                <p className="lead mt-3 mb-5">
                    Discover the best coffee blends from around the world. Start your day with the perfect cup!
                </p>

            </Container>
        </div>
    );
}

export default HomePage;
