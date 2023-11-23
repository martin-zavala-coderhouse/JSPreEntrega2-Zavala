        // Definir productos y sus precios
        const productos = [
            { nombre: 'Carne lomo liso 1kg', precio: 20000 },
            { nombre: 'Carne lomo vetado 1kg', precio: 40000 },
            { nombre: 'Carne filete 1kg', precio: 60000 },
            { nombre: 'Limón 1kg', precio: 2000 },
            { nombre: 'Manzana verde 1kg', precio: 3000 },
            { nombre: 'Sockeye Salmon 1kg', precio: 5500 },
            { nombre: 'Pan de masa madre 1kg', precio: 2000 },
            { nombre: 'Chocolate amargo 80% 200 gramos', precio: 3500 },
            { nombre: 'Café de 200 gramos', precio: 3500 },
            { nombre: 'Coca Cola 1.5lts', precio: 2000 }
        ];




        // Función para inicializar la interfaz HTML            ----->ACA ES PRODUCTOS-CONTAINER HTML
        function inicializarInterfaz() {
            const productosContainer = document.getElementById('productos-container');

            // Generar dinámicamente el formulario de productos
            productos.forEach((producto) => {
                const label = document.createElement('label');
                label.textContent = `${producto.nombre} - Precio: ${producto.precio} CLP`;


                const input = document.createElement('input');
                input.type = "number";
                input.className = "cantidad-input";
                input.min = "0";
                
                productosContainer.appendChild(label);
                productosContainer.appendChild(input);
            });
        }




        // Función para calcular el costo total                 ---->ACA ES CALCULAR COSTO TOTAL
        function calcularCostoTotal() {
            let costoTotal = 0;
            let resumen = '';
        
            // Obtener todos los elementos con la clase 'cantidad-input'
            const cantidadInputs = document.getElementsByClassName('cantidad-input');
        
            for (let i = 0; i < cantidadInputs.length; i++) {
                const cantidad = cantidadInputs[i].value.trim(); // Obtener el valor y quitar espacios en blanco
        
                if (cantidad === '' || (parseInt(cantidad, 10) >= 0)) {
        ///////////            const cantidadNumerica = cantidad === '' ? 0 : parseInt(cantidad, 10);
                    let cantidadNumerica;

                if (cantidad === '') {
                cantidadNumerica = 0;
                    } else {
                cantidadNumerica = parseInt(cantidad, 10);
                }
                    const subtotal = cantidadNumerica * productos[i].precio;
        
                    if (cantidadNumerica > 0) {
                        costoTotal += subtotal;
                        resumen += `${cantidadNumerica} ${productos[i].nombre}: ${subtotal} CLP\n`;
                    }
                } else {
                    alert('Por favor, ingrese una cantidad válida (puede ser 0 o dejarlo en blanco).');
                    return; // Detener la función si la cantidad no es válida
                }
            }
        
    


            
            // Mostrar el resumen y el resultado final
            alert(`Resumen de la compra:\n\n${resumen}\nEl costo total de los productos seleccionados es: ${costoTotal} CLP`);
        }

        // Llamar a la función de inicialización al cargar la página
        window.onload = inicializarInterfaz;