import React from 'react';
import { Image } from 'react-bootstrap';
import './OurTeam.css';

const SingleMember = ({team}) => {
    return (
        <div className='team-member'>
            <Image src={team.img} alt="..." />
            <h5>{team.name}</h5>
        </div>
    );
};

export default SingleMember;