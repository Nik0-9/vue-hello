const { createApp } = Vue;

createApp({
    data(){
        return{
            title: 'Hello Vue!',
            secondTitle: '<h2>this is h2 Hello Vue! </h2>',
            image1: 'img/vue.jpeg',
            alt1: 'image vue',
            image2: '<img src="img/Vue2.webp" alt="image vue 2">',
            alt2: 'imgae 2 vue'
        }
    },
    methods: {

    }
}).mount('#app');