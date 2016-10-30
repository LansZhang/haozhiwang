/**
 * Created by Administrator on 2016/8/19.
 */
function animate(obj,target){
    //判断是否已经有定时器，有的话清除，没有继续运行
    if(obj.timer){
        clearInterval(obj.timer)
    }
    //设置定时器
    obj.timer=setInterval(function () {
        //获取left
        var leader=obj.offsetLeft;
        var step=3;
        //判断对象是否需要往回走
        if(leader>target){
            step=-step;
        }
        //判断是否够一步，够的话运行，不够手动把他抱过去
        if(Math.abs(leader-target)>Math.abs(step)){
            var leader=leader+step;
            //设置left
            obj.style.left=leader+"px";
        }
        else{
            clearInterval(obj.timer)//清除定时器
            //设置lefe手动抱过去
            obj.style.left=target+"px";

        }
        console.log(obj.timer);
    })
}