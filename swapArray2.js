'use strict';
(function swapArray(a) {
    
    var center = Math.floor(a.length/2);
    for (var i=0; i< Math.floor(center/2); i++) {
        var nextIndex = center - i - 1;
        var x =a[i];
        a[i]=a[nextIndex];
        a[nextIndex] = x;
    }
     var quarter = Math.floor(a.length*2/3)+1;
    for (var i=(center+1), j=1; i< quarter; i++) {
        var nextIndex = a.length - j;   
        var x =a[i];
        a[i]=a[nextIndex];
        a[nextIndex] = x; 
        j=j+1;
        
    }
    console.log("[" + a.toString() + "]");
}) ([1,2,3,4,5,6,7,8,9,10,11,12]);


