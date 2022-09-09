<template>
    <h1>Bienvenido a Leo's Airport</h1>
    <table text-align="center">
        <tbody>
            <tr>
                <td>Origen</td>
                <td>Destino</td>
                <td>Fecha</td>
            </tr>
            <tr>
                <td><input v-model="origen" type="text" /></td>
                <td><input v-model="destino" type="text" /></td>
                <td><input v-model="fecha" type="text" /></td>
            </tr>
        </tbody>
    </table>
    <button @click="getFlight">Consultar</button>
    <table>
	<tbody>
		<tr>
			<td>Número de Vuelo</td>
			<td>Origen</td>
			<td>Destino</td>
			<td>Categoria</td>
			<td>Nombre del avion</td>
			<td>Valor asiento (Individual)</td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</tbody>
</table>

</template>

<script>
import getVuelo from "@/helpers/procesarVuelos.js";
export default {
    data() {
        return {
            origen: null,
            destino: null,
            fecha: null,
            vuelos:null,
            vuelos:[]
        }
    },
    methods: {
        async getFlight() {
            const response = await getVuelo(this.origen, this.destino, this.fecha)
            this.vuelos = response
            console.log(this.vuelos)
        }
    }
}
</script>

<style>
table{
    text-align: center;
    margin: 0 auto;
}
</style>