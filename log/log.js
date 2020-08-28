


const log = (data,msg='',date=false)=>{
    console.log('-'.padEnd(20,'-'))
    if(date){
        console.log(new Date().toLocaleDateString())
        console.log(new Date().toLocaleTimeString())
        console.log('-'.padEnd(20,'-'))
    }
    if(msg){
        console.log(msg)
    }
    if(data){
        console.log(data)
    }
    console.log('-'.padEnd(20,'-'))
}
module.exports = log
