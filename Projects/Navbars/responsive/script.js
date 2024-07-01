function myFunc(){
    const btn = document.getElementById('menu')
    if(btn.className=='menu')
        btn.className += ' shown'
    else 
        btn.className='menu'
    console.log(btn.className)
}