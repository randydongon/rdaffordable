import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const Login = () => {
    return (
        <Card className='login-container mx-2 text-center'>
            <h4>login window</h4>
            <form>
                <div className='form-group'>
                    <input type="text" placeholder='Login ID' />
                    <br />
                    <input type="text" placeholder='Password' className='my-2' />
                </div>
                <div>
                    <button type='submit' className='btn btn-success my-2' >Login</button>
                </div>
            </form>
        </Card>
    );
}

export default Login;