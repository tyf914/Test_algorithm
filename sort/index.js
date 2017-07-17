/**
 * Created by yifei.tang on 2017/7/17.
 */
var add_button =document.getElementById('add');
var sort_button=document.getElementById('sort');
var reset_button=document.getElementById('reset');

var input_area=document.getElementById('input_area');
var output_area=document.getElementById('output_area');

var input_text=document.getElementsByTagName('input')[0];

var sort_method=document.getElementById('sort_method');

var time='';

//数组：
var arr=[];
//交换数据时的暂存变量
var temp=0;
//检验是否有输入的变量
var had=false;

//输入数据时，按回车键触发add_button的click事件
document.addEventListener('keydown',function (e) {
   if(e.target=input_text && e.keyCode==13) {
       add_button.click();
   }
});

//桶排序
function bucketSort(arr) {
    var newArr=new Array(9);
    for(var i=0;i<9;i++){
        newArr[i]=0;
    }
    for(var i=0;i<arr.length;i++){
        newArr[arr[i]]++;
    }
    arr.splice(0,arr.length);
    console.log(arr);
    for(var i=0;i<9;i++){
        for(j=0;j<newArr[i];j++){
            arr.push(i);
        }
    }
    return arr;
}

//冒泡排序
function bubbleSort(arr) {
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
}

//快速排序
function quickSort(left,right) {
    var i=left;
    var j=right;

    if(i>=j){
        return;
    }

    while (i!==j){
        while(arr[j]>=arr[left] && i<j){
            j--;
        }
        while(arr[i]<=arr[left] && i<j){
            i++;
        }
        if(i!==j){
            temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
        }
    }

    temp=arr[left];
    arr[left]=arr[i];
    arr[i]=temp;

    quickSort(left,i-1);
    quickSort(i+1,right);
}

//数据按钮点击事件
add_button.addEventListener('click',function () {
    if (input_text.value.trim()!==''){
        had=true;
        arr.push(input_text.value.trim());
        input_area.innerHTML+=input_text.value.trim();
        input_area.innerHTML+='  ';
        input_text.value='';
    }
});

//排序按钮点击事件
sort_button.addEventListener('click',function () {
    if (!had){
        //内置数组
        arr=[1,7,3,3,8,1,2,7,3,6,3];
        for(var i=0;i<arr.length;i++){
            input_area.innerHTML+=arr[i];
            input_area.innerHTML+=' ';
        }
    }
    var method=sort_method.options[sort_method.selectedIndex].value;
    switch (method){
        case 'bubbleSort':
            time=new Date();
            bubbleSort(arr);
            break;
        case 'quickSort':
            time=new Date();
            quickSort(0,arr.length-1);
            break;
        case 'bucketSort':
            time=new Date();
            bucketSort(arr);
            break;
    }
    time=new Date()-time;
    for(var i=0;i<arr.length;i++){
        output_area.innerHTML+=arr[i];
        output_area.innerHTML+=' ';
    }
    output_area.innerHTML+='<br>';
    output_area.innerHTML+='采用的排序方法是：';
    output_area.innerHTML+=method;
    output_area.innerHTML+='<br>';
    output_area.innerHTML+='耗时：';
    output_area.innerHTML+=time+'ms';
    // output_area.innerHTML+='ms';
});

//重置按钮点击事件
reset_button.addEventListener('click',function () {
   input_area.innerHTML='输入的数组为：';
   output_area.innerHTML='输出的数组为：';
   had=false;
   arr=[];
});