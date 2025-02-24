function findmax(a,b,c,res){
    if(a>b&&a>c){
        res = a;
        return res
    }else if(b>a&&b>c){
        res = b;
        return res
    }else if(c>a&&c>b){
        res = c;
        return res
    }else{
        alert('numbers are same')
    }
}
findmax(13,34,10,0)

function oddoreven(n,){
    if(n%2==0){
        
        return 'true' 
    }else{
        return 'false'
    }
}
console.log('-'*30);

function multiplyNumbers(start, end,sum){
    for(let i = start;i<=end;i++){
        return sum*=i
         

    }
}
multiplyNumbers(1, 8,1)



function findmin(a,b,c,res){
    if(a<b&&a<c){
        res = a;
        return res
    }else if(b<a&&b<c){
        res = b;
        return res
    }else if(c<a&&c<b){
        res = c;
        return res
    }else{
        alert('numbers are same')
    }
}
findmax(13,34,10,0)


function multiplyNumbers(n,sum){
    for(let i = 1;i<=n;i++){
        return sum+=i
         

    }
}
multiplyNumbers(1, 8,1)

