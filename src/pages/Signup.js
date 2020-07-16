import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Component } from 'react';
import firebase from '../Config';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import '../App.css';

class Signup extends Component {
    constructor(props) {
        super(props);

        // this.ref = firebase.firestore().collection('users');
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''

        }

        //this.saveData = this.saveData.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    onChange = (e) => {
        let state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    /*
        async saveData(e) {
    
            const { firstname, lastname, email, password } = this.state;
            e.preventDefault();
    
            firebase.auth().createUserWithEmailAndPassword(email, password).then(
                async (result) => {
                    firebase.firestore().collection('users').add({
                        firstname, lastname, id: result.user.uid, email, password
                    })
                }
            ).then(() => {
                this.setState({
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                });
                this.props.history.push('/');
            })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    // ...
                });
        }
    */
    async handleSubmit(e) {
        const { firstname, lastname, email, password } = this.state;
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(email, password).then(
            async (result) => {
                firebase.firestore().collection('users').add({
                    firstname, lastname, id: result.user.uid, email, password
                })
            }
        ).then(() => {
            this.setState({
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            });
            this.props.history.push('/');
        }).catch(error => {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(`${errorMessage} Please try again.`)
            // document.getElementById('1').innerHTML = `${errorMessage} Please try again.`
            console.log(errorCode, errorMessage);
        })
    }

    render() {
        const Signinsee = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'White',
            backgroundColor: '#ee1111',
            width: '100%',
            boxShadow: '0 5px 5px #808888',
            height: '10rem',
            paddingTop: '48px',
            opacity: '0.5',
            borderBottom: '5px solid green',
        }
        const { firstname, lastname, email, password } = this.state;
        return (
            <React.Fragment><div className='col-md-6 account-container mx-auto mt-5'>
                <CssBaseline />
                <Card style={Signinsee} >
                    <div><Typography component='h1' variant='h5'>
                        Sign Up to
                </Typography></div>

                    <button className="btn"><i className='fa fa-home'>WebChat</i></button>


                </Card>
                <Card className=''>
                    <h3 className='text-center'>Create new account</h3>

                    <form className='mx-2' noValidate onSubmit={this.handleSubmit}>
                        <TextField variant='outlined' margin='normal' required fullWidth id='first' name='firstname' label='First name' autoComplete='firstname' autoFocus value={firstname} onChange={this.onChange} />

                        <TextField variant='outlined' margin='normal' required fullWidth id='lastname' name='lastname' label='Last name' autoComplete='lastname' autoFocus value={lastname} onChange={this.onChange} />

                        <TextField variant='outlined' margin='normal' required fullWidth id='email' name='email' label='Email add' autoComplete='email' autoFocus value={email} onChange={this.onChange} />

                        <TextField variant='outlined' margin='normal' required fullWidth id='password' type='password' name='password' label='Password' autoComplete='password' autoFocus value={password} onChange={this.onChange} />

                        <div className='btn-container mx-auto my-2'>
                            <button className='btn btn-success'>Sign up</button>
                        </div>

                        <div className='error'>
                            <p id='1' style={{ color: 'red' }}></p>
                        </div>

                    </form></Card>

            </div></React.Fragment>
        );
    }
}

export default Signup;