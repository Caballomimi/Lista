window.onload=()=>{
    const {createApp}=Vue;
    createApp({
        data(){
            return{
                message:"",
                lista:[],
                mostrar:false,
                messageABuscar:"",
                prioridad:"normal"
            }
        },
        methods:{
            guardarInput(){
                nuevoObjeto={
                    fecha:new Date(),
                    mensaje:this.message,
                    prioridad:this.prioridad,
                    finalizado:false
                }
                console.log(nuevoObjeto)
                this.lista.push(nuevoObjeto)
                this.message=""
             },
            numeroDeNotas(){
                return this.lista.length
            },
            numeroDeNotasPendientes(){
                resultado=0;
                this.lista.forEach(element => {
                    if (element.finalizado) {
                        resultado++;
                    }
                });
                lengthMaxima=this.numeroDeNotas()
                return lengthMaxima-resultado
            },
            mostrarTodo(){
                console.log(this.lista)
            },
            eliminarTarea(pos){
                this.lista.splice(pos,1);
            },
            eliminarTodas(){
                for (let i = 0; i < this.lista.length; i++) {
                    if (this.lista[i].finalizado) {
                        this.lista.splice(i,1)
                    }
                }
            }
            
        },
        computed:{
            busqueda(){
                this.lista.sort((a, b)=> {
                    const prioridades = { 'alta': 0, 'normal': 1, 'baja': 2 };
                    return prioridades[a.prioridad] - prioridades[b.prioridad];
                })
                if (this.mostrar) {
                    return this.lista.filter(n=> n.mensaje.includes(this.messageABuscar));
                }else{
                    return this.lista;
                }
            }
        }
    }).mount('#app')
}