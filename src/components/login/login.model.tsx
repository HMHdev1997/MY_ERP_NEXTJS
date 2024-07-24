'use clinet'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import useSWR, { Fetcher, mutate } from "swr";
import { toast } from 'react-toastify';

interface IProps {
    showModelLogin: boolean;
    setShowModelLogin: (value: boolean) => void;
    onLoginSuccess: () => void;
}

function LoginInModel(props: IProps) {
    const { showModelLogin, setShowModelLogin, onLoginSuccess } = props

    const [UserCode, setUserName] = useState<string>("");
    const [Password, setPassword] = useState<string>("");

    const handleSubmit = async () => {
        if (!UserCode) {
            toast.error("Not empty userName !");
            return;
        }
        if (!Password) {
            toast.error("Not empty password !");
            return;
        }

        try {
            const response = await fetch('https://localhost:44313/api/Login/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ UserCode, Password })
            }).then(response => {
                if (!response.ok) {
                    return response.text().then(errorText => {
                        (` ${errorText}`);
                    });
                }
                return response.json();
            }).then(res => {
                if (res) {
                    toast.success("Đăng nhập thành công!");
                    localStorage.setItem('token', res);
                    handleCloseModel();
                    onLoginSuccess();
                    // Tùy thuộc vào cách bạn xử lý dữ liệu, có thể cần thêm các bước khác ở đây
                    // Ví dụ: lưu token vào localStorage, cập nhật trạng thái người dùng, v.v.
                }
                else {
                    toast.error("Login failed. Please try again.");
                }
            });
        } catch (error) {
            // Xử lý lỗi mạng hoặc lỗi khác
            //toast.error(`Network error: ${error.message}`);
        }
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
                                value={UserCode}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="Password" placeholder="Password..."
                                value={Password}
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