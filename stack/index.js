/**
 * Created by yifei.tang on 2017/7/17.
 */
var input_text=document.getElementsByTagName('input')[0];
var button=document.getElementsByTagName('button')[0];
var result=document.getElementById('result');

//堆栈构造函数
function Stack() {
    this.data=[];
    this.top=-1;
    this.push=function (item) {
        this.data.push(item);
        this.top++;
    };
    this.pop=function () {
        this.top--;
        return this.data.pop();
    }
}
function test(str) {

    var flag=true;
    var len=str.length;
    var middle=Math.floor(len/2);
    var stack=new Stack();

    //入栈
    for(i=0;i<middle;i++){
        stack.push(str[i]);
    }
    if (len%2==0){
        for(var i=middle;i<len;i++){
            if (str[i]!==stack.pop()){
                flag=false;
                break;
            }
        }
    }else{
        for(var i=middle+1;i<len;i++){
            if (str[i]!==stack.pop()){
                flag=false;
                break;
            }
        }
    }
    if(flag){
        result.innerHTML='是';
    }else{
        result.innerHTML='否';
    }
}

button.addEventListener('click',function () {
    var str=input_text.value;
    test(str);
});