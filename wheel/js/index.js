var canvas = document.getElementById('canvas');
var cxt = canvas.getContext('2d');
var btn = document.getElementById('btn');
var num = Math.PI / 180;
//将
cxt.translate(250, 250);
//转盘扇形颜色
var colorArr = ['#bce672', '#ed5736', '#eaff56', '#edd1d8', '#cb3a56', '#725e82', '#2edfa3', '#801dae'];
//转盘扇形文字
var textArr = ["js", "css3", "HTML5", "Node.js", "Jquery", "php", "mysql", "Angular"];
var angle = 0;

//点击开始按钮，转盘重新加载开始
btn.onclick = function() {
    location.reload();
}
//定义一个10-20之间的数
var step = 10 + 10 * Math.random();
var t = setInterval(() => {
    if (step <= 0.3) {
        clearInterval(t);
        //转盘转动几个扇形，向上取整
        var number = Math.ceil(angle / 45);
        var con = textArr[textArr.length - number];
        cxt.font = "18px 微软雅黑";
        cxt.textAlign = "center";
        cxt.fillText(con, 0, 0);
    } else {
        if (angle >= 360) {
            angle = 0;
        };
        step *= 0.95;
        //定义一个转动随机角度
        angle += step;
        cxt.clearRect(-200, -200, 500, 500);
        //绘制箭头
        cxt.beginPath();
        cxt.lineWidth = 5;
        cxt.moveTo(135, 0);
        cxt.lineTo(150, 0);
        cxt.stroke();

        cxt.lineWidth = 2;
        cxt.save();
        cxt.rotate(angle * num);
        //绘制扇形
        for (var i = 0; i < 8; i++) {
            cxt.beginPath();
            cxt.moveTo(0, 0);
            cxt.fillStyle = colorArr[i];
            cxt.arc(0, 0, 130, (i - 1) * 45 * num, i * 45 * num);
            cxt.closePath();
            cxt.stroke();
            cxt.fill();
        };
        //白色圆盘
        cxt.beginPath();
        cxt.fillStyle = '#fff';
        cxt.arc(0, 0, 60, 0, 2 * Math.PI);
        cxt.fill();

        //转盘扇形添加文字
        for (var i = 0; i < 8; i++) {
            cxt.save();
            cxt.beginPath();
            //加上25是为了内容放在扇形中间
            cxt.rotate((i * 45 + 25) * num)
            cxt.fillStyle = "#000";
            cxt.font = "14px 微软雅黑";
            cxt.fillText(textArr[i], 75, 0);
            cxt.restore();
        };
        cxt.restore();
    }
}, 60)