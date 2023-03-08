import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Welcome = () => (
    <Container>
        <h1>Hello, world!</h1>
        <p>
            Simple gallery retrieving from Unsplash API.
        </p>
            <Button variant="primary">Learn more</Button>
    </Container>
);

export default Welcome;