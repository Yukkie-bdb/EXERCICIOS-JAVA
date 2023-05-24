// ========== EXERCICIO 1 ==========
function exercicio1() {

    for (let i = 1; i < 11; i++) {
        alert(i);
    }


}

// ========== EXERCICIO 2 ==========
function exercicio2() {


    let numString = document.getElementById("btn1Exe2").value

    for (let i = 2; i <= numString; i += 2) {
        alert(i);
    }


}

// ========== EXERCICIO 3 ==========
function exercicio3() {


    let num1 = document.getElementById("btn1Exe3").value
    primo = true

    for (let i = 2; i < num1; i++) {

        if (num1 % i == 0) {
            primo = false
        }


    }

    if (primo) {
        alert("Teu número é primo!🥳")
    } else {
        alert("Não é primo!🤮")
    }
}

// ========== EXERCICIO 4 ==========
function exercicio4() {

    let num1 = document.getElementById("btn1Exe4").value

    for (let i = 1; i <= 10; i++) {

        let b = num1 * i;

        let tabuadinha = "TABUADA"

        let x = "X";

        let igual = "=";

        let tabuada = tabuadinha + num1 + x + i + igual + b;

        // "TABUADA:", num1, "x", i, "=", b

        alert(tabuada)
    }
}

// ========== EXERCICIO 5 ==========
function exercicio5() {

    let num1 = document.getElementById("btn1Exe5").value
    let i = 1

    while (i <= num1) {
        alert(i)
        i = i + 2
    }

}

// ========== EXERCICIO 6 ==========
function exercicio6() {

    let num1 = document.getElementById("btn1Exe6").value
    let i = 1
    let vetor = [];
    let soma = 0;

    while (i <= num1) {
        if (i % 2 == 0) {
            vetor.push(i)
            soma = i + soma
        }
        i++
    }

    alert(soma);
    // alert(vetor);
}

// ========== EXERCICIO 7 ==========
function exercicio7() {

    let i = 10

    while (i >= 1) {

        alert(i)

        i--
    }


}

// ========== EXERCICIO 8 ==========
function exercicio8() {

    let palavra = document.getElementById("btn1Exe8").value
    let inversa = ''

    for (let i = 1; i <= palavra.length; i++) {
        inversa = inversa + palavra.charAt(palavra.length - i)
    }

    if (palavra == inversa) {
        alert("Para a Bens! É um Palíndromo!🥳")
    } else {
        alert("Que pena! Não é um Palíndromo!🤮")
    }

}

// ========== EXERCICIO 9 ==========
function exercicio9() {

    let soma = 0

    for (let i = 0; i <= 100; i++) {
        soma += i
    }

    alert(soma)

}

// ========== EXERCICIO 10 ==========
function exercicio10() {

    let soma = 0
    let cont = 0
    let media = 0

    let sairDaFuncao = 1

    while (sairDaFuncao !== 0) {

        let numero = parseInt(prompt("Digite um Numero (Zero para Sair)"))

        if (numero == 0) {
            sairDaFuncao = 0
        } else {
            cont++
            soma += numero
        }
    }

    media = soma / cont

    alert(media)
}

// ========== EXERCICIO 11 ==========
function exercicio11() {

    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0) {
            alert(i)
        }
    }
}

// ========== EXERCICIO 12 ==========
function exercicio12() {

    let num1 = document.getElementById("btn1Exe12").value

    let soma = 0

    for (let i = 0; i < num1.length; i++) {
        soma += parseInt(num1[i])
    }

    alert(soma)

}

// ========== EXERCICIO 12 ==========
function ePrimo(num) {
    num = parseInt(num)
    let primo = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = false;
        }
    }
    if (primo) {
        return true
    } else {
        return false
    }
}


function exercicio13() {
    let menor = document.getElementById("btn1Exe13").value
    let maior = document.getElementById("btn2Exe13").value
    while (menor <= maior) {
        if (ePrimo(menor)) {
            alert(menor)
        }
        menor++
    }
}

// ========== EXERCICIO 14 ==========
function exercicio14() {

    let num1 = document.getElementById("btn1Exe14").value
    let num2 = document.getElementById("btn2Exe14").value

    let area = num1 * num2

    let areaEscrita = "AREA=" + area;

    alert(areaEscrita)

}

// ========== EXERCICIO 15 ==========
function exercicio15() {

    let num1 = document.getElementById("btn1Exe15").value

    let vetor = num1.split('')

    let vogais = '';
    let consoantes = '';

    for (let i = 0; i < num1.length; i++) {

        if (vetor[i] == 'a' || vetor[i] == 'e' || vetor[i] == 'i' || vetor[i] == 'o' || vetor[i] == 'u') {

            vogais += num1.charAt(i)
        } else {
            consoantes += num1.charAt(i)

        }

    }
    alert(vogais)

    alert(consoantes)

}

// ========== EXERCICIO 16 ==========
function exercicio16() {

    let num1 = document.getElementById("btn1Exe16").value

    let area = num1 ** 2 * 3.14

    let areaEscrita = "AREA=" + area;

    alert(areaEscrita)

}

// ========== EXERCICIO 17 ==========
function exercicio17() {

    let num1 = document.getElementById("btn1Exe17").value
    let num2 = document.getElementById("btn2Exe17").value

    let area = num1 * num2 / 2

    let areaEscrita = "AREA=" + area;

    alert(areaEscrita)

}

// ========== EXERCICIO 18 ==========
function exercicio18() {

    let num1 = document.getElementById("btn1Exe18").value
    let num2 = document.getElementById("btn2Exe18").value
    let num3 = document.getElementById("btn3Exe18").value

    let area = ((parseInt(num1) + parseInt(num2)) * parseInt(num3)) / 2

    let areaEscrita = "AREA=" + area;

    alert(areaEscrita)

}

// ========== EXERCICIO 19 ==========
function exercicio19() {

    let num1 = document.getElementById("btn1Exe19").value

    let vetor = num1.split('')

    for (let i = 0; i < num1.length; i++) {

        if (vetor[i] == 'a') {
            vetor[i] = '*'
        }

    }


    alert(vetor.join(''))

}

// ========== EXERCICIO 20 ==========
function exercicio20() {

    let num1 = document.getElementById("btn1Exe20").value
    let fraseInvertida = ''

    for (let i = num1.length - 1; i >= 0; i--) {
        fraseInvertida += num1[i];
    }


    alert("Frase invertida: " + fraseInvertida);

}

// ========== EXERCICIO 21 ==========
function exercicio21() {

    let num1 = document.getElementById("btn1Exe21").value
    let espaço = num1.replace(/\s/g, "");
        
      
  alert(espaço);

}