app.controller('rankingController', function ($scope, datosBD) {
    var headers = ["head1", "head2", "head3", "head4", "head5", "head6", "head7", "head8", "head9", "head10", "head11", "head12", "head13", "head14", "head15", "head16", "head17", "head18", "head19", "head20"];

    // Initial chart data
    $scope.chartTitle = "Renta 4 Eurasia Small Top 2";
    $scope.chartWidth = 900;
    $scope.chartHeight = 500;


    $scope.brokerArr = ["Renta 4","Self Bbank","Todos"];
    $scope.categoryArr = ["America","Asia","Europa","Todos"];
    $scope.sizeArr = ["Small","Big","Todos"];
    $scope.topArr = ["Todos"];
    $scope.criteriaArr = ["Rentabilidad 3", "Rentabilidad 5","Rentabilidad 10"];

    $scope.brokerSelected = "Todos";
    $scope.categorySelected = "Todos";
    $scope.sizeSelected = "Todos";
    $scope.criteriaSelected = "Rentabilidad 10";
    $scope.formatoRanking = "grafica";

    /*
     * FUnciones auxiliares
     */
    // Selección de una nueva cartera
    $scope.showDatosRanking = function () { // Selección de una nueva cartera
        //Grafica
        datosBD.getDatos("http://localhost:8085/monitor/" + $scope.chartTitle + "/grafica").success(function (data) {
            $scope.chartData = CSV2ObjArray(data, headers);
        })
    };

    // Ordenación cartera

    /*
     * Carga  de datos al crear el controlador
     */
    $scope.showDatosRanking();

    // PRUEBAS BORRARRRRRR
    $scope.chartObject = {};
    $scope.secondRow = [
        {v: new Date(2314, 2, 16)},
        {v: 13},
        {v: 'Lalibertines'},
        {v: 'They are very tall'},
        {v: 25},
        {v: 'Gallantors'},
        {v: 'First Encounter'}
    ];

    $scope.chartObject.type = "AnnotationChart";
    $scope.chartObject.data = {"cols": [
        {id: "month", label: "Month", type: "date"},
        {id: "kepler-data", label: "Kepler-22b mission", type: "number"},
        {id: "kepler-annot", label: "Kepler-22b Annotation Title", type: "string"},
        {id: "kepler-annot-body", label: "Kepler-22b Annotation Text", type: "string"},
        {id: "desktop-data", label: "Gliese mission", type: "number"},
        {id: "desktop-annot", label: "Gliese Annotation Title", type: "string"},
        {id: "desktop-annot-body", label: "Gliese Annotaioon Text", type: "string"}
    ], "rows": [
        {c: [
            {v: new Date(2314, 2, 15)},
            {v: 19 },
            {v: 'Lalibertines'},
            {v: 'First encounter'},
            {v: 7},
            {v: undefined},
            {v: undefined}
        ]},
        {c: $scope.secondRow},
        {c: [
            {v: new Date(2314, 2, 17)},
            {v: 0},
            {v: 'Lalibertines'},
            {v: 'All crew lost'},
            {v: 28},
            {v: 'Gallantors'},
            {v: 'Omniscience achieved'}
        ]}
    ]};

    $scope.chartObject.options = {
        displayAnnotations: true
    };
});

google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['myApp']);
});
google.load('visualization', '1.1', {
    'packages': ['annotationchart']
});