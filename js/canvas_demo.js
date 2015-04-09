// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
function spn1_click(){
    var cnv=$$("cnvMain1");
    var cxt=cnv.getContext("2d");
    //清除画布原有图形
    cxt.clearRect(0,0,280,190);
    //开始画实体圆
    cxt.beginPath();
    cxt.arc(100,100,50,0,Math.PI*2,true);
    cxt.closePath();
    //设置填充背景色
    cxt.fillStyle="#eee";
    //进行填充
    cxt.fill();
}
function spn2_click(){
    var cnv=$$("cnvMain1");
    var cxt=cnv.getContext("2d");
    //清除画布原有图形
    cxt.clearRect(0,0,280,190);
    //开始画边框圆
    cxt.beginPath();
    cxt.arc(100,100,50,0,Math.PI*2,true);
    cxt.closePath();
    //设置边框色
    cxt.strokeStyle="#666";
    //设置边框宽度
    cxt.lineWidth=2;
    //进行描边
    cxt.stroke();
}

function spn3_click(){
    var cnv=$$("cnvMain1");
    var cxt=cnv.getContext("2d");
    //清除画布原有图形
    cxt.clearRect(0,0,280,190);
    //开始画圆
    cxt.beginPath();
    cxt.arc(100,100,50,0,Math.PI*2,true);
    cxt.closePath();
    //设置填充背景色
    cxt.fillStyle="#eee";
    //进行填充
    cxt.fill();
    //设置边框色
    cxt.strokeStyle="#666";
    //设置边框宽度
    cxt.lineWidth=2
    //进行描边
    cxt.stroke();
    //开始画衔接的边框圆
    cxt.beginPath();
    cxt.arc(175,100,50,0,Math.PI*2,true);
    cxt.closePath();
    //设置边框色
    cxt.strokeStyle="#666";
    //设置边框宽度
    cxt.lineWidth=2
    //进行描边
    cxt.stroke();
}

//上下移动已绘制的正方形
function spn4_click(){
    var cnv=$$("cnvMain3");
    var cxt=cnv.getContext("2d");
    cxt.translate(-20,-20);
    drawRect();
    cxt.translate(40,40);
    drawRect();
}
//缩放已绘制的正方形
function spn5_click(){
    var cnv=$$("cnvMain3");
    var cxt=cnv.getContext("2d");
    cxt.scale(1.2,1.2);
    drawRect();
    cxt.scale(1.2,1.2);
    drawRect();
}
//旋转已绘制的正方形
function spn6_click(){
    var cnv=$$("cnvMain3");
    var cxt=cnv.getContext("2d");
    cxt.rotate(Math.PI/8);
    drawRect();
    cxt.rotate(-Math.PI/4);
    drawRect3();
}

function drawRect(){

drawRect2();
drawRect3();
}

function drawRect2(){
     var cnv1=$$("cnvMain2");
    var cxt1=cnv1.getContext("2d");
    //开始创建渐变对象
    var gnt=cxt1.createRadialGradient(30,30,0,20,20,400);
    gnt.addColorStop(0,"#000");
    gnt.addColorStop(0.3,"#eee");
    gnt.addColorStop(1,"#fff");
    //开始绘制实体圆路径
    cxt1.beginPath();
    cxt1.arc(125,95,80,0,Math.PI*2,true);
    cxt1.closePath();
    //设置填充背景色
    cxt1.fillStyle=gnt;
    //进行填充
    cxt1.fill();
    //开始绘制边框圆路径
    cxt1.beginPath();
    cxt1.arc(125,95,80,0,Math.PI*2,true);
    cxt1.closePath();
    //设置边框颜色
    cxt1.strokeStyle="#666";
    //设置边框宽度
    cxt1.lineWidth=2;
    //开始描边
    cxt1.stroke();
    }
    function drawRect3(){

    //绘制第三个图形
    var cnv2=$$("cnvMain3");
    var cxt2=cnv2.getContext("2d");
    //设置边框
    cxt2.strokeStyle="#666";
    cxt2.lineWidth=2;
    cxt2.strokeRect(105,70,60,60);
    }
var context;
var A,n;
function btn_onclick()
{
    var width;
    var Height;
    var canvas;
    var Xo,Yo;
    var k;
    canvas=document.getElementById("canvas");
    width=canvas.width;
    height=canvas.height;
    context=canvas.getContext('2d');
    Xo=width/2;
    Yo=height/2;
    k=parseInt(document.getElementById("drawType").value);
    if(k==2)
        A=Yo*0.25;
    else
        A=Yo*0.75;
    context.save();//保存当前绘制状态
    context.clearRect(0,0,width,height);//擦除之前绘制的图形
    context.translate(Xo,Yo);//坐标原点移动到canvas元素中央
    context.beginPath();//开始创建路径
    for(var B=0;B<=6.28;B=B+0.01)
    {
         draw(B);//绘制花朵曲线
    }
    context.closePath();//关闭路径
    context.restore();//恢复坐标轴平移之前的绘制状态
}
function draw(B)
{
    var n=10;
    switch(parseInt(document.getElementById("drawType").value))
    {
         case 3://大丽花
             r=A*Math.sin(n*B)*Math.exp(-B/(20));
             break;
         case 2://令箭荷花
             r=A*(Math.sin(n*B)+3*Math.sin(3*n*B));
             break;
         case 1://蓬莱菊
             r=A*Math.sin(n*B);
    }

   //极坐标的直角坐标
   x=r*Math.cos(B);
   y=r*Math.sin(B);

   context.fillStyle="green";//设置填充颜色
   context.strokeStyle="black";//设置边框颜色
   context.lineTo(-x,-y);//绘制直线
   context.fill();//填充图形
   context.stroke();//绘制边框
}
