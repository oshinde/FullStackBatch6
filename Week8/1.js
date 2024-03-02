function testFun1() {
    document.getElementById('test').innerHTML= document.URL + " " + 
    document.title
}

function testFun2() {
    document.getElementsByClassName('test1')[0].innerHTML = "changed"
    console.log(x)
    alert(x[1].innerHTML)
}

function testFun3() {
    document.getElementsByTagName('p')[1].innerHTML 
    = "changed inner Html of 2nd p tag"
}

function testFun4(){
    document.getElementById('imgId').src = "2.jpg"
}

function testFun5(){
    document.getElementById('container1').style.backgroundColor = 'red'
}

function testFun6(){
    const elem = document.getElementById('innerContainer')
    let pos = 0;
    let id = null;
    clearInterval(id)
    id = setInterval(testFrame,5);
    function testFrame(){
        if(pos==350){
            clearInterval(id)
        }
        pos++;
        elem.style.top = pos +"px"
        elem.style.left = pos +"px"
    }
}