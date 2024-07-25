'use client'
import NavLink from 'react-bootstrap/NavLink'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TabContainer, TabContent, TabPane, Nav, Row, Col } from 'react-bootstrap';
import x from '@/styles/hrTimeKeeping/TimeKeeping.module.css'
import Statistical from '@/components/hrTimeKeeping/app.Statistical'

const TimeKeeping = () => {


    return (
        <div>
            <h4 className={x.text} >Thống kê chấm công</h4>
            <div>
                <TabContainer defaultActiveKey="first">
                    <Nav variant="tabs" defaultActiveKey="link-1">
                        <Nav.Item>
                            <NavLink eventKey="first" >Thống kê</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Chấm công Online</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3">Tăng ca</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="4">làm bù</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="5">Gán ca</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="6">Thông báo bảng lương </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <TabContent>
                        <TabPane eventKey="first">
                            <Statistical />
                        </TabPane>
                        <TabPane eventKey="second">
                            <h3>Tab 2 Content</h3>
                            <p>This is the content of Tab 2.</p>
                        </TabPane>

                    </TabContent>
                </TabContainer>
            </div>



        </div>
    )
}

export default TimeKeeping;