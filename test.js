function somar() {
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    var res = window.document.getElementById('res')
    res.innerHTML = `A soma entre ${n1} + ${n2} é igual a <strong>${s}</strong>`

}
function subtrair(){
    var tn3 = window.document.getElementById('txtn3')
    var tn4 = window.document.getElementById('txtn4')
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var sub = n3 - n4
    var res2 = window.document.getElementById('res2')
    res2.innerHTML = `A subtração de ${n3} - ${n4} é igual a <strong>${sub}</strong>`
}
function multi(){
    var tn5 = window.document.getElementById('txtn5')
    var tn6 = window.document.getElementById('txtn6')
    var n5 = Number(tn5.value)
    var n6 = Number(tn6.value)
    var mul = n5 * n6
    var resp = window.document.getElementById('resp')
    resp.innerHTML = `A multiplicação de ${n5} x ${n6} é igual a <strong>${mul}</strong>`

}
function dividir(){
    var tn7 = window.document.querySelector('input#txtn7')
    var tn8 = window.document.querySelector('input#txtn8')
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    var divi = n7 / n8
    var resps = window.document.getElementById('resps')
    resps.innerHTML = `A divisão de ${n7} / ${n8} é igual a <strong>${divi}</strong>`
}
function calcular(){
    var tn9 = window.document.querySelector('input#txtn9')
    var tn10 = window.document.querySelector('input#txtn10')
    var tn11 = window.document.querySelector('input#txtn11')
    var resposta = window.document.getElementById('resposta')
    var n9 = Number(tn9.value)
    var n10 = Number(tn10.value)
    var n11 = Number(tn11.value)
    var conta = n9 + n10 - n11
    resposta.innerHTML = `A soma da conta ${n9} + ${n10} - ${n11} é igual a <strong>${conta}</strong>`
}
function calcullar(){
    var tn12 = window.document.getElementById('txtn12')
    var tn13 = window.document.getElementById('txtn13')
    var tn14 = window.document.getElementById('txtn14')
    var tn15 = window.document.getElementById('txtn15')
    var resul = window.document.getElementById('resul')
    var n12 = Number(tn12.value)
    var n13 = Number(tn13.value)
    var n14 = Number(tn14.value)
    var n15 = Number(tn15.value)
    var con = n12 + n13 - n14 * n15
    resul.innerHTML = `A soma da conta ${n12} + ${n13} - ${n14} * ${n15} é igual a <strong>${con}</strong>`
}