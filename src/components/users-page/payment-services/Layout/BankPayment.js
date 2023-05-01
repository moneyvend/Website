/* eslint-disable */
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import airtimeStyle from './ChooseAirtime.module.scss';

const BankPayment = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [fullname, setFullName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('succes');
    }

    return (
        <div className="form">
            <h2>Add Bank Account</h2>
            <form onSubmit={handleSubmit}>
                <Form.Select aria-label="Default select example" className="mb-3" value={name} onChange={(e) => setName(e.target.value)}>
                    <option value="Access Bank">Access Bank</option>
                    <option value="United Bank for Africa">United Bank for Africa UBA</option>
                    <option value="Key stone">Key stone</option>
                    <option value="Sterlin Bank">Sterlin Bank</option>
                </Form.Select>

                <div className="form-group">
                    <label htmlFor="number">Account Number</label>
                    <input type="number" name="number" className="form-control" placeholder='Enter Account Number' />
                </div>
                <button type="submit" className='btn btn-primary'>Add</button>
            </form>
        </div>
    );
};
export default BankPayment;
