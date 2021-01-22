new Vue({
    el: '#app',
    data :{
        number: 0,
        error: true,
    },
    methods: {
        countUp: function(){
            this.number += 1;
        }
    }
})
