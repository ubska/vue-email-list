// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.


const { createApp } = Vue;

createApp({
     // tutti i dati della applicazione
    data() {
       return {
            emails: [],
        }
     },
 // tutte le funzioni (metodi) della applicazione
    methods: {

    },
    mounted() {
        for (let i = 0; i < 10; i++){
           axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then (risposta => {
            const result = risposta.data.response;
            console.log(result);
            this.emails.push(result);
        }); 
        }
        
    }
}).mount('#app');

