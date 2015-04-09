function $$(id)
{
    return document.getElementById(id);
}

//定义变量
var intR,intG,intB,strColor;

//根据获取变化的值，设置预览方块的背景函数
function setSpanColor()
{
    intR=$$("txR").value;
    intG=$$("txG").value;
    intB=$$("txB").value;
    strColor="rgb("+intR+","+intG+","+intB+")";
    $$("pColor").innerHTML=strColor;
    $$("spnPrev").style.backgroundColor=strColor;
}
