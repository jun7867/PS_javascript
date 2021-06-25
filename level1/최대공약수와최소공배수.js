function solution(n, m) {
    const answer = [];
    
    let big = n >= m ? n : m;
    let small = n >=m ? m : n;
    
    answer[0]= gcd(big,small);
    answer[1]= big*small/answer[0];
    return answer;
}

function gcd(b, s){
    if(b % s ==0)
        return s;
    return gcd(s,b%s);
}
