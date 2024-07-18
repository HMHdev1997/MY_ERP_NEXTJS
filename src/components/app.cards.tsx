'use client'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import x from '@/styles/cards.module.css'

const Cards = () => {
    return (
        <div className={`${x.formCards}`}>
            <div className={`${x.itemCards}`}>
                <Image className="card-img-top" src="../images/100px180.svg" alt="Card image cap" width={300} height={180} />
                <div>
                    <h5>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Chi tiết</a>
                </div>
            </div>

            <div className={`${x.itemCards}`}>
                <Image className="card-img-top" src="../images/100px180.svg" alt="Card image cap" width={300} height={180} />
                <div >
                    <h5>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Chi tiết</a>
                </div>
            </div>

            <div className={`${x.itemCards}`}>
                <Image className="card-img-top" src="../images/100px180.svg" alt="Card image cap" width={300} height={180} />
                <div>
                    <h5>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Chi tiết</a>
                </div>
            </div>

            <div className={`${x.itemCards}`}>
                <Image className="card-img-top" src="../images/100px180.svg" alt="Card image cap" width={300} height={180} />
                <div>
                    <h5>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Chi tiết</a>
                </div>
            </div>

            <div className={`${x.itemCards}`}>
                <Image className="card-img-top" src="../images/100px180.svg" alt="Card image cap" width={300} height={180} />
                <div>
                    <h5>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Chi tiết</a>
                </div>
            </div>

            <div className={`${x.itemCards}`}>
                <Image className="card-img-top" src="../images/100px180.svg" alt="Card image cap" width={300} height={180} />
                <div>
                    <h5>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Chi tiết</a>
                </div>
            </div>


        </div >


    );
};

export default Cards;