var canvas = document.getElementById('canvas');
var cxt = canvas.getContext("2d");
var originx = 200;
var originy = 200;
var radius = 100;
var audio = document.getElementById('audio');
audio.ontimeupdate = function() {
    if (audio.currentTime > 0.2) {
        audio.pause();
    }
}
setInterval(function() {
    cxt.clearRect(0, 0, 400, 400);
    audio.currentTime = 0;
    audio.play();
    //阴影
    cxt.shadowColor = "#888";
    cxt.shadowOffsetX = 1;
    cxt.shadowOffsetY = 1;
    cxt.shadowBlur = 3;

    // 渐变色
    var colorObj = cxt.createRadialGradient(originx, originy, 1, originx, originy, 100);
    // 定义一个从 #efefef 到 #cecece的渐变
    colorObj.addColorStop(0, "#efefef");
    colorObj.addColorStop(1, "#cecece");
    cxt.fillStyle = colorObj;

    //设置边框（路径的粗细）
    cxt.lineWidth = 8;
    // 绘制圆
    cxt.beginPath();
    //用渐变色填充边框
    cxt.strokeStyle = colorObj;
    cxt.arc(originx, originy, radius, 0, 2 * Math.PI);
    cxt.stroke();
    cxt.fill();

    //去掉阴影，绘制的刻度线不需要阴影
    cxt.shadowColor = "#888";
    cxt.shadowOffsetX = 0;
    cxt.shadowOffsetY = 0;
    cxt.shadowBlur = 0;
    //画刻度
    draw();
    //画针
    var date = new Date();
    var hour = date.getHours() * 30 + (date.getMinutes() * 6 / 12) - 90;
    var minute = date.getMinutes() * 6 - 90;
    var second = date.getSeconds() * 6 - 90;
    //画时针
    drawPointer(55, hour, 4, "#000");
    //画分针
    drawPointer(65, minute, 3, "#888");
    //画秒针
    drawPointer(75, second, 2, "#ff0000");

    //小圆圆心
    cxt.shadowColor = "#888";
    cxt.shadowOffsetX = 1;
    cxt.shadowOffsetY = 1;
    cxt.shadowBlur = 3;
    cxt.fillStyle = "#aaa";
    cxt.beginPath();
    cxt.arc(originx, originy, 4, 0, 2 * Math.PI);
    cxt.fill();
}, 1000);
//画针的函数
function drawPointer(radius, angle, width, color) {
    cxt.lineWidth = width;
    cxt.strokeStyle = color;
    cxt.beginPath();
    cxt.moveTo(originx, originy);
    cxt.lineTo(originx + radius * Math.cos(angle * Math.PI / 180), originy + radius * Math.sin(angle * Math.PI / 180));
    cxt.stroke();
}
//画刻度的函数
function draw() {
    for (var i = 0; i < 60; i++) {
        //angle指弧度：弧度的计算公式：PI/180 * 角度;i是绘制一个小刻度线，6是6度
        var angle = i * 6 * Math.PI / 180;
        var radius1 = radius - 4;
        var lw = 2;
        if (i % 5 == 0) {
            radius1 = radius - 8;
            lw = 4;
        };
        cxt.strokeStyle = "#888";
        cxt.lineWidth = lw;
        cxt.beginPath();
        //起始点
        cxt.moveTo(originx + radius * Math.cos(angle), originy + radius * Math.sin(angle));
        cxt.lineTo(originx + (radius1) * Math.cos(angle), originy + (radius1) * Math.sin(angle));
        cxt.stroke();
    };
}