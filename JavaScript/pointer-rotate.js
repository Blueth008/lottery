$(function () {
    var isRotate = false;
    var  arr0={
        '0':"未中奖",
        '1':"一等奖",
        '2':"二等奖",
        '3':"三等奖",
        '4':"四等奖",
        '5':"五等奖",
        '6':"六等奖"

    };

    var power=[0,1,1,1,1,2,5];   //奖品分布个数
    $('#pointer').click(function () {

        if(isRotate) return; //先停止避免连续的click造成加快转盘
        isRotate = !isRotate;
        $('#rotate').stopRotate();
        //随机概率中奖算法 1/7 * 奖品分布，名额递减
        var rnd = Math.floor(Math.random()*7 );   //绝对平均中奖概率
        { //权重分配
            a1=[20,21,99,100]
            a2=[10,19];
            a3=[5,9];
            a4=[1,4];
            a5=[0];
            var round = Math.floor(Math.random()*100);
            if(round >20 ) {
                console.log('未中奖');
            }if(round>10){
              console.log('XX奖');
             } else  {    }
        }
        { //根据用户自定义等级来* 概率
            /*
            * 比如 Lv4 概率提升20  那么 a1中随机数字a1*=0.8; 可能提升到a2 中 Lv3 提升30% 类推a1 *=0.7
            *
            * */


        }
        console.log("随机数字："+rnd);
        console.log(power);   //抽奖前奖品数
        if(power[rnd]-->0){
            console.log(power);  //抽奖后奖品数

        }else {
            power[rnd]=0;
            rnd=0;    //设置转盘角度
        }
        console.log("奖励："+rnd);   //实际获得奖品

        $('#rotate').rotate({
            angle:0,
            animateTo:1800-26+Math.floor(360/7)*rnd,
            duration:3000,
            callback:function (){
                isRotate = !isRotate;
                alert('恭喜您获得“'+arr0[rnd]+'”奖励'); //可以转换为数组
            }
        });
        var s = power.reduce(function (p1, p2) {
            return p1+p2;
        });

        if(s == 0){
            alert("奖品发送完毕");
        }
    })
});
