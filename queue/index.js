/**
 * Created by yifei.tang on 2017/7/17.
 */
// function Queue(arr,head) {
//     this.q=arr;
//     this.head=head || 0;
//     this.tail=this.q.length++;
//     this.enqueue=function (item) {
//         if(this.head<this.tail){
//             this.q[this.tail]=item;
//             this.tail++;
//             return item;
//         }
//     };
//     this.dequeue=function () {
//         var item=this.q[head];
//         this.head++;
//         return item;
//     };
//     this.printQueue=function () {
//         for(var i=this.head;i<this.tail;i++){
//             console.log(this.q[i]);
//         }
//         console.log(' ');
//     };
//     this.first=function () {
//         return this.q[head];
//     };
// }
//
// var arr=['1th','2th','3th'];
// var q=new Queue(arr,1);
// q.enqueue('4th');
// q.printQueue();
// q.dequeue();
// q.printQueue();
// console.log(q.first());

//搜索后，发现是用数组实现的
function Queue() {
    this.data=[];
    this.enqueue=function (item) {
        this.data.push(item);
    };
    this.dequeue=function () {
        return this.data.shift();
    };
    this.front=function () {
        return this.data[0];
    };
    this.back=function () {
        return this.data[this.data.length-1];
    };
    this.isEmpty=function () {
        if(this.data.length==0){
            return true;
        }
        return false;
    };
    this.toString=function () {
        var str='';
        for(i in this.data){
            str+=this.data[i]+' ';
        }
        return str;
    }
}

var q=new Queue();
var arr=[1,2,3,4,5,'6'];
for(i in arr){
    q.enqueue(arr[i]);
}
console.log(q.dequeue());
console.log(q.front());
console.log(q.back());
console.log(q.isEmpty());
console.log(q.toString());