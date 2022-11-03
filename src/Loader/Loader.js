/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import './Loader.scss';

export default function Loader() {
    return (
        <section>
            <div className="holdLoader">
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    );
}
