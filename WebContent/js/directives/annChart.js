google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['myApp']);
});
google.load('visualization', '1.1', {
    'packages': ['annotationchart']
});

app.directive('annChart', function ($timeout) {
    return {
        restrict: 'AE',
        scope: {
            title: '@title',
            width: '@width',
            height: '@height',
            data: '=data'
        },
        link: function ($scope, $elm, $attr) {
            // Create the data table and instantiate the chart
            var data = new google.visualization.DataTable();
            data.addColumn('date', 'Date');
            data.addColumn('number', 'Timig');
            data.addColumn('number', 'Fondo');
            data.addColumn('number', 'C/V');
            //data.addColumn({type:'boolean',role:'certainty'});

            var chart = new google.visualization.AnnotationChart($elm[0]);

            // Watches, to refresh the chart when its data, title or dimensions
            // change
            $scope.$watch('data', function () {
                draw();
            }, true);

            $scope.$watch('width', function () {
                draw();
            });
            $scope.$watch('height', function () {
                draw();
            });


            function draw() {
                if (!draw.triggered) {
                    draw.triggered = true;
                    $timeout(function () {
                        draw.triggered = false;
                        var fecha, valor1, valor2, cv;
                        data.removeRows(0, data.getNumberOfRows());

                        angular.forEach($scope.data, function (value, key) {
                            if (!isNaN(value.head2) && !isNaN(value.head3)) {
                                fecha = new Date(value.head1.split('-').reverse().join('-'));
                                valor1 = parseInt(value.head2.split('.').join(''));
                                valor2 = parseInt(value.head3.split('.').join(''));
                                if (value.head4 == 'C')
                                    cv = 1;
                                else
                                    cv = 0;
                                data.addRow([fecha, valor1, valor2, cv]);
                            }
                        });

                        var options = {
                            displayAnnotations: false,
                            displayDateBarSeparator: false,
                            displayRangeSelector: true,
                            displayZoomButtons: false,
                            dateFormat: ('d MMMM YYYY'),
                            'title': $scope.title,
                            'width': $scope.width,
                            'height': $scope.height
                        };

                        chart.draw(data, options);
                        // No raw selected
                    }, 0, true);
                }
            }
        }
    };
});
