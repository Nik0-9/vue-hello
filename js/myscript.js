const { createApp } = Vue;

createApp({
    data(){
        return{
            title: 'Hello vue!',
            image1: 'img/vue.jpeg',
            alt1: 'image vue'
        }
    },
    methods: {

    }
}).mount('#app');