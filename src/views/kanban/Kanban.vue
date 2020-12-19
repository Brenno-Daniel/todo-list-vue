<template>
  <div>
    <div>{{ count }}</div>
    <a @click="decrement">Decrementar</a> | 
    <a @click="increment">Incrementar</a>
  </div>
</template>

<script>
export default {
    computed: {
        count: {
            set(valor) {
                this.$store.commit('setCount', valor);
            },
            get() {
                return this.$store.state.count;
            }
        }
    },
    methods: {
        increment() {
            this.count = this.count + 1;
        },
        decrement() {
            this.count = this.count - 1;
        }
    }
}
</script>

<style>

</style>