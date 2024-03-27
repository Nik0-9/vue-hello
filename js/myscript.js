const { createApp } = Vue;

createApp({
    data(){
        return{
            title: 'Hello Vue!',
            secondTitle: '<h2>this is h2 Hello Vue! </h2>',
            images:[{
                src:'img/vue.jpeg',
                alt: 'image vue'
            },
            {
                src:'img/Vue2.webp',
                alt: 'image vue'
            }],
            image2: '<img src="img/Vue2.webp" alt="image vue 2">',
            myImgBackground: 'img-background',
            dNone: 'd-none',
            dBlock: 'd-block'
        }
    }
    
}).mount('#app');