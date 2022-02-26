var a = 1;
var b = 5;

var arr= [];
var count = 0;
for(i=a;i<=b;i++){
    arr.push(i);
}

 var bag = "";
for(j=1;j<arr.length;j++){
   
    for(k=1;k<arr.length;k++){
        if(arr[j]%k===0){
            count++;
        }
        if(count==2){
            bag = bag +  arr[j];
        }
    }
}
console.log(bag);
