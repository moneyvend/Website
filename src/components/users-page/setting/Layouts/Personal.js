/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
    Form,
    Col,
    Row,
    Button,
} from 'react-bootstrap';
import {
    AiFillEdit,
    AiOutlinePlusCircle,
} from 'react-icons/ai';
import PersonalInfo from './Personal.module.scss';
import profile from '../../../../utilities/images/man.jfif';

function Personal(props) {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [imgfile, setUploadimg] = useState([profile]);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        setUploadimg(URL.createObjectURL(event.target.files[0]));
    };
    return (
        <section>
            <div className={PersonalInfo.holdAll}>
                <div className={PersonalInfo.holdAlls}>
                    <div className={PersonalInfo.holdImage}>
                        <div className="holdCamera">
                            <div>
                                <span>
                                    <img src={imgfile} className={PersonalInfo.disImage} alt="profile" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={PersonalInfo.cameraFile}>
                        <label htmlFor="files" className="btn">
                            <AiFillEdit className={PersonalInfo.editMe} />
                        </label>
                        <input
                            type="file"
                            name="files"
                            accept="image/*"
                            id="files"
                            style={{ visibility: 'hidden' }}
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className={PersonalInfo.holdForm}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" value="Diamond" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" value="Kekule" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value="Diamondkekule98@gmail.com" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="Phone" placeholder="Phone" value="09098402605" />
                            </Form.Group>
                        </Row>
                        <div className={PersonalInfo.holdButin}>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
}

export default Personal;
