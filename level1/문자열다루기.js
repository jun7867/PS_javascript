function solution(s) {
    for(let i=0; i<s.length;i++){
        if(s.length==4 || s.length==6){
            if(isNaN(s[i]))
                return false;  
        }else
            return false;
           
}
    
    return true;
}