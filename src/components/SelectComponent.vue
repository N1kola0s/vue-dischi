<template>
    <form class="d-flex justify-content-center align-items-center">
        <label class="px-3 text-white text-uppercase" for="">Seleziona Genere:</label>

        <!-- con il metodo '$emit' eseguo l'emissione di un evento personalizzato che potrà essere ascoltato dal componente genitore. Insieme all'evento verrà passato anche un valore di input. Tramite la proprietà '$event' sarà possibile prendere tale valore  e passarlo all'emit come secondo parametro, '$event.target.value' -->
        <select class="form-select" aria-label="Default select example " @change="$emit('changeSelect')" @input="$emit('input', $event.target.value)">
            <option selected disabled>Generi musicali</option>
            <option value="">Tutti</option>
            <option value="Pop">Pop</option>
            <option value="Jazz">Jazz</option>
            <option value="Metal">Metal</option>
            <option value="Rock">Rock</option>
        </select>
    </form>
</template>

<script>
export default {
    name: "SelectComponent",
    props: {
        selectedValue: String 
    },
}
</script>

<style lang="scss">
</style>