import React, { useState } from 'react';
import * as Components from "./Components";
import PocketBase from 'pocketbase';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function SlidingForm() {

    const pb = new PocketBase(process.env.REACT_APP_URL);

    const navigate = useNavigate();
    const [signIn, toggle] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('Buyer');

    const openDashboard = () => {
        if (pb.authStore.model.name === 'Seller') {
            navigate('/seller');
        } else if (pb.authStore.model.name === 'Buyer') {
            navigate('/buyer');
        } else if (pb.authStore.model.name === 'Warehouse') {
            navigate('/warehouse');
        }
    }

    async function login() {
        await pb.collection('users').authWithPassword(
            email,
            password,
        );

        if (pb.authStore.isValid) {
            toast("Logged in succesfully 🥳");
            openDashboard();
        } else {
            toast("Not able to log in 😒");
        }
    }

    async function signup() {
        const data = {
            "email": email,
            "name": name,
            "password": password,
            "passwordConfirm": password,
        };

        console.log(data);

        const record = await pb.collection('users').create(data);

        if (record) {
            toast("Signed up succesfully 🥳");
        } else {
            toast("Not able to sign up 😒");
        }

    }

    return (
        <div className='mt-5 mb-5' >
            <center>
                <Components.Container>
                    <Components.SignUpContainer signingIn={signIn}>
                        <Components.FormContainer>
                            <Components.Title>Create Account</Components.Title>
                            <Components.Select onChange={(e) => setName(e.target.value)} >
                                <option value='Buyer' >Buyer</option>
                                <option value='Seller' >Seller</option>
                                <option value='Warehouse' >Warehouse</option>
                            </Components.Select>
                            {name === "Seller" ? (
                                <>
                                    <Components.Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <Components.Input type="text" placeholder='GST Number' />
                                    <Components.Input type="text" placeholder='Company Name' />
                                    <Components.Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <Components.Input type="password" placeholder="Confirm Password" />
                                    <Components.Button onClick={signup} >Sign Up</Components.Button>
                                </>
                            ) : (
                                <>
                                    <Components.Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <Components.Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <Components.Input type="password" placeholder="Confirm Password" />
                                    <Components.Button onClick={signup} >Sign Up</Components.Button>
                                </>
                            )}

                        </Components.FormContainer>
                    </Components.SignUpContainer>
                    <Components.SignInContainer signingIn={signIn}>
                        <Components.FormContainer>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Components.Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Components.Button onClick={login} >Sign In</Components.Button>
                        </Components.FormContainer>
                    </Components.SignInContainer>
                    <Components.OverlayContainer signingIn={signIn}>
                        <Components.Overlay signingIn={signIn}>
                            <Components.LeftOverlayPanel signingIn={signIn}>
                                <Components.Title>Welcome Back!</Components.Title>
                                <Components.Paragraph>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(true)}>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>
                            <Components.RightOverlayPanel signingIn={signIn}>
                                <Components.Title>Hi there!</Components.Title>
                                <Components.Paragraph>
                                    Dont have a account yet? Sign up here
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Sign Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>
                        </Components.Overlay>
                    </Components.OverlayContainer>
                </Components.Container>
            </center>
            <ToastContainer />
        </div>
    )
}
