const app =  new Vue({
el:'#app',
data:{
    titulo:"GYM CON VEU",
    taread:[],
    nuevaTarea:""
},

methods:{
agregarTarea:function(){

    this.taread.push({nombre:this.nuevaTarea,estado:false});
    console.log(this.taread);
    localStorage.setItem('gym-vue',JSON.stringify(this.taread));
   
},
editarTarea:function(index){
    this.taread[index].estado=true;
    localStorage.setItem('gym-vue',JSON.stringify(this.taread));
 
}
,
eliminar:function(index){
    this.taread.splice(index,1);
    localStorage.setItem('gym-vue',JSON.stringify(this.taread));

}

},
created:function(){
    let basededatps=JSON.parse(localStorage.getItem('gym-vue'));
    if(basededatps===null){
        this.taread=[];
    }else{
        this.taread=basededatps;

    }
},


});