const bird={
    size:'small',
    
}
const mouse={
    name:'micky',
    small:true
}





// console.log(mouse.bird.size)  ///not valid
console.log(mouse[bird.size])
console.log(mouse.size)
console.log(mouse[bird['size']])