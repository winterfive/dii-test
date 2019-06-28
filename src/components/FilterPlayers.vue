<script>
export default {
    data: function() {
        return {
            text: "testing filters"
        }
    }
    
}
</script>

<template>
    <div>
        <h2>{{ text }}</h2>
    </div>
</template>

<style lang="scss" scoped>

    h2 {
        color: green;
    }

</style>