google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['myApp']);
});

google.load('visualization', '1', {packages: ['corechart', 'bar']});

app.directive('barChart', function ($timeout) {
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
            var data = google.visualization.arrayToDataTable([
                ['City', '2010 Population', {type: 'string', role: 'annotation'}],
                ['Bankinter', 19.32, '17.19'],
                ['Renta 4', 19.32, '17.19'],
                ['Inversis', 19.32, '17.19'],
                ['BNP', 19.32, '17.19'],
                ['Self Bank', 17.40, '17.19'],
                ['Tressis', 17.19, '17.19']]);

            var chart = new google.visualization.BarChart($elm[0]);

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
                        //data.removeRows(0, data.getNumberOfRows());

                        var options = {
                            title: 'Comercializador',
                            chartArea: {width: '50%'},
                            legend: {position: 'none'},
                            annotations: {
                                alwaysOutside: true,
                                textStyle: {
                                    fontSize: 12,
                                    auraColor: 'none',
                                    color: '#555'
                                },
                                boxStyle: {
                                    stroke: '#ccc',
                                    strokeWidth: 1,
                                    gradient: {
                                        color1: '#f3e5f5',
                                        color2: '#f3e5f5',
                                        //x1: '0%', y1: '0%',
                                        x1: '100%', y1: '100%'
                                    }
                                }
                            }
                        };

                        chart.draw(data, options);
                        // No raw selected
                    }, 0, true);
                }
            }
        }
    };
});
