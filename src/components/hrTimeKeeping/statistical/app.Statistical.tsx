'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import x from '@/styles/hrTimeKeeping/TimeKeeping.module.css';
import y from '@/styles/app.module.css';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { FaXmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';


const Statistical = () => {

    const [inputFromDate, setFromDate] = useState('');
    const [inputToDate, setToDate] = useState('');

    const handleClearFromDate = () => {
        setFromDate('');
    };

    const handleClearToDate = () => {
        setToDate('');
    }

    return (
        <>
            <Form className={x['container']}>
                <Row>
                    <Form.Group className="col-md-3" >
                        <Form.Label>Từ ngày: </Form.Label>
                        <InputGroup >
                            <Form.Control className={`${y.input}`} type="date" lang="vi" id="FromDate" placeholder="ngày bắt đầu" value={inputFromDate} onChange={(e) => setFromDate(e.target.value)} />
                            <Button variant="outline-secondary" id="clearText" onClick={() => handleClearFromDate()}><FaXmark className={`${y.iconButton}`} /> </Button>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="col-md-3" >
                        <Form.Label>Đến Ngày</Form.Label>
                        <InputGroup >
                            <Form.Control className={`${y.input}`} type="date" lang="vi" id="EndTime" placeholder="Đến Ngày ..." value={inputToDate} onChange={(e) => setToDate(e.target.value)} />
                            <Button variant="outline-secondary" id="clearText" onClick={() => handleClearToDate()}><FaXmark className={`${y.iconButton}`} /> </Button>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="col-md-1 d-flex align-items-end" >
                        <Button variant="primary"><FaSearch style={{ marginBottom: '3px' }} /> Tìm kiếm</Button>
                    </Form.Group>
                </Row>
            </Form>

            <Form className={x['contentHeader']}>
                <h4>Dữ liệu chấm công từ 01/07/2024 đến 31/07/2024</h4>

                <Table>

                </Table>
            </Form>

        </>

    );
}

export default Statistical;