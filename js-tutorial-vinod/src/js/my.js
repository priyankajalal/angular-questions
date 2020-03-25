function occurance(str,substr,n){
 /// vinodnayalnayal    , nayal , 2
}

function secondOccur(str){
    //vinod
    counter =0;
    for(i=0;i<str.length;i++){
        for(j=i+1;j<str.length;j++){
            console.log(`i=${i},j=${j}`)
            console.log(str[i],str[j])
            if(str[i]==str[j]){
                counter++;
                if(counter ==2){
                   return str[i]; 
                }
               break;
            }
        }
    }
    return "";
}
result=secondOccur("kamall")
console.log(result)