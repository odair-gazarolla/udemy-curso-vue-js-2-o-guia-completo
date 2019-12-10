<template>
	<div id="app">

		<b-container fluid>
			<b-row>
				<b-col>
					<h1>Animações</h1>
					<hr>
					<b-button variant="primary" class="mb-4" @click="exibir = !exibir">
						Mostrar Mensagem
					</b-button>

					<transition name="fade">
						<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
					</transition>

					<!-- The appear attribute says to execute the transition -->
					<!-- <transition name="slide" appear>
						<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
					</transition>

					<transition name="slide2">
						<b-alert variant="info" show v-if="exibir">{{ msg2 }}</b-alert>
					</transition>

					<transition
						enter-active-class="animated bounce"
						leave-active-class="animated shake">
						<b-alert variant="info" show v-if="exibir">{{ msg2 }}</b-alert>
					</transition>

					<hr>

					<b-select v-model="tipoAnimacao" class="mb-4">
						<option value="fade">Fade</option>
						<option value="slide">Slide</option>
					</b-select>
					<transition :name="tipoAnimacao" mode="out-in">
						<b-alert variant="info" show v-if="exibir" key="info">{{ msg2 }}</b-alert>
						<b-alert variant="warning" show v-else="exibir" key="warning">{{ msg2 }}</b-alert>
					</transition> -->

					<hr>

					<b-button @click="exibir2 = !exibir2">
						Mostrar
					</b-button>
					<transition
						@before-enter="beforeEnter"
						@enter="enter"
						@after-enter="afterEnter"
						@enter-cancelled="enterCancelled"

						@before-leave="beforeLeave"
						@leave="leave"
						@after-leave="afterLeave"
						@leave-cancelled="leaveCancelled">
						<div v-if="exibir2" class="caixa"></div>
					</transition>

					<hr>

					<div class="mb-4">
						<b-button variant="primary" class="mr-4" @click="componenteSelecionado = 'AlertaInfo'">
							Info
						</b-button>
						<b-button variant="secondery" @click="componenteSelecionado = 'AlertaAdvertencia'">
							Advertência
						</b-button>
					</div>
					<transition name="fade" mode="out-in">
						<component :is="componenteSelecionado"></component>
					</transition>
				</b-col>

				<b-col>
					<b-button @click="add" class="mb-4">
						Adicionar
					</b-button>

					<transition-group name="slide3">
						<b-list-group v-for="(a, i) in alunos" :key="a">
							<b-list-group-item @click="removerAluno(i)">{{ a }}</b-list-group-item>
						</b-list-group>
					</transition-group>
				</b-col>
			</b-row>
		</b-container>

	</div>
</template>

<script>
	import AlertaAdvertencia from './AlertaAdvertencia.vue';
	import AlertaInfo from './AlertaInfo.vue';

	export default {

		components: { AlertaInfo, AlertaAdvertencia },

		data() {

			return {

				alunos: ['João', 'Pedro', 'Elias', 'Juventus', 'Junina'],
				msg: 'Uma mensagem de informação para o usuário!',
				msg2: 'Slide e transição.',
				exibir: true,
				exibir2: false,
				tipoAnimacao: 'fade',
				larguraBase: '300px',
				componenteSelecionado: 'AlertaInfo',
			}
		},
		methods: {
			add() {

				let pessoa = Math.random().toString(36).substring(2);
				this.alunos.push(pessoa);
			},

			removerAluno(idx) {

				this.alunos.splice(idx, 1);
			},

			animar(el, done, negativo) {

				let rodada = 1;
				const temporizador = setInterval(() => {

					const novaLargura = this.larguraBase + ((negativo ? -rodada : rodada) * 10);
					el.style.width = `${novaLargura}px`;
					rodada++;
					if (rodada > 30) {

						clearInterval(temporizador);
						done();
					}
				}, 20);
			},

			beforeEnter(el) {

				this.larguraBase = 0;
				el.style.width = `${this.larguraBase}px`;
			},
			enter(el, done) {

				this.animar(el, done, false);
			},
			/*afterEnter(el) {

				console.log('Afeter enter', el);
			},
			enterCancelled() {

				console.log('Enter cancelled');
			},*/
			beforeLeave(el) {

				this.larguraBase = 300;
				el.style.width = `${this.larguraBase}px`;
			},
			leave(el, done) {

				this.animar(el, done, true);
			},
			/*afterLeave(el) {

				console.log('Afeter leave', el);
			},
			leaveCancelled() {

				console.log('Leave cancelled');
			}*/
		}

	}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.caixa {

	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

.fade-enter, .fade-leave-to {

	opacity: 0;
}

.fade-enter-active, .fade-leave-active {

	transition: opacity 2s;
}

.fade-enter-to, .fade-leave {

	/*By default these classes are opacity 1, just expliciting it*/
	opacity: 1;
}

@keyframes slide-in {

	from {transform: translateY(40px);}
	to {transform: translateY(0);}
}

@keyframes slide-out {

	from {transform: translateY(0);}
	to {transform: translateY(40px);}
}

.slide-enter-active {

	animation: slide-in 2s ease;
}

.slide-leave-active {

	animation: slide-out 2s ease;
}

@keyframes slide2-in {

	from {transform: translateY(40px);}
	to {transform: translateY(0);}
}

@keyframes slide2-out {

	from {transform: translateY(0);}
	to {transform: translateY(40px);}
}

.slide2-enter-active {

	animation: slide2-in 2s ease;
	transition: opacity 2s;
}

.slide2-leave-active {

	animation: slide2-out 2s ease;
	transition: opacity 2s;
}

.slide2-enter, .slide2-leave-to {

	opacity: 0;
}

@keyframes slide3-in {

	from {transform: translateY(40px);}
	to {transform: translateY(0);}
}

@keyframes slide3-out {

	from {transform: translateY(0);}
	to {transform: translateY(40px);}
}

.slide3-enter-active {

	animation: slide3-in 2s ease;
	transition: opacity 2s;
}

.slide3-leave-active {
	position: absolute;
	width: 100%;
	animation: slide3-out 2s ease;
	transition: opacity 2s;
}

.slide3-enter, .slide3-leave-to {

	opacity: 0;
}

.slide3-move {

	transition: transform 1s;
}

</style>