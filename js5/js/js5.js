// //获取用户名、密码、hint和button 节点
// var username = document.getElementById("user").value;
// console.log(username);
// var password = document.getElementById("password").value;
// console.log(password);


var input =document.getElementsByTagName("input")[0];
var hint = document.getElementById("hint");
var login = document.getElementsByTagName("button")[0];

var user = document.getElementById("user");
var username; //定义一个用户名变量
console.log(username)

//当用户名输入框失去焦点时把值传给用户名变量
user.onchange = function () {
    username = user.value;
    console.log(username)
}

var psd = document.getElementById("password");
var password; //定义一个密码变量
console.log(password)

// 当密码输入框失去焦点时把值传给密码变量
psd.onchange = function () {
    password = psd.value;
    console.log(password)
}
// 当用户输入时清除提示
user.onclick = function () {
    user.placeholder = "";
    hint.innerText = "";
}
// 当用户输入时清除提示
psd.onclick = function () {
    psd.placeholder = "";
    hint.innerText = "";
}





var xhr = new XMLHttpRequest(); //创建ajax的XHR对象

// 当用户点击登录按钮
login.onclick = function () {
    // 创建post请求的数据形式
    var data = "name=" + username + "&pwd=" + password;
    console.log(data)

    // 当用户未输入账号密码点击登录按钮跳出提示
    if (user == undefined || user == "" || password == undefined || password == "") {
        hint.innerText="请输入账号密码";
    } else if (user != undefined && password != undefined) {
        // ajax状态改变事件
        // 当输入账号密码点击登录按钮发起post请求,并返回数据
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr)
                if (xhr.status === 200) {
                    let arr = [];
                    arr = JSON.parse(xhr.responseText); // 把服务器响应的数据转换到arr数组
                    // console.log(arr.code)
                    // console.log(arr.message)
                    // console.log(xhr.response)

                    // 根据返回的不同数据提示报错信息
                    if (arr.code == "-5003" && arr.message == "用户不存在") {
                        hint.innerText = arr.message;
                    } else if (arr.code == "-5004" && arr.message == "密码错误") {
                        hint.innerText = arr.message;
                    } else if (arr.code == "0" && arr.message == "success") {
                        hint.innerText = "登录成功";
                        location.href = "../js5-1.html"
                    }
                }
            }
        }
        // 发起post请求
        xhr.open("POST", "/carrots-admin-ajax/a/login", true);
        // 定义header信息，post请求没有header信息就会报错
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data); //发起获取的用户名和密码的值
    }
}





