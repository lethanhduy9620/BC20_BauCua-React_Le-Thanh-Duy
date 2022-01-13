import React from 'react';
import './css/style.css';
import DiemThuong from './DiemThuong';
import DanhSachOCuoc from './DanhSachOCuoc';
import DiaBauCua from './DiaBauCua';

export default function BauCua() {
    return (
        <div id={"bau-cua"} className='container-fluid'>
            <img className='logo' src='./img/Logo.png' />
            <DiemThuong />
            <div className='row tro-choi-container'>
                <div className='col-md-7 danh-sach-o-cuoc row'>
                    <DanhSachOCuoc />
                </div>
                <div className='col-md-5 dia-bau-cua'>
                    <DiaBauCua />
                </div>
            </div>
        </div>
    )
}
