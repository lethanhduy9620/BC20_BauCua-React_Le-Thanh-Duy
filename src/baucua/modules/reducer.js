import * as ActionType from './contants';

let initialState = {
    danhSachOCuoc: [
        { id: 'nai', hinhAnh: './img/nai.png', diemCuoc: 0 },
        { id: 'bau', hinhAnh: './img/bau.png', diemCuoc: 0 },
        { id: 'ga', hinhAnh: './img/ga.png', diemCuoc: 0 },
        { id: 'ca', hinhAnh: './img/ca.png', diemCuoc: 0 },
        { id: 'cua', hinhAnh: './img/cua.png', diemCuoc: 0 },
        { id: 'tom', hinhAnh: './img/tom.png', diemCuoc: 0 },
    ],
    danhSachXucXac: [
        { id: 'nai', hinhAnh: './img/nai.png' },
        { id: 'nai', hinhAnh: './img/nai.png' },
        { id: 'nai', hinhAnh: './img/nai.png' },
    ],
    diemThuong: 1000,
    isStartGame: false,
};

const bauCuaReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.TANG_DIEM_CUOC: {
            let danhSachOCuoc = [...state.danhSachOCuoc];
            let index = danhSachOCuoc.findIndex((item) => { return item.id == action.payload });
            if (index > - 1 && state.diemThuong > 0) {
                danhSachOCuoc[index].diemCuoc += 100;
                state.diemThuong -= 100;
            }
            state.danhSachOCuoc = danhSachOCuoc;
            return { ...state };
        }

        case ActionType.GIAM_DIEM_CUOC: {
            let danhSachOCuoc = [...state.danhSachOCuoc];
            let index = danhSachOCuoc.findIndex((item) => { return item.id == action.payload });
            if (index > - 1 && danhSachOCuoc[index].diemCuoc > 0) {
                danhSachOCuoc[index].diemCuoc -= 100;
                state.diemThuong += 100;
            }
            state.danhSachOCuoc = danhSachOCuoc;
            return { ...state };
        }

        case ActionType.XOC_DIA: {
            state.isStartGame = true;

            //Random xúc xắc
            let danhSachXucXacRandom = state.danhSachXucXac.map((xucXac, index) => {
                let indexRandom = Math.floor(Math.random() * 6);
                if (indexRandom >= 0 && indexRandom <= 5) {
                    return xucXac[index] = state.danhSachOCuoc[indexRandom];
                }
            });

            //Trả tiền thưởng
            state.danhSachOCuoc.forEach((oCuoc) => {
                let isTrung = false;
                danhSachXucXacRandom.forEach((xucXac) => {
                    if (oCuoc.id === xucXac.id) {
                        state.diemThuong += oCuoc.diemCuoc;
                        isTrung = true;
                    }
                });

                //Trả điểm cược
                if (oCuoc.diemCuoc > 0 && isTrung) {
                    state.diemThuong += oCuoc.diemCuoc;
                }
            });

            state.danhSachXucXac = danhSachXucXacRandom;
            return { ...state };
        }

        case ActionType.RESET_GAME: {

            //Reset oCuoc về 0
            state.danhSachOCuoc = state.danhSachOCuoc.map((oCuoc) => {
                return { ...oCuoc, diemCuoc: 0 };
            });

            //Nếu chưa start game thì reset điểm thưởng về 1000
            if (!state.isStartGame) {
                state.diemThuong = 1000;
            }

            state.isStartGame = false;
            return { ...state };
        }

        default:
            return { ...state };
    }
};

export default bauCuaReducer;