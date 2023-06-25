export function DateFormater(date) {

    const fecha = new Date(date);

    let anio = fecha.getFullYear();
    let mes = ('0' + (fecha.getMonth() + 1)).slice(-2);
    let día = ('0' + fecha.getDate()).slice(-2);

    const fechaFormateada = anio + '-' + mes + '-' + día;

    return fechaFormateada
}