class Proyecto {
    limpiar() {//Limpiar todo el texto ingresado
        let d = document
        d.getElementById('Entrada_Datos').value = ""
        d.getElementById('Salida_Datos').textContent = ""
        d.getElementById('Exponente').value = ""
        d.getElementById('ValorInicial').value = ""
        d.getElementById('Inicio').value = ""
        d.getElementById('Fin').value = ""
    }
    //1) Dado una serie de numeros presentar la suma de los numeros perfectos ejemplo
    ejercicio1() {
        let serieNumeros = document.getElementById("Entrada_Datos").value
        let textarea = document.getElementById("Salida_Datos")
        serieNumeros = serieNumeros.split(",").map(n => Number(n))
        let sumarPerfectos = 0
        for (let i = 0; i < serieNumeros.length; i++) {
            let contador = 0, acumulador = 0
            let numero = serieNumeros[i]
            while (contador < numero) {
                if (numero % contador == 0) {
                    acumulador += contador
                }
                contador++
            }
            if (acumulador == numero) {
                sumarPerfectos = sumarPerfectos + numero
            }
        }
        textarea.textContent = ("la suma de numeros perfectos es: " + sumarPerfectos)
    }
    isprimos(num) {//Sacar los numeros primos se utiliza en el ejercico 2
        let contador = 2
        let bandera = 1
        for (let i = 0; i < num.length; i++) {
            let numero = num[i]
            while (contador < numero && bandera == 1) {
                if (numero % contador == 0) {
                    bandera = 0
                } else {
                    contador++
                }
            }
        }
        return bandera
    }
    //2) Dado una serie de numeros presentar los numeros primos
    ejercicio2() {
        let serieNumeros = document.getElementById("Entrada_Datos").value
        serieNumeros = serieNumeros.split(",").map(n => Number(n))
        let numerosPrimos = []
        for (let i = 0; i < serieNumeros.length; i++) {
            if (this.isprimos([serieNumeros[i]]) == 1) {
                numerosPrimos.push(serieNumeros[i])
            }
        }
        let textarea = document.getElementById("Salida_Datos")
        if (numerosPrimos.length > 0) {

            textarea.textContent = "Los numeros primos son: " + numerosPrimos.join(",")
        } else {
            textarea.textContent = "No hay numeros primos:"
        }

    }
    potencia(numero1, numero2) {//Eleva un numero a la cualquier potencia se utiliza en el ejercicio 3,4 
        let contador = 1
        let resultado = 1
        while (contador <= numero2) {
            resultado = resultado * numero1
            contador++
        }
        return resultado
        
    }
    //3) Elaborar una funcion que reciba dos valores base y exponente. la funcion 
    //debera retornar la base elevada al exponente 
    ejercicio3() {
        let n1 = 0
        let num1 = parseFloat(document.getElementById("Entrada_Datos").value)
        let num2 = parseFloat(document.getElementById("Exponente").value)
        n1 = this.potencia(num1, num2)
        let textarea = document.getElementById("Salida_Datos")
        textarea.textContent = ("el resultado de la potencia es: " + n1)
    }
    //4) Dado una serie de numeros presentar el exponente de cada numero elavado 
    //a su propio numero
    ejercicio4() {
        let serieNumeros = document.getElementById("Entrada_Datos").value
        serieNumeros = serieNumeros.split(",").map(n => Number(n))
        let arreglonumeros = []
        for (let i = 0; i < serieNumeros.length; i++) {
            let numero = serieNumeros[i]
            let exponente = this.potencia(numero, numero)
            arreglonumeros.push(exponente)
            document.getElementById("Salida_Datos").textContent = arreglonumeros
        }
    }
    //5)elaborar una funcion de la tabla de multiplicar de cualquier base del 1 al  12
    ejercicio5() {
        let numeroIngresado = parseFloat(document.getElementById("Entrada_Datos").value)
        let tabla = ""
        for (let i = 1; i <= 12; i++) {
            let producto = i * numeroIngresado
            tabla = tabla + numeroIngresado + " * " + i + " = " + producto + "\n"

        }
        let textarea = document.getElementById("Salida_Datos")
        textarea.textContent = tabla
    }
    Divisores(numero, valor) {//Encontrar los divisores de un numero se utiliza en el ejercicio 6,7
        let arregloNumeros = []
        
        for (let i = valor; i < numero; i++) {
            if (numero % i == 0) {
                arregloNumeros.push(i)
                
            }
        }
        return arregloNumeros
    }
    //6) Realizar una funcion que retorne un arreglo con los divisores de cualquier numero de cualquier valor inicial 
    ejercicio6() {
        let numero1 = parseFloat(document.getElementById("Entrada_Datos").value)
        let valorinicial = parseFloat(document.getElementById("ValorInicial").value)
        let numeros = this.Divisores(numero1, valorinicial)
        let textarea = document.getElementById("Salida_Datos")
        textarea.textContent = ("Los divisores: " + numeros.join(","))

    }
    //7) Realizar una funcion que retorne la suma de los divisores de cualquier numero de cualquier valor inicial
    ejercicio7() {
        let numeroIngresado = parseFloat(document.getElementById("Entrada_Datos").value)
        let valorInicial = parseFloat(document.getElementById("ValorInicial").value)
        let numero = this.Divisores(numeroIngresado, valorInicial)
        let acumulador = 0
        for (let i = 0; i < numero.length; i++) {
            acumulador = acumulador + numero[i]
        }
        let textarea = document.getElementById("Salida_Datos")
        textarea.textContent = ("la suma de los divisores es: " + acumulador)
    }
    retornardigitos(num) {//Sacar los digitos de un numero se utiliza en los ejercicios 8,9,10,11,12
        let contador = 0
        let arreglo = []
        
        while (contador < num) {
            let digito = 0
            digito = num % 10
            num = parseInt(num / 10)
            arreglo.push(digito)
        }
        return arreglo
        
    }
    //8) Realizar una funcion que retorne un arreglo con los digitos de cualquier numero
    ejercicio8() {
        let numeroIngresado = parseFloat(document.getElementById("Entrada_Datos").value)
        let numero = this.retornardigitos(numeroIngresado)
        let textarea = document.getElementById("Salida_Datos")
        textarea.textContent = ("Los digitos son: " + numero)
    }
//9) Dado un numero presente la  suma de sus digitos
    ejercicio9() {
        let numeroIngresado = parseFloat(document.getElementById("Entrada_Datos").value)
        let numero = this.retornardigitos(numeroIngresado)
        let suma = 0
        for (let i = 0; i < numero.length; i++) {
            suma = suma + numero[i]
        }
        let textarea = document.getElementById("Salida_Datos")
        textarea.textContent = ("La suma de los digitos es: " + suma)
    }
    //10) Dado un numero presente los digitos pares
    ejercicio10() {
        let Numero = parseInt(document.getElementById("Entrada_Datos").value)
        let mandar = this.retornardigitos(Numero)
        let arregloFinal = []
        for (let i = 0; i < mandar.length; i++) {
            if (mandar[i] % 2 == 0) {
                arregloFinal.push(mandar[i])
            }
        }
        let textarea = document.getElementById("Salida_Datos")
        textarea.textContent = ("Los digitos pares son: " + arregloFinal)
    }
    //11) Dado un numero presente su primer digito
    ejercicio11() {
        let Numero = parseInt(document.getElementById("Entrada_Datos").value)
        let llamar = this.retornardigitos(Numero)
        let longuitud = llamar.length - 1
        let textarea = document.getElementById("Salida_Datos")
        textarea.textContent = ("el primer digito es: " + llamar[longuitud])
    }
    //12) Dado un numero presente el ultimo digito
    ejercicio12() {
        let Numero = parseInt(document.getElementById("Entrada_Datos").value)
        let llamar = this.retornardigitos(Numero)
        let textarea = document.getElementById("Salida_Datos")
        textarea.textContent = ("el ultimo digito es: " + llamar[0])
    }
    retornarFactorial(num) {//Encontrar el factorial de un numero se uutiliza en el ejercico 13,14
        let producto = 1
        for (let i = num; i > 0; i--) {
            producto = producto * i
        }
        return producto
    }
    //13) Elaborar una funcion que retorne el factorial de un numero
    ejercicio13() {
        let numeroIngresado = parseFloat(document.getElementById("Entrada_Datos").value)
        let llamar = this.retornarFactorial(numeroIngresado)
        let textarea = document.getElementById("Salida_Datos")
        textarea.textContent = ("el factorial del numero ingresado es: " + llamar)
    }
    //14) Dado un arreglo de numeros presentar sus factoriales
    ejercico14() {
        let numeroIngresado = document.getElementById("Entrada_Datos").value
        numeroIngresado = numeroIngresado.split(",").map(n => Number(n))
        let arregloFinal = []
        for (let i = 0; i < numeroIngresado.length; i++) {
            let numeros = numeroIngresado[i]
            let llamar = this.retornarFactorial(numeros)
            arregloFinal.push(llamar)
            let textarea = document.getElementById("Salida_Datos")
            textarea.textContent = ("el factorial del numero ingresado es: " + arregloFinal)
        }
    }
    retornarIni(num1,num2){//Retornar un los numeros dentro de un rango se utiliza en el ejercicio 15
        let arreglo=[]
      
       if(num1<num2){
        for(let i=num1;i<num2;i++){
            arreglo.push(i)
        }

        
       }else
       if(num1>num2){

           for(let i=num1;i>num2;i--){
               arreglo.push(i)
               
            }
       }
       return arreglo
    }
    //15) Realizar una funcion que retorne un arreglo con los numeros dentro de un rango entre dos valores excluido el valor final
    ejercicio15() {
        let inicio = parseFloat(document.getElementById("Inicio").value)
        let fin = parseFloat(document.getElementById("Fin").value)
        let final = this.retornarIni(inicio, fin)
        let textarea = document.getElementById("Salida_Datos")
        textarea.textContent = ("El inicio y el fin del arreglo es: " + final)

    }
}
let x = new Proyecto()
