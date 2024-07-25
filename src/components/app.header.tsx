'use client'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import x from '@/styles/app.module.css'
import Link from 'next/link';
import { FaHouse } from "react-icons/fa6";
import { FaCog, FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import useSWR, { Fetcher, mutate } from "swr";

import { useState, useEffect } from 'react';
import LoginInModel from "../components/login/login.model";

const AppHeader = () => {

    const [showModelLogin, setShowModelLogin] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };


    return (
        <div>
            <Navbar bg="secondary" data-bs-theme="light">
                <Container className={x['myContainer']}>
                    <Link href={"/"}> <FaHouse className={`${x.iconLarge}`} /></Link>
                    <Link href={"/"} className={`${x.textBrand}`}> My - ERP </Link>
                    <Dropdown>
                        <Dropdown.Toggle variant="link">
                            <FaCog className={`${x.iconLarge}`} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu-end">
                            {isLoggedIn ? (
                                <>
                                    <Dropdown.Item as={Link} href="/hrEmployee"> <FaUser /> Tài khoản</Dropdown.Item>
                                    <Dropdown.Item onClick={handleLogout}> <FaSignOutAlt /> Đăng xuất  </Dropdown.Item>
                                </>
                            ) : (
                                <>
                                    <Dropdown.Item onClick={() => setShowModelLogin(true)}>  Đăng nhập <FaSignInAlt /> </Dropdown.Item>
                                </>
                            )}

                        </Dropdown.Menu>
                    </Dropdown>


                </Container>

            </Navbar>
            <LoginInModel showModelLogin={showModelLogin} setShowModelLogin={setShowModelLogin} onLoginSuccess={handleLoginSuccess} />
        </div>
    )
}

export default AppHeader;