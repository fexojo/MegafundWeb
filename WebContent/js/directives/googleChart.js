app.directive("googleChart", function () {
    return {
        restrict: "A",
        link: function ($scope, $elem, $attr) {
            var model;

            // Function to run when the trigger is activated
            var initChart = function () {

                // Run $eval on the $scope model passed
                // as an HTML attribute
                model = $scope.$eval($attr.ngModel);

                // If the model is defined on the scope,
                // grab the dataTable that was set up
                // during the Google Loader callback
                // function, and draw the chart
                if (model) {
                    var dt = model.dataTable,
                        options = {},
                        chartType = $attr.googleChart;

                    if (model.title) {
                        options.title = model.title;
                    }

                    var googleChart = new google.visualization[chartType]($elem[0]);
                    googleChart.draw(dt, options)
                }
            };

            // Watch the scope value placed on the trigger attribute
            // if it ever flips to true, activate the chart
            $scope.$watch($attr.trigger, function (val) {
                if (val === true) {
                    initChart();
                }
            });

        }
    }
});
