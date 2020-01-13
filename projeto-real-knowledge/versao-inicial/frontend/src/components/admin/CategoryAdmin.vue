<template>
	<div class="category-admin">
		<b-form>
			<input type="hidden" id="category-id" v-model="category.id">
			<b-form-group label="Descrição:" label-for="category-name">
				<b-form-input id="category-name" type="text"
					v-model="category.name" required
					:readonly="mode === 'remove'"
					placeholder="Informe a Descrição da Categoria..." />
			</b-form-group>
			<b-form-group v-if="mode === 'save'" label="Categoria Pai:" label-for="category-parentId">
				<b-form-select id="category-parentId"
					:options="categories" v-model="category.parentId">
				</b-form-select>
			</b-form-group>

			<b-form-group v-else label="Categoria Pai:" label-for="category-parentId">
				<b-form-input id="category-parentId" type="text"
					readonly v-model="category.path" />
			</b-form-group>
			<b-button variant="primary" v-if="mode === 'save'" @click="save">
				Salvar
			</b-button>
			<b-button variant="danger" v-if="mode === 'remove'" @click="remove">
				Excluir
			</b-button>
			<b-button class="ml-2" @click="reset">
				Cancelar
			</b-button>
		</b-form>

		<hr>

		<b-table hover striped :fields="fields" :items="categories">
			<template slot="actions" slot-scope="data">
				<b-button variant="warning" @click="loadCategory(data.item)">
					<i class="fa fa-pencil"></i>
				</b-button>
				<b-button class="ml-2" variant="danger" @click="loadCategory(data.item, 'remove')">
					<i class="fa fa-trash"></i>
				</b-button>
			</template>
		</b-table>
	</div>
</template>

<script>

	import { baseApiUrl, showError } from '@/global'
	import axios from 'axios'

	export default {

		name: 'CategoryAdmin',
		data() {

			return {

				mode: 'save',
				categories:[],
				category: {},
				fields: [
					{ key: 'id', label: 'Código', sortable: true },
					{ key: 'name', label: 'Descrição', sortable: true },
					{ key: 'path', label: 'Caminho', sortable: true },
					{ key: 'actions', label: 'Ações' }
				]

			}
		},
		methods: {

			loadCategories() {

				axios.get(`${baseApiUrl}/categories`)
					.then(res => {

						this.categories = res.data.map(category => {

							return { ...category, value: category.id, text: category.path }
						})
					})
			},
			reset() {

				this.mode = 'save'
				this.category = {}
				this.loadCategories()
			},
			save() {

				const method = this.category.id ? 'put' : 'post'
				const url = this.category.id ? `/${this.category.id}` : ''
				axios[method](`${baseApiUrl}/categories${url}`, this.category)
					.then(() => {

						this.$toasted.global.defaultSuccess()
						this.reset()
					})
					.catch(showError)
			},
			remove() {

				axios.delete(`${baseApiUrl}/categories/${this.category.id}`)
					.then(() => {

						this.$toasted.global.defaultSuccess()
						this.reset()
					})
					.catch(showError)
			},
			loadCategory(category, mode = 'save') {

				this.mode = mode
				this.category = { ...category }
			}
		},
		mounted() {

			this.loadCategories()
		}
	}
</script>

<style>
	
</style>