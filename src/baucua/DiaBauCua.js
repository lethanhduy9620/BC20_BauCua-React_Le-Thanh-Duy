import React from 'react';
import XucXac from './XucXac';
import { useSelector, useDispatch } from 'react-redux';
import { actXocDia, actResetGame } from './modules/actions';

export default function DiaBauCua() {
    const danhSachXucXac = useSelector(state => state.bauCuaReducer.danhSachXucXac);
    const isStartGame = useSelector(state => state.bauCuaReducer.isStartGame);
    const dispatch = useDispatch();

    return (
        <div className='dia-bau-cua-container'>
            <img className='dia' src='./img/dia.png' />
            <div className='row danh-sach-xuc-xac'>
                <div className='col-12 text-center pb-4'>
                    {/* Xuc Xac 1 */}
                    <XucXac xucXac={danhSachXucXac[0]} />
                </div>
                <div className='col-6 text-center'>
                    {/* Xuc Xac 2 */}
                    <XucXac xucXac={danhSachXucXac[1]} />
                </div>
                <div className='col-6 text-center'>
                    {/* Xuc Xac 2 */}
                    <XucXac xucXac={danhSachXucXac[2]} />
                </div>
            </div>
            {!isStartGame && <button className='btn nut-game play-game'
                onClick={() => {
                    dispatch(actXocDia());
                }}>
                <img src='./img/soc.png' />
            </button>}
            <button className='btn btn-success nut-game reset-game shadow-none' onClick={() => dispatch(actResetGame())}>
                Chơi lại
            </button>
        </div>
    )
}
