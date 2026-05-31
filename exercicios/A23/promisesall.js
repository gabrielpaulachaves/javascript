//promise.all executa todas as promises passadas como parametro ao mesmo tempo. Com o settimeout, só será executada quando o tempo de todas terminarem.

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 5000, "promise 1")
})
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 6000, "promise 2")
})
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 7000, "promise 3")
})

Promise.all([promise1, promise2, promise3]).then((valor)=>{
    console.log(valor)
}).catch((error)=>{
    console.log(error)
})

//se uma promise é rejetiada, todas sao rejeitadas
//a ordem de qual é rejeitada é qual é rejeitada primeiro

const promise4 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 5000, "promise 1")
})
const promise5 = new Promise((resolve, reject)=>{
    setTimeout(reject, 6000, "promise 5 foi rejeitada")
})
const promise6 = new Promise((resolve, reject)=>{
    setTimeout(reject, 1000, "promise 6 foi rejeitada")
})

Promise.all([promise4, promise5, promise6]).then((valor)=>{
    console.log(valor)
}).catch((error)=>{
    console.log(error)
})

