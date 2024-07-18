'use client'
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import x from '@/styles/slide.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import Container from 'react-bootstrap/Container';

const slide = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={x['formGroup']}>
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <Image src="/images/First.svg" alt="Image 1" width={400} height={550} />
                    <p className="legend">Caption for Image 1</p>
                </div>
                <div>
                    <Image src="/images/Second.svg" alt="Image 2" width={400} height={550} />
                    <p className="legend">Caption for Image 2</p>
                </div>
                <div>
                    <Image src="/images/Third.svg" alt="Image 3" width={400} height={550} />
                    <p className="legend">Caption for Image 3</p>
                </div>
            </Carousel>
        </div>
    );
}

export default slide;