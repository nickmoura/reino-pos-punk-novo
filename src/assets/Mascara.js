// mascara.js
export function aplicarMascaraTelefone(telefone) {
    const limparValor = telefone.replace(/\D/g, "").substring(0, 11);
    const numerosArray = limparValor.split("");
    let numeroFormatado = "";

    if (numerosArray.length > 0) {
        numeroFormatado += `(${numerosArray.slice(0, 2).join("")})`;
    }
    if (numerosArray.length > 2) {
        numeroFormatado += ` ${numerosArray.slice(2, 7).join("")}`;
    }
    if (numerosArray.length > 7) {
        numeroFormatado += `-${numerosArray.slice(7, 11).join("")}`;
    }
    
    return numeroFormatado;
}
