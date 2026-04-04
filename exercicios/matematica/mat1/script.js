function caminho(i, fim, passo){
if(passo === 0){
    console.log(`pode não`)
}else{
    if(i<fim && passo > 0 ){
    for(i;i<fim;i+=passo){
    console.log(i)   
}console.log(fim)
}else if(i>fim && passo < 0){
   for(i;i>fim;i+=passo){
    console.log(i)    
}console.log(fim) 
}else{
    console.log(`pode não`)
}
}}
caminho(10, 2, -2)