'use clinet'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

interface IProps {
    showModelLogin: boolean;
    setShowModelLogin: (value: boolean) => void
}

function LoginInModel(props: IProps) {
    const { showModelLogin, setShowModelLogin } = props

    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("")

    const handleSubmit = () => {

    }

    const handleCloseModel = () => {
        setUserName("");
        setPassword("");
        setShowModelLogin(false)
    }

    return (
        <>
            <Modal
                show={showModelLogin}
                onHide={() => handleCloseModel()}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Đăng Nhập</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>User Name:</Form.Label>
                            <Form.Control type="UserName" placeholder="UserName..."
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="Password" placeholder="Password..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleSubmit()}>Đăng nhập</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default LoginInModel;