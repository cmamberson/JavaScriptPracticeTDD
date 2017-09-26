(function(){
    
        function secondLargest(arr){
            var sortedArr = arr.sort(function(a, b){return b - a});
            return arr[1];
        }

        module.exports = secondLargest;
})();