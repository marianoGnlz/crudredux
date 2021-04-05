import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';


const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

export function mostrarAlerta(alerta) {
    return dispatch => {
        dispatch(crearAlerta(alerta))
    }
}

const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
})

export function ocultarAlertaAction() {
    return dispatch => {
        dispatch(ocultarAlerta())
    }
}