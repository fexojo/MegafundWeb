app.controller('monitorController', function ($scope, $window, $filter, datosBD) {
    var headers = ["head1", "head2", "head3", "head4", "head5", "head6", "head7", "head8", "head9", "head10", "head11", "head12", "head13", "head14", "head15", "head16", "head17", "head18", "head19", "head20"];

    // Initial chart data
    $scope.chartTitle = "Renta 4 Eurasia Small Top 2";
    $scope.chartWidth = 500;
    $scope.chartHeight = 500;
    $scope.stockName = "Renta 4 Eurasia Small Top 2";
    $scope.fundName = "";

    var tablasShowHide = ["tTrading", "tHistorico", "tComponentes", "tEvolucion", "tEstadistica"]; // Lista de tablas que aparecen/desaparecen
    $scope.tableShow = tablasShowHide[2]; // Por defecto mostramos la tabla de componenentes
    $scope.activarTabla = function (indice) {
        $scope.tableShow = tablasShowHide[indice];
    };
    $scope.checktableShow = function (indice) {
        return (tablasShowHide[indice] == $scope.tableShow);
    };

    $scope.anioActual = (new Date).getFullYear();

    $scope.uriCartera = 'ranking/carteras';
    $scope.uriRentabilidad = "rentabilidad";
    $scope.uriEstadistica = "rentabilidad";
    $scope.uriGrafica = "Renta-4-Eurasia-Small-Top-2";

    /*
     * FUnciones auxiliares
     */
    // Selección de una nueva cartera
    $scope.showDatosCartera = function () { // Selección de una nueva cartera
        datosBD.getDatos("http://localhost:8085/" + $scope.uriCartera).success(function (data) {
            $scope.cartera = CSV2ObjArray(data, headers);
        });

        //Grafica
        datosBD.getDatos("http://localhost:8085/monitor/" + $scope.uriGrafica + "/grafica").success(function (data) {
            $scope.chartData = CSV2ObjArray(data, headers);
        });

        // Estadisticas
        datosBD.getDatos("http://localhost:8084/" + $scope.uriEstadistica).success(function (data) {
            $scope.rentabilidades = data.records;
        });
    };

    // Ordenación cartera
	var orderBy = $filter('orderBy');
    $scope.order = function (predicate, reverse) {
        $scope.cartera = orderBy($scope.cartera, predicate, reverse);
    };

    // Tratamiento selección fondo de una cartera
    $scope.selectItem = function (evento, indice) {
        var nombreFondoAux = $scope.cartera[indice].head1.split('-').join('--');
        var nombreFondo = nombreFondoAux.split(' ').join('-');
        //alert(nombreFondo);

        $scope.fundName = " -> " + $scope.cartera[indice].head1;
        document.getElementById("tituloGrafica").innerHTML = $scope.cartera[indice].head1;
        $scope.chartTitle = $scope.cartera[indice].head1;

        // Actualizamos la grafica
        datosBD.getDatos("http://localhost:8085/fondo" + $scope.cartera[indice].head15 + "/grafica").success(function (data) {
            $scope.chartData = CSV2ObjArray(data, headers);
        });

        // Actualizamos las estadisticas
        /*
         datosBD.getDatos("http://localhost:8082/" + $scope.uriEstadistica).success(function(data) {
         $scope.rentabilidades = data.records;
         });
         */
    };

    var selectStock = function(numero){
        $scope.chartTitle = "";
        if ($scope.stockName.charAt($scope.stockName.length - 1) == '0'){
            $scope.stockName = $scope.stockName.substr(0, $scope.stockName.length - 2) + numero;
        }
        else{
            $scope.stockName = $scope.stockName.substr(0, $scope.stockName.length - 1) + numero;
        }
    };

    $scope.stockOptions = [
        ['Top 1', function ($itemMenu) {
		    selectStock("1");
        }],
        ['Top 2', function ($itemMenu) {
		    selectStock("2");
        }],
        ['Top 3', function ($itemMenu) {
		    selectStock("3");
        }],
        ['Top 4', function ($itemMenu) {
		    selectStock("4");
        }],
        ['Top 5', function ($itemMenu) {
		    selectStock("5");
        }],
        ['Top 6', function ($itemMenu) {
		    selectStock("6");
        }],
        ['Top 7', function ($itemMenu) {
		    selectStock("7");
        }],
        ['Top 8', function ($itemMenu) {
		    selectStock("8");
        }],
        ['Top 9', function ($itemMenu) {
		    selectStock("9");
        }],
        ['Top 10', function ($itemMenu) {
		    selectStock("10");
        }]
    ];

    $scope.menuOptions = [
           ['Incluir', function ($itemMenu) {
               alert($itemMenu.fondo.head1);
           }],
           ['Excluir', function ($itemMenu) {
               alert("Opcion 2");
           }],
           ['Duplicar', function ($itemMenu) {
               alert("Opcion3");
           }],
           ['Eliminar', function ($itemMenu) {
               alert("Opcion 4");
           }],
           null, // Separador
           ['Cambiar peso', function ($itemMenu) {
               alert("Opcion 5");
           }],
           ['Cambiar fondos momentum', function ($itemMenu) {
               alert("Opcion 6");
           }],
           ['Cambiar nombre', function ($itemMenu) {
               alert("Opcion 7");
           }],
           null, // Separador
           ['Abrir Ficha Morningstar', function ($itemMenu) {
               $window.open('//www.morningstar.es/es/funds/snapshot/snapshot.aspx?id=' + $itemMenu.fondo.head15, '_blank');
           }]
    ];

    /*
     * Carga  de datos al crear el controlador
     */
    $scope.showDatosCartera();
});
