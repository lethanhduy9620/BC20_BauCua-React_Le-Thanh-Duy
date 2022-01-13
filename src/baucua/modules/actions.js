import * as ActionType from './contants';

const actTangDiemCuoc = (id) => {
    return ({
        type: ActionType.TANG_DIEM_CUOC,
        payload: id,
    });
};

const actGiamDiemCuoc = (id) => {
    return ({
        type: ActionType.GIAM_DIEM_CUOC,
        payload: id,
    });
};

const actXocDia = () => {
    return ({
        type: ActionType.XOC_DIA,
    });
};

const actResetGame = () => {
    return ({
        type: ActionType.RESET_GAME
    });
}

export { actTangDiemCuoc, actGiamDiemCuoc, actXocDia, actResetGame };
