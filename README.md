# lottery
概率抽奖
抽奖有多种方式：（https://www.zhihu.com/question/31602439） 假设转盘10个奖励，编号为1-10，1为（空）2-10越来越好，10为大奖。
一：绝对概率抽奖，奖品递减
    服务器会设置10个奖励组，对应十个奖励，每组1个绝对概率，放服务器随机。
    假设设置：奖励1：:80%概率，奖励2:10%概率，奖励3:5%，概率，奖励4:3%概率，奖励5：1%概率，奖励6:0.5概率，奖励7:0.25%概率， 奖励8:0.1%概率，奖励9:0.1%概率，奖励10:0.05%概率。奖励名额： 奖励10，名额1，奖励9：名额3，以此类推 奖励1:99999999；抽中以此名额-1；
    {
      根据随机数(0-100)来设置奖励组    random >20 为奖励1，未中奖；random >10 为奖励2，random >5,奖励3， 类推奖励10，random(0.05-0.01)之间的数
      返回一个奖励等级n 然后，名额数组 award=[99999,10000,1000,100,55,....,1] award[n] -- >0，还有，否则没有了 下次抽中直接跳转到 award[0]。
      
        var power=[999,1,1,1,1,2,5];   //奖品分布个数
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
            * 比如 Lv4 概率提升20%  那么 a1中随机数字a1*=0.8; 可能提升到a2 中 Lv3 提升30% 类推a1 *=0.7
            *
            * */
        }
    }
    
  这种抽奖存在有可能永远会有某一个奖没有抽到，因为抽到一个随机数，可能因为奖品没有而跳转到到award[0]中。
  
  第二种：权重分配，名额递减。服务器会设置10个奖励组对应10个奖励，给每个组设立1个权重值。
  假设，我们设置：奖励1：500，奖励2：200，奖励3：100，奖励4：50，奖励5：40，奖励6：30，奖励7：20，奖励8：10，奖励9：5，奖励10：1  然后奖励10名额为1，奖励9的名额为3，以此类推。奖励1的名额需要策划预先预估会参与此次活动的总人数。
  那么，假若要抽到奖励5的概率为：（奖励5权重*奖励5剩余名额）/（奖励1权重*奖励1剩余名额+奖励2权重*奖励2剩余名额+奖励3权重*奖励3剩余名额+…………奖励10权重*奖励10剩余名额）每次这个档次被人抽中后，名额会-1。
  这种后台随机的时候是相对随机，概率会跟随名额变化不停变动。当奖励组5的名额为0的时候，也不会落入”谢谢你“，而是可能落到奖励组4里。
  {
    
  
  }
