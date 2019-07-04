const thottles=function(){
    this.dingshi='';
};
thottles.prototype.timeEnd =function (fn,time){
    if(this.dingshi){
        this.dingshi=clearTimeout(this.dingshi)
    }
    this.dingshi=setTimeout(function () {
        fn()
    },time);
};
const thottles_news=new thottles();

export  default thottles;  // let thottles= new thottles()  //thottles.timeEnd(()=>{ //some thing },1000)定义多个互不干扰的节流器
export { thottles_news };  //如果同时运行多个 只执行最后一次的
