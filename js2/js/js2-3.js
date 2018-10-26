// 获取发牌时保存的数据
var data = JSON.parse(localStorage.getItem('key'));
console.log(data);

var backhome=document.getElementById("backhome");
// 返回按钮返回到发牌页面
backhome.onclick=function() {
    location.href = "../html/js2-2.html";
} 

var off=document.getElementById("off");
// 关闭按钮返回到主页面
off.onclick=function(){
    // 点击关闭弹出提示窗口
    if (confirm("是否要退出游戏返回到主页面")) {
        location.href = "../html/js2-1.html"; //点击确定返回到主页面
    } else {
        return false; //点击取消停留在当前页面
    }
}
