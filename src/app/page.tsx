'use client'
import y from '@/styles/home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaWarehouse, FaFileAlt, FaMoneyBill } from "react-icons/fa";
import { FcFactory, FcPlanner, FcDocument, FcPaid, FcPrint, FcFlowChart, FcStatistics, FcTodoList, FcSettings } from "react-icons/fc";
import { FaUsers } from "react-icons/fa6";
import Carousel from 'react-bootstrap/Carousel';
import Slide from '@/components/app.slide'
import Cards from '@/components/app.cards'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="HomeApp">
      <div className={y.gridContainer}>

        <div className={y.gridItem} onClick={() => router.push('/hrTimeKeeping')}>
          <FcPlanner className={y.iconLarge} />
          <h4> Chấm công</h4>
        </div>

        <div className={y.gridItem} onClick={() => router.push('/qmQuotation')}>
          <FcDocument className={y.iconLarge} />
          <h4> báo giá </h4>
        </div>

        <div className={y.gridItem}>
          <FcFactory className={y.iconLarge} />
          <h4> Sản xuất</h4>
        </div>

        <div className={y.gridItem}>
          <FcPaid className={y.iconLarge} />
          <h4> Mua bán</h4>
        </div>

        <div className={y.gridItem}>
          <FaWarehouse className={y.iconLarge} />
          <h4> Kho</h4>
        </div>

        <div className={y.gridItem}>
          <FcPrint className={y.iconLarge} />
          <h4>Hóa đơn </h4>
        </div>

        <div className={y.gridItem}>
          <FaMoneyBill className={y.iconLarge} />
          <h4>Thuế</h4>
        </div>

        <div className={y.gridItem}>
          <FcFlowChart className={y.iconLarge} />
          <h4>CCDC</h4>
        </div>

        <div className={y.gridItem}>
          <FcStatistics className={y.iconLarge} />
          <h4>Thống kê </h4>
        </div>

        <div className={y.gridItem}>
          <FaUsers className={y.iconLarge} />
          <h5>HC nhân sự </h5>
        </div>

        <div className={y.gridItem}>
          <FcTodoList className={y.iconLarge} />
          <h5>Quản trị hệ thống </h5>
        </div>

        <div className={y.gridItem}>
          <FcSettings className={y.iconLarge} />
          <h5>Cài đặt hệ thống </h5>
        </div>

      </div>
      <Slide />
      <Cards />
    </div>
  );
}
