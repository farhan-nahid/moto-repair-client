import React from 'react';
import { Image } from 'react-bootstrap';
import spinner from '../../../images/loader.gif';

const Spinner = () => {
    return (
        <section className="vh-100 vw-100 d-flex justify-content-center align-items-center">
        <Image src={spinner} />
    </section>
    );
};

export default Spinner;