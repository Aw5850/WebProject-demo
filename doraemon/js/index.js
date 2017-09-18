var cxt = document.getElementById('doraemon').getContext('2d');
//头部
cxt.beginPath(); // 开始路径绘制
cxt.lineWidth = 1; // 设置线宽
cxt.strokeStyle = '#000'; // 设置线的颜色
//ctx.arc(x, y, 半径, startAngle, endAngle, anticlockwise);
cxt.arc(200, 175, 175, 0.7 * Math.PI, 0.3 * Math.PI); //创建曲线
cxt.fillStyle = "#0bb0da";
cxt.fill();
cxt.stroke(); // 进行线的着色，这时整条线才变得可见

//脸部
cxt.beginPath();
cxt.fillStyle = "#fff";
cxt.moveTo(110, 110); // 设置路径起点，坐标为(110,110)
cxt.quadraticCurveTo(-10, 200, 120, 315); //绘制一条二次贝塞尔曲线：
cxt.lineTo(280, 315); // 绘制一条到(280,315)的直线
cxt.quadraticCurveTo(410, 210, 290, 110);
cxt.lineTo(110, 110);
cxt.fill();
cxt.stroke();

//眼睛
cxt.beginPath();
cxt.lineWidth = 1;
cxt.fillStyle = "#fff";
cxt.moveTo(110, 100);
//绘制一条三次贝塞尔曲线：
cxt.bezierCurveTo(110, 25, 200, 25, 200, 100);
cxt.bezierCurveTo(200, 175, 110, 175, 110, 100);
cxt.moveTo(200, 100);
cxt.bezierCurveTo(200, 25, 290, 25, 290, 100);
cxt.bezierCurveTo(290, 175, 200, 175, 200, 100);
cxt.fill();
cxt.stroke();

//左眼球
cxt.beginPath();
cxt.fillStyle = "#000";
cxt.arc(170, 130, 12, 0, 2 * Math.PI);
cxt.fill();
cxt.stroke();
//右眼球
cxt.beginPath();
cxt.fillStyle = "#000";
cxt.arc(230, 130, 12, 0, 2 * Math.PI);
cxt.fill();
cxt.stroke();

//鼻子
cxt.beginPath();
cxt.arc(200, 165, 25, 0, 2 * Math.PI);
cxt.fillStyle = "#d05823";
cxt.fill();
cxt.stroke();

//左胡须 从左往里画
cxt.beginPath();
cxt.moveTo(80, 175);
cxt.lineTo(150, 195);
cxt.moveTo(80, 200);
cxt.lineTo(150, 205);
cxt.moveTo(80, 225);
cxt.lineTo(150, 215);

//中间竖线
cxt.moveTo(200, 195);
cxt.lineTo(200, 290);

//右胡须 从右往里画
cxt.moveTo(320, 175);
cxt.lineTo(250, 195);
cxt.moveTo(320, 200);
cxt.lineTo(250, 205);
cxt.moveTo(320, 225);
cxt.lineTo(250, 215);
//嘴巴
cxt.moveTo(80, 240);
cxt.quadraticCurveTo(200, 350, 320, 240);
cxt.stroke();

//围脖
cxt.beginPath();
cxt.moveTo(81, 316);
cxt.lineTo(320, 316);
cxt.arcTo(330, 316, 330, 326, 10); //右上弧度
cxt.lineTo(330, 336);
cxt.arcTo(330, 346, 305, 346, 10); //右下弧度
cxt.lineTo(81, 346);
cxt.arcTo(71, 346, 71, 336, 10); //右下弧度
cxt.lineTo(71, 326);
cxt.arcTo(71, 316, 81, 316, 10); //左上弧度
cxt.fillStyle = "#b13209";
cxt.fill();
cxt.stroke();

//下半身
cxt.beginPath();
cxt.fillStyle = "#0bb0da";
cxt.moveTo(80, 346);
//左衣服
cxt.lineTo(26, 406);
cxt.lineTo(65, 440);
cxt.lineTo(85, 418);
cxt.lineTo(85, 528);
cxt.lineTo(185, 528);
//右衣服
cxt.lineTo(315, 528);
cxt.lineTo(315, 418);
cxt.lineTo(335, 440);
cxt.lineTo(374, 406);
cxt.lineTo(320, 346);
cxt.fill();
cxt.stroke();

//左手
cxt.beginPath();
cxt.arc(44, 425, 28, 0, 2 * Math.PI);
cxt.fillStyle = "#fff";
cxt.fill();
cxt.stroke();

//右手
cxt.beginPath();
cxt.arc(356, 425, 28, 0, 2 * Math.PI);
cxt.fillStyle = "#fff";
cxt.fill();
cxt.stroke();

//肚子
cxt.beginPath();
cxt.lineWidth = 1;
cxt.strokeStyle = '#000';
cxt.arc(200, 400, 91, 1.8 * Math.PI, 1.2 * Math.PI);
cxt.fillStyle = "#fff";
cxt.fill();
cxt.stroke();
//口袋
cxt.beginPath();
cxt.moveTo(140, 390);
cxt.lineWidth = 1;
cxt.strokeStyle = '#000';
cxt.arc(200, 390, 60, 2.0 * Math.PI, 1.0 * Math.PI, false);
cxt.fillStyle = "#fff";
cxt.fill();
cxt.stroke();

// 两只脚的空隙
cxt.beginPath();
cxt.fillStyle = '#ccc';
cxt.arc(200, 529, 20, Math.PI, 0);
cxt.fill();
cxt.stroke();
// 左脚
cxt.beginPath();
cxt.fillStyle = '#fff';
cxt.moveTo(180, 528);
cxt.lineTo(72, 528);
cxt.bezierCurveTo(52, 528, 52, 558, 72, 558);
cxt.lineTo(180, 558);
cxt.moveTo(180, 558);
cxt.bezierCurveTo(200, 558, 200, 528, 180, 528);
cxt.fill();
cxt.stroke();
// 右脚
cxt.beginPath();
cxt.fillStyle = '#fff';
cxt.moveTo(220, 528);
cxt.lineTo(328, 528);
cxt.bezierCurveTo(348, 528, 348, 558, 328, 558);
cxt.lineTo(220, 558);
cxt.moveTo(220, 558);
cxt.bezierCurveTo(200, 558, 200, 528, 220, 528);
cxt.fill();
cxt.stroke();