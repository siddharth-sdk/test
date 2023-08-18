const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

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

