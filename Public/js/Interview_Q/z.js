let n = 5;
for(let i=1; i<=n; i++){
  let s = ''
  for(j=1; j<=n; j++){
    if(i===1|| i===n || j===n-i+1){
      s += 'x'
    }else{
      s += ' '
    }
  }
  console.log(s)
}

