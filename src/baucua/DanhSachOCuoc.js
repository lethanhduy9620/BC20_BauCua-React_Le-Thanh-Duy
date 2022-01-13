import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actTangDiemCuoc, actGiamDiemCuoc } from './modules/actions';

export default function DanhSachOCuoc() {
    const danhSachOCuoc = useSelector(state => state.bauCuaReducer.danhSachOCuoc);
    const dispatch = useDispatch();

    const renderDanhSachOCuoc = () => {
        return danhSachOCuoc.map((item) => {
            return (
                <div key={item.id} className='o-cuoc-container col-4'>
                    <img src={item.hinhAnh} />
                    <div className='o-cuoc-diem'>
                        <p>Cược:
                            <button className='btn btn-success shadow-none' onClick={() => dispatch(actTangDiemCuoc(item.id))}>
                                <i className="fa fa-plus fa-xs"></i>
                            </button>
                            <span>{item.diemCuoc}</span>
                            <button className='btn btn-success shadow-none' onClick={() => dispatch(actGiamDiemCuoc(item.id))} >
                                <i className="fa fa-minus fa-xs"></i>
                            </button>
                        </p>
                    </div>
                </div>
            );
        });
    };

    return (
        <>
            {renderDanhSachOCuoc()}
        </>
    )
}

