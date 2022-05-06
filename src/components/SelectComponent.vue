<template>
    <form class="d-flex justify-content-center align-items-center">
        <label class="px-3 text-white text-uppercase" for="">Seleziona Genere:</label>
        <select class="form-select" aria-label="Default select example " @change="$emit('changeSelect')" @input="$emit(input, $event.target.value)">
            <option selected disabled>Generi musicali</option>
            <option value="">Tutti</option>
            <option value="Pop">Pop</option>
            <option value="Jazz">Jazz</option>
            <option value="Metal">Metal</option>
            <option value="Rock">Rock</option>
            <option value="HipHop">HipHop</option>
        </select>
    </form>
</template>

<script>
export default {
    name: "SelectComponent",
    props: {
        selectGenre: String 
    },
}
</script>

<style lang="scss" scoped>
</style>