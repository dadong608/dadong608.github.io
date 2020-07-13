/**
 * Created by Administrator on 2017-09-16.
 */
function my$(id) {
    return document.getElementById(id);
}


//设置任意的标签中间的任意文本内容
function setInnerText(element,text) {
    //判断浏览器是否支持这个属性
    if(typeof element.textContent =="undefined"){//不支持
        element.innerText=text;
    }else{//支持这个属性
        element.textContent=text;
    }
}

//获取任意标签中间的文本内容
function getInnerText(element) {
    if(typeof element.textContent=="undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}


function animate(element, target){
    if(element.timeId){
        clearInterval(element.timeId);
    }
    element.timeId = setInterval(function(){
        //当前位置
        var current = element.offsetLeft;
        //每次移动的距离
        var step = 10;
        step = current < target ? step : -step;
        //移动之后的距离
        current += step;
        //判断目标位置和起始位置的差值是否大于步进值,大于继续走,小于,直接到目标位置
        if(Math.abs(current - target) > Math.abs(step)){
            element.style.left = current + 'px';
        }else{
            clearInterval(element.timeId);
            element.style.left = target +'px';
        }
    },5);
}
