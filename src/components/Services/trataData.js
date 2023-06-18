

export default function trataData(data){
    let date = new Date(data);
    let dia = date.getDate();
    let mes = date.toLocaleString('default', {month: 'long'});
    let ano = date.getFullYear();
    let dataFormatada = `${dia} de ${mes} de ${ano}`
    return dataFormatada
}