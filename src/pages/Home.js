import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fruits from '../components/Fruits';
import data from '../components/data';
import { Card } from 'react-bootstrap';
import Login from '../pages/Login'


const handleClick = (e) => {
    e.preventDefault()
    console.log('login')
}

function fruits() {
    return data.map((item, index) => <Fruits key={index}
        title={item.name}
        subtitle={`What are the benefits from ${item.name}`}
        children={<div>
            <div className='align-items-center text-center my-2'>
                <img src={item.url} alt='fruit' className='img-fluid' style={{ width: '25rem', height: '20rem' }} />
            </div>
            <h4>Benefits</h4>
            {item.benefits.map((item, index) => <p key={index}><span>{index + 1}. </span>{item}</p>)}
        </div>}

    />)
}
const Home = () => {

    return (
        <div>
            <div className='col-md-6 mx-auto'>
                <h3 className='text-center my-5'>What happens to your body when you eat fruits and vegetables daily</h3>
            </div>
            {fruits()}

            <Login />
        </div>
    );
}

export default Home;

// <Fruits className='img-fluid'
//     title='Papaya'
//     subtitle='What are the health benefits of papaya?'
//     children={<div>
//         <img src={data.avocado.url} alt='fruit' className='img-fluid' />
//         {data.avocado.benefits.map((item, index) => <span key={index}>{<br />}{index + 1} {item}</span>)}
//     </div>}
// />