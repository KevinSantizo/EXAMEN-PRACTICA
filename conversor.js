function convert() {

    var value = parseFloat(document.getElementById('quantity').value);
    document.getElementById('value').innerHTML='<b>'+value+'</b>';
    from = document.getElementById('from').value;
    to = document.getElementById('to').value


    var euro_quetzal = 9.18;
    var quetzal_peso = 2.75;
    var dolar_quetzal = 7.76
    var dolar_peso = 21.63;
    var euro_peso = 25.27;
    var euro_dolar = 1.18;
    result = 0;

    from == 1 && to == 2 ? result = value*quetzal_peso : from == 1 && to == 3 ? result = value/dolar_quetzal : 
        from == 1 && to == 4 ? result = value/euro_quetzal : from == 2 && to == 1 ? result = value/quetzal_peso : 
            from == 2 && to == 3 ? result = value/dolar_peso : from == 2 && to == 4 ? result = value/euro_peso : 
                from == 3 && to == 1 ? result = value*dolar_quetzal : from == 3 && to == 2 ? result = value*dolar_peso :  
                    from == 3 && to == 4 ? result = value/euro_dolar : from == 4 && to == 1 ? result = value*euro_quetzal : 
                        from == 4 && to == 2 ? result = value*euro_peso : from == 4 && to == 3 ? result = value*euro_dolar : 
                        result = value;    
    document.getElementById('result').innerHTML='Resultado: '+result.toFixed(2);

}