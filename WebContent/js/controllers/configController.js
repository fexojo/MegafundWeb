app.controller('configController', function ($scope, datosBD) {
    var headers = ["head1", "head2", "head3", "head4", "head5"];

    $scope.guardarGeneral = function(){
        alert($scope.fGeneral.$dirty);
    };

    $scope.guardarTiming = function(){
        alert($scope.fTiming.$dirty);
    };

    $scope.guardarMomentum = function(){
        alert($scope.fMomentum.$dirty);
    };

    $scope.guardarMega = function(){
        alert($scope.fMega.$dirty);
    };

    $scope.guardarRefugio = function(){
        alert($scope.fRefugio.$dirty);
    };

    $scope.guardarCatalogo = function(){
        alert($scope.catalogo);
    };

    //Grafica
    datosBD.getDatos("http://localhost:8085/favoritos/favoritos").success(function (data) {
        $scope.favoritos = CSV2ObjArray(data, headers);
    })

    // Formulario configuracion
    $scope.countryArr = ["España","Alemania","Australia"];
    $scope.coinArr = ["Euro","Libra","Dolar"];
    $scope.idiomArr = ["Español"];
    $scope.delayArr = [-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    $scope.delayPlusArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    $scope.delayLabArr = [0,1,2,3,4,5,6,7,8,9,10];
    $scope.delayTimeArr = ["00:00", "00:30","20:00"];
    $scope.currencyAutStockArr = ["Cualquier divisa", "Solo mi moneda"];
    $scope.siNoArr = ["Si", "No"];
    $scope.histMSArr = ["Precio", "Rentabilidad"];

    // Formulario Timing
    $scope.periodicityArr = ["Diaria", "Semanal", "Mensual"];
    $scope.algorithmArr = ["EMA", "HMA", "KAMA", "SMA", "VMA", "NINGUNO"];

    // Formulario Momentum
    $scope.rotationArr = ["Por fondo", "Por zona"];
    $scope.calcMomentumArr = ["1", "2", "3","6", "12", "1, 3", "1, 6", "1, 12", "3, 6", "3, 12", "6, 12", "1, 3, 6", "1, 3, 12", "1, 6, 12", "1, 3, 6, 12"];
    $scope.fundNumberArr = [0,1,2,3,4,5,6,7,8,9,10];
    $scope.tEvolutionArr = ["Seleccionados", "Todos"];
    $scope.actFundArr = ["SI", "NO (solo cache)"];

    // Formulario Mega
    $scope.megaArr = ["1", "Sharpe", "Sharpe * Log(nº años fondo)"];

    // Formulario Refugio
    $scope.annualProfitArr = ["Media historica fondo", "Valor especifico"];
    $scope.hedgingTypeArr = ["Directo", "Inverso", "Doble inverso", "Triple inverso"];

    //Dagts de prueba. Hay que borrarlos
    $scope.countrySelected = "España";
    $scope.coinSelected = "Libra";
    $scope.idiomSelected = "Español";
    $scope.delaySelected = 0;
    $scope.delayPlusSelected = 0;
    $scope.task = 0;
    $scope.delayLabSelected = 2;
    $scope.delayTimeSelected = "20:00";
    $scope.currencyAutStockSelected = "Cualquier divisa";
    $scope.copyHeadSelected = "Si";
    $scope.resizeSelected = "Si";
    $scope.resizeSelected = "Si";
    $scope.histMSSelected = "Precio";

    $scope.periodicitySelected = "Semanal";
    $scope.algorithmSelected = "SMA";
    $scope.periocity = 10;
    $scope.shortPeriocity = 5;
    $scope.upPercentage = 10;
    $scope.downPercentage = 24;
    $scope.upShortMedia = 20;
    $scope.downShortMedia = 40;
    $scope.marginDoTrading = 0.00001;
    $scope.stabilityDoTrading = 0;
    $scope.inactavityDoTrading = 0;

    $scope.rotationSelected = "Por fondo";
    $scope.calcFundSelected = "1, 3, 6";
    $scope.calcZoneSelected = "3";
    $scope.fundNumberSelected = 2;
    $scope.tEvolutionSelected = "Seleccionados";
    $scope.dayRotation = 22;
    $scope.weekRotation = 4;
    $scope.monthRotation = 1;
    $scope.absolutEdge = 1;
    $scope.edge = 10;
    $scope.maxPercent = 60;
    $scope.maxMomentum = 45;
    $scope.maxMomentumAverage = 20;
    $scope.actFundSelected = "NO (solo cache)";

    $scope.megaSelected = "Sharpe * Log(nº años fondo)";
    $scope.profit3A = 0.25;
    $scope.profit5A = 0.5;
    $scope.profit10A = 1;
    $scope.totalProfit = 0.5;

    $scope.annualProfitSelected = "Valor especifico";
    $scope.hedgingTypeSelected = "Directo";

    $scope.catalogo = [
        'Fondos Morningstar',
        'ETF Morningstar',
        'Fondos comercializados por Renta 4',
        'Fondos comercializados por Self Banck',
        'Fondos comercializados por Tressis',
        'Fondos comercializados por Inversis',
        'Fondos comercializados por Bestinver',
        'Fondos comercializados por Barkinter',
        'Fondos comercializados por BNP',
        'Indices de Bolsa',
        'TER de los fondos'
    ];
    $scope.catalogoSelected = [];

    $scope.toggleSelected = function() {
        $scope.catalogo.forEach(function (componente, key){
            $scope.catalogoSelected[key] = $scope.selectall;
        });
    };

});
