const { createApp } = Vue;

createApp({
    data() {
        return {
            mails: [],
        };
    },
    created() {

     for (let i = 0; i < 10; i++) {
             axios
             .get("https://flynn.boolean.careers/exercises/api/random/mail")
             .then((resp) => {
                if (resp.data.response !== this.mails[resp.data.response]){
               this.mails.push(resp.data.response);}
             });
         }
    },
    methods: {

    }

}).mount("#app");


// https://flynn.boolean.careers/exercises/api/random/mail