import React from 'react'
import PocketBase from 'pocketbase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Buyer() {

    const pb = new PocketBase(process.env.REACT_APP_URL);
    const navigate = useNavigate();

    const logout = () => {
        pb.authStore.clear();
        toast("Logged out succesfully 😢");
        navigate('/');
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <div></div>
                <h1>User Dashboard</h1>
                <button className='btn btn-outline-danger' onClick={logout} >Logout</button>
            </div>
            <ToastContainer />
        </div>
    )
}
