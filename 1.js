var str = "AmanZ";

var lower = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var upper = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var x = 0;
var y = 0;
for(i=0;i<str.length;i++){
 for(j=0;j<upper.length;j++){
   if(str[i]===upper[j]){
         y++;
         }
         }
         for(k=0;k<lower.length;k++){
             if(str[i]===lower[k]){
                 x++;
             }
         }
    }

console.log(5*x+3*y);