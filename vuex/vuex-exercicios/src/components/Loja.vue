<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>

import { mapMutations, mapActions } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1
        }
    },
    computed: {

        quantidade() {

            return this.$store.state.parametros.quantidade;
        },
        preco() {

            return this.$store.state.parametros.preco;
        }
    },
    methods: {
        // ...mapMutations('carrinho', ['adicionarProdutoMutation']),
        ...mapActions('carrinho', ['adicionarProdutoAction']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            
            // this.$store.state.produtos.push(produto);
            // this.$store.commit('adicionarProduto', produto);

            // \/ this is possible just because was imported mapMutations and
            //the spread operator possible us using the mutation methods as a local methods
            // this.adicionarProdutoMutation(produto);
            this.adicionarProdutoAction(produto);
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
