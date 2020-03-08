
        console.log('Hola Mundo!');
        let user = 'Moises';
        console.log(user);
        user = 'Daniel';
        console.log(user);
        user = 1234;
        console.log(user);
        user = true;
        console.log(user);

        const IVA = 12;
        console.log(IVA);
       // IVA = 14
        //console.log(IVA)
        let a = 3;
        let b ='4';
        let c = 4;
        let suma = c+a+b;
        console.log('Suma', suma);

        let resta = b-a
        console.log('Resta', resta)
        let multiplicacion = b*a;
        console.log('Multiplicacion', multiplicacion)

        let division = b/a;
        console.log('division', division)

        let permisomama = true;
        let permisopapa = true;
        let salir =!permisopapa
        if (permisomama && permisopapa){
            console.log('Hoy salimos');
        }else{console.log('nos quedamos')}
        let numero;
        if (numero){console.log('valor verdadero')}
        else{console.log('valor falso')}
       
        let contador = 0;
        console.log(contador);
        contador++;
        console.log(contador);
        contador++;
        console.log(contador);
        contador++;
        console.log(contador);
        console.log("----------")
        let restador = 10;
        console.log(restador);
        restador--;
        console.log(restador);
        restador--;
        console.log(restador);
        restador--;
        console.log(restador);
        console.log("----------")
        let acumulador = 0;
        console.log(acumulador);
        acumulador += 2; // acumulador = acumulador + 2;
        console.log(acumulador);
        acumulador += 3;
        console.log(acumulador);
        acumulador += 4;
        console.log(acumulador);
        let acumulador2 = 1;
        acumulador2 *= 2;
        acumulador2 *= 3;
         for(let i = 0; i<100; i +=1){console.log(i);
            }
        console.log("--------------------------")
        for(let i = 100; i>=0; i --){console.log(i);}
        console.log("--------------------------")
        let i = 0;
        while(i<100){
            console.log(i);
            i++;
        }
        console.log("--------------------------")
        i = 0;
        do { console.log(i);
            i++;
        }while(i<=100);
        for(let i = 1; i<=30; i++){
            let numero = '';
            for(let j = 1; j<=i;j++){
                numero+=i;
            }
            console.log(numero)
        }
        function cuadrado(numero){
            return numero * numero;
        }
        let resultado = cuadrado(4);
        console.log(resultado)
        console.log('-------------')
        function sum(a=1, b=1){
        return a + b;
        }
        console.log(sum());
        let persona = {
              nombre: ['Bob', 'Smith'],
              edad: 32,
              genero: 'masculino',
              intereses: ['música', 'esquí'],
              bio: function() {
                alert(
                  this.nombre[0] +
                    '' +
                    this.nombre[1] +
                    ' tiene ' +
                    this.edad +
                    ' años. Le gusta ' +
                    this.intereses[0] +
                    ' y ' +
                    this.intereses[1] +
                    '.'
                );
              },
              saludo: function() {
                alert('Hola, Soy ' + this.nombre[0] + '. ');
              },
            };
            console.log(persona.edad)
            let cars = ['Saab', 'Volvo', 11213, {nombre:'Thian'}];
                
        for(let i = 0; i < cars.length; i++){
            console.log(cars[i]);
        }

        console.log('---------------');

        cars.forEach(function(item, index) {
            console.log(item);
        });

        console.log('---------------');

        let nuevaLongitud = cars.push('Ford');
        console.log(nuevaLongitud, cars);

        console.log('---------------');

        cars.pop();
        console.log('Cars', cars);

        console.log('---------------');

        cars.unshift('Chevrolet');
        console.log('Cars', cars);

        console.log('---------------');

        cars.shift();
        console.log('Cars', cars);        

        console.log('---------------');

        let posicion = cars.indexOf(11213);
        console.log('Posicion', posicion);

        console.log('---------------');

        cars.splice(2)
        console.log('Cars', cars)