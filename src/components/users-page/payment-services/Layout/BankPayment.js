/* eslint-disable */
import React from 'react';

const BankPayment = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('succes');
    }

    return (
        <div className="form">
            <h2>Add Bank Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Bank Name</label>
                    <input type="text" name="name" className="form-control" placeholder='Enter Bank Name' />
                </div>

                <div className="form-group">
                    <label htmlFor="number">Account Number</label>
                    <input type="number" name="number" className="form-control" placeholder='Enter Account Number' />
                </div>

                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" name="fullname" className="form-control" placeholder='Enter Full Name' />
                </div>

                <div className="row">
                    <div className="form-group">
                        <label htmlFor="expiry">Expiry</label>
                        <input type="date" name="expiry" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input type="number" name="cvv" className="form-control" placeholder='Enter cvv' />
                    </div>
                </div>
                <button type="submit" className='btn btn-primary'>Add</button>
            </form>
        </div>
    );
};
export default BankPayment;
