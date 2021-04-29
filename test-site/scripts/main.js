/*  let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/
document.querySelector('p').onclick = function(){
    alert('别戳我，我怕疼。');
}

let myImag = document.querySelector('img');

myImag.onclick = function(){
    // 获取属性值
    let mySrc = myImag.getAttribute('src');
    //判断属性值
    if(mySrc === 'images/firefox-icon.jfif'){
        //修改属性值
        myImag.setAttribute('src','images/test.jpg');
    }else{
        myImag.setAttribute('src','images/firefox-icon.jfif');
    }
}  

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    //用户输入姓名
    let myName = prompt('请输入你的名字');
    if (!myName || myName === null) {
        setUserName();
    } else {
        //数据存储在'name'数据项中
        localStorage.setItem('name', myName);
        myHeading.textContent = '欢迎，' + myName + '!';
    }
}

/* 判断用户是否已访问过 */
if (!localStorage.getItem('name')) {
    setUserName();  //否
} else {
    //是，则从'name'数据项中取出数据
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎，' + storedName + '!'
}

myButton.onclick = function () {
    setUserName();
}