<template>
    <h2>Redireccionando</h2>
</template>
<script>
export default {
    name: 'Redirect',
    mounted() {
        var termino = this.$route.params.termino;
        this.$router.push('/search/' + termino)
    }
}
</script>