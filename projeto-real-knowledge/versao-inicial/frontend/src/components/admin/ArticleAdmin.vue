<template>
	<div class="article-admin">
		<b-form>
			<input type="hidden" id="article-id" v-model="article.id">
			<b-form-group label="Nome:" label-for="article-name">
				<b-form-input type="text" id="article-name" v-model="article.name"
					placeholder="Informe o Nome do Artigo"
					required :readonly="mode === 'remove'" />
			</b-form-group>
			<b-form-group label="Descrição:" label-for="article-descripttion">
				<b-form-input type="text" id="article-descripttion" v-model="article.descripttion"
					placeholder="Informe o Descrição do Artigo"
					required :readonly="mode === 'remove'" />
			</b-form-group>
			<b-form-group v-if="mode === 'save'" label="Imagem (URL):" label-for="article-imageUrl">
				<b-form-input type="text" id="article-imageUrl" v-model="article.imageUrl"
					placeholder="Informe a URL da Image do Artigo"
					required :readonly="mode === 'remove'" />
			</b-form-group>

			<b-form-group v-if="mode === 'save'" label="Categoria:" label-for="article-categoryId">
				<b-form-select id="article-categoryId" v-model="article.categoryId"
					required :options="categories" />
			</b-form-group>
			<b-form-group v-if="mode === 'save'" label="Autor:" label-for="article-userId">
				<b-form-select id="article-userId" v-model="article.userId"
					required :options="users" />
			</b-form-group>
			<b-form-group v-if="mode === 'save'" label="Conteúdo:">
				<VueEditor v-model="article.content" required
					placeholder="Informe o Conteúdo" />
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
		<b-table hover striped :fields="fields" :items="articles">
			<template slot="actions" slot-scope="data">
				<b-button variant="warning" @click="loadArticle(data.item)">
					<i class="fa fa-pencil"></i>
				</b-button>
				<b-button class="ml-2" variant="danger" @click="loadArticle(data.item, 'remove')">
					<i class="fa fa-trash"></i>
				</b-button>
			</template>
		</b-table>
		<b-pagination size="md" v-model="page" :total-rows="count" :per-page="limit" />
	</div>
</template>

<script>

	import { VueEditor } from 'vue2-editor'
	import { baseApiUrl, showError } from '@/global'
	import axios from 'axios'

	export default {

		name: 'ArticleAdmin',
		components: { VueEditor },
		data() {

			return {

				mode: 'save',
				articles: [],
				categories: [],
				users: [],
				article: {},
				page: 1,
				limit: 0,
				count: 0,
				fields: [
					{ key: 'id', label: 'Código', sortable: true },
					{ key: 'name', label: 'Nome', sortable: true },
					{ key: 'descripttion', label: 'Descrição', sortable: true },
					{ key: 'imageUrl', label: 'Imagem (URL)' },
					{ key: 'categoryId', label: 'Categoria', sortable: true },
					{ key: 'actions', label: 'Ações' },
				]
			}
		},
		methods: {

			loadArticles() {

				axios.get(`${baseApiUrl}/articles?page=${this.page}`)
					.then(res => {

						this.articles = res.data.data
						this.count = res.data.count
						this.limit = res.data.limit
					})
					.catch(showError)
			},
			loadArticle(article, mode = 'save') {

				this.mode = mode
				axios.get(`${baseApiUrl}/articles/${article.id}`)
					.then(res => this.article = res.data)
					.catch(showError)
			},
			loadCategories() {

				axios.get(`${baseApiUrl}/categories`)
					.then(res => {

						this.categories = res.data.map(category => {

							return { ...category, value: category.id, text: category.path}
						})
					})
					.catch(showError)
			},
			loadUsers() {

				axios.get(`${baseApiUrl}/users`)
					.then(res => {

						this.users = res.data.map(user => {

							return { ...user, value: user.id, text: `${user.name} - ${user.email}`}
						})
					})
					.catch(showError)
			},
			save() {

				const method = this.article.id ? 'put' : 'post'
				const url = this.article.id ? `/${this.article.id}` : ''
				axios[method](`${baseApiUrl}/articles${url}`, this.article)
					.then(() => {

						this.$toasted.global.defaultSuccess()
						this.reset()
					})
					.catch(showError)
			},
			remove() {

				axios.delete(`${baseApiUrl}/articles/${this.article.id}`)
					.then(() => {

						this.$toasted.global.defaultSuccess()
						this.reset()
					})
					.catch(showError)
			},
			reset() {

				this.mode = 'save'
				this.article = {}
				this.loadArticles()
			},
		},
		watch: {

			page() {

				this.loadArticles()
			}
		},
		mounted() {

			this.loadArticles()
			this.loadCategories()
			this.loadUsers()
		}
	}
</script>

<style>
	
</style>