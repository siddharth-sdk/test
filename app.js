var app = angular.module('vivaApp', []);

app.controller('MainController', function($scope) {
    $scope.timeSlots = [];

    $scope.submitAvailability = function() {
        var formattedDate = new Date($scope.availabilityDate).toLocaleDateString('en-GB'); // Convert to DD/MM/YYYY format
        
        var startTime = $scope.startHour + ':' + $scope.startMinute + ' ' + $scope.startPeriod;
        var endTime = $scope.endHour + ':' + $scope.endMinute + ' ' + $scope.endPeriod;
        
        var timeSlot = formattedDate + ', ' + startTime + ' to ' + endTime;
        
        $scope.timeSlots.push(timeSlot);
        console.log('Availability submitted:', timeSlot);
    };
});
