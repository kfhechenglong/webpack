var con = console ;
con.log('这是index.js');

let Mock = require('mockjs');
let data = Mock.mock({
    'list|1-10':[{
        'id|+1':1
    }]
});
con.log(data);
let string = Mock.mock({
    's|1':'12345'
});
con.log(string);

let num = Mock.mock({
    'number1|1-100.1-10':1,
    'number2|123.1-10':1,
    'number3|1.2':1,
});
con.log(num);

let placeHolder = Mock.mock({
    name:{
        first:'@First',
        middle:'@First',
        last:'@Last',
        full:'@first @middle @last'
    }
});
con.log(placeHolder);

var Random = Mock.Random;
let email = Random.email();
con.log(email);
con.log(Random.character());

Random.extend({
    constellation:function(){
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations);
    }
});
con.log(Random.constellation());