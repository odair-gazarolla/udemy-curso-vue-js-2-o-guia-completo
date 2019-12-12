import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'

// import Usuario from './components/usuario/Usuario.vue'
// import UsuarioLista from './components/usuario/UsuarioLista.vue'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
// import UsuarioEditar from './components/usuario/UsuarioEditar.vue'

import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'

//Lazy load
//the comment 'webpackChunkName' is like a a group, it means that when component 'Usuario'
//is loaded the othes will be too, if there is no these comments, each component would be loaded
//just when access themselves
const Usuario = () => import(/*webpackChunkName: "usuario"*/'./components/usuario/Usuario.vue');
const UsuarioLista = () => import(/*webpackChunkName: "usuario"*/'./components/usuario/UsuarioLista.vue');
const UsuarioDetalhe = () => import(/*webpackChunkName: "usuario"*/'./components/usuario/UsuarioDetalhe.vue');
const UsuarioEditar = () => import(/*webpackChunkName: "usuario"*/'./components/usuario/UsuarioEditar.vue');

Vue.use(Router);

const router = new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {

		if (savedPosition) {

			return savedPosition;
		}

		if (to.hash) {

			return { selector: to.hash }
		}

		return { x: 0, y: 1000 }
	},
	routes: [
		{
			name: 'inicio',
			path: '/',
			// component: Inicio
			components: {

				default: Inicio,
				menu: Menu
			}
		},
		{
			path: '/usuario',
			// component: Usuario,
			components: {

				default: Usuario,
				menu: MenuAlt,
				menuInferior: MenuAlt
			},
			props: true,
			children: [
				{
					path: '',
					component: UsuarioLista
				},
				{
					path: ':id',
					component: UsuarioDetalhe,
					props: true,
					beforeEnter: (to, from, next) => {

						console.log('Antes da rota -> Usuario detalhe');
						next();
					}
				},
				{
					name: 'editarUsuario',
					path: ':id/editar',
					component: UsuarioEditar,
					props: true
				}
			]
		},
		{
			path: '/teste',
			redirect: '/'
		}, 
		{
			path: '*',
			redirect: '/'
		}
	]
});

router.beforeEach((to, from, next) => {

	console.log('Antes da rota -> global');
	next();
});

export default router;