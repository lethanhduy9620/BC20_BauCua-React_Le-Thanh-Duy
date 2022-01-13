import React from 'react';
import { useSelector } from 'react-redux';

export default function DiemThuong() {
    const diemThuong = useSelector(state => state.bauCuaReducer.diemThuong);

    return (
        <>
            <div className='diem-thuong-container'>
                <p>Tiền thưởng: <span className='diem-thuong'>{diemThuong} điểm</span></p>
            </div>
        </>
    )
}
