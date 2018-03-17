var bingo = angular.module("bingo", []);
bingo.controller("bingoController", ['$scope', function ($scope) {
    $scope.numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

    //randomize the elements of above array
    $scope.numArr.sort(function (a, b) {
        return 0.5 - Math.random()
    });
    //    console.log($scope.numArr);
    $scope.guessArr = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    // creating 10 different array to check values of rows and columns
    $scope.r1 = new Array(5);
    $scope.r2 = new Array(5);
    $scope.r3 = new Array(5);
    $scope.r4 = new Array(5);
    $scope.r5 = new Array(5);
    $scope.c1 = new Array(5);
    $scope.c2 = new Array(5);
    $scope.c3 = new Array(5);
    $scope.c4 = new Array(5);
    $scope.c5 = new Array(5);

    $scope.guessnum;
    $scope.arrIndex;

    //function that runs after entering the number
    $scope.goBingo = function () {
        if ($scope.guessnum != '') {
            $scope.arrIndex = $scope.numArr.indexOf($scope.guessnum);
            $scope.guessArr[$scope.arrIndex] = $scope.guessnum;
            $scope.guessnum = '';

            $scope.r1_count = $scope.r2_count = $scope.r3_count = $scope.r4_count = $scope.r5_count = $scope.c1_count = $scope.c2_count = $scope.c3_count = $scope.c4_count = $scope.c5_count = 0;

            for (l = 0; l < 5; l++) {
                $scope.r1[l] = $scope.guessArr[l];
                $scope.r2[l] = $scope.guessArr[l + 5];
                $scope.r3[l] = $scope.guessArr[l + 10];
                $scope.r4[l] = $scope.guessArr[l + 15];
                $scope.r5[l] = $scope.guessArr[l + 20];
                $scope.c1[l] = $scope.guessArr[l * 5];
                $scope.c2[l] = $scope.guessArr[(l * 5) + 1];
                $scope.c3[l] = $scope.guessArr[(l * 5) + 2];
                $scope.c4[l] = $scope.guessArr[(l * 5) + 3];
                $scope.c5[l] = $scope.guessArr[(l * 5) + 4];
                if ($scope.r1[l] != '') {
                    $scope.r1_count++;
                }
                if ($scope.r2[l] != '') {
                    $scope.r2_count++;
                }
                if ($scope.r3[l] != '') {
                    $scope.r3_count++;
                }
                if ($scope.r4[l] != '') {
                    $scope.r4_count++;
                }
                if ($scope.r5[l] != '') {
                    $scope.r5_count++;
                }
                if ($scope.c1[l] != '') {
                    $scope.c1_count++;
                }
                if ($scope.c2[l] != '') {
                    $scope.c2_count++;
                }
                if ($scope.c3[l] != '') {
                    $scope.c3_count++;
                }
                if ($scope.c4[l] != '') {
                    $scope.c4_count++;
                }
                if ($scope.c5[l] != '') {
                    $scope.c5_count++;
                }
            }
            if ($scope.r1_count == 5) {
                jQuery(".R_0").addClass("comp-set")
            }
            if ($scope.r2_count == 5) {
                jQuery(".R_1").addClass("comp-set")
            }
            if ($scope.r3_count == 5) {
                jQuery(".R_2").addClass("comp-set")
            }
            if ($scope.r4_count == 5) {
                jQuery(".R_3").addClass("comp-set")
            }
            if ($scope.r5_count == 5) {
                jQuery(".R_4").addClass("comp-set")
            }
            if ($scope.c1_count == 5) {
                jQuery(".C_0").addClass("comp-set")
            }
            if ($scope.c2_count == 5) {
                jQuery(".C_1").addClass("comp-set")
            }
            if ($scope.c3_count == 5) {
                jQuery(".C_2").addClass("comp-set")
            }
            if ($scope.c4_count == 5) {
                jQuery(".C_3").addClass("comp-set")
            }
            if ($scope.c5_count == 5) {
                jQuery(".C_4").addClass("comp-set")
            }
        }
    }


}]);
