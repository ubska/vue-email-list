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

     // Metodo mounted viene eseguito una volta che l'app è stata montata
    mounted() {
        // richiesta all'API per 10 volte
        for (let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                
                 // Estrarre l'email dalla risposta dell'API
                .then(risposta => {
                const result = risposta.data.response;
                console.log(result);
                    
                // Aggiungere l'email all'array emails
                this.emails.push(result);
            }); 
        }
        
    }
}).mount('#app');

