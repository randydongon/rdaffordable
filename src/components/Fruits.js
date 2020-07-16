import React from 'react'
import { Card } from 'react-bootstrap';

const Fruits = ({ title, subtitle, children }) => {
    return (
        <Card className='col-md-6 mx-auto my-2'>
            <h4>{title}</h4>
            <p>{subtitle}</p>
            <div className='text-justify' >{children}</div>
        </Card>
    );
}

export default Fruits;