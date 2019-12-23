
var app=new Vue({
    el:'#app',
    data:{
        titulo:"TEST CON VUE",
        better:"COSTANTES",
        arrays:["Fuck","You","payaso"],
        nombresEventos:[
            {nombre:"Jordi",edad:10},
            {nombre:"albert",edad:20},
            {nombre:"aaaa",edad:12}
        ],
        NuevoEventos:'',
        Cantidad:0
    },
    methods:{
        agregarEvento(){
            this.nombresEventos.push({
                nombre: this.NuevoEventos,
                edad:this.Cantidad

            }
                
            )
            console.log("click");
        }
    },
    computed:{

        sumatotal(){
            this.total=0;

            for(nombresEvento of this.nombresEventos){
                this.total=this.total+parseInt(nombresEvento.edad);   
            }

            return this.total;
        }
    }
})

