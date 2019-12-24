<template>
	<div class="calculator">
		<Display :value="displayValue"/>
		<Button label="AC" triple @onClick="clearMemory"/>
		<Button label="/" operation @onClick="setOperation" />
		<Button v-for="vlr in [7,8,9]" :key="vlr" :label="vlr" @onClick="addDigit" />
		<Button label="*" operation @onClick="setOperation" />
		<Button v-for="vlr in [4,5,6]" :key="vlr" :label="vlr" @onClick="addDigit" />
		<Button label="-" operation @onClick="setOperation" />
		<Button v-for="vlr in [1,2,3]" :key="vlr" :label="vlr" @onClick="addDigit" />
		<Button label="+" operation @onClick="setOperation" />
		<Button label="0" double @onClick="addDigit" />
		<Button label="." @onClick="addDigit" />
		<Button label="=" operation @onClick="setOperation" />
	</div>
</template>

<script>
	import Display from '../components/Display.vue';
	import Button from '../components/Button.vue';

	export default {

		data: function() {

			return {

				displayValue: "0",
				clearDisplay: false,
				operation: null,
				values: [0, 0],
				current: 0
			}
		},
		components: { Display, Button },
		methods: {

			clearMemory() {

				Object.assign(this.$data, this.$options.data());
			},
			setOperation(operation) {

				if (this.current === 0) {

					this.operation = operation;
					this.current = 1;
					this.clearDisplay = true;

				} else {

					const equals = operation === "=";
					const currentOperation = this.operation;

					try {

						this.values[0] = eval(
								`${this.values[0]} ${currentOperation} ${this.values[1]}`
							);

					} catch(e) {

						this.$emit('onError', e);
					}

					this.values[1] = 0;
					this.displayValue = this.values[0];
					this.operation = equals ? null : operation;
					this.current = equals ? 0 : 1;
					this.clearDisplay = !equals;
				}
			},
			addDigit(n) {

				if (n === '.' && this.displayValue.includes(".")) {

					return;
				}

				const clearDisplay = this.displayValue === "0"
					|| this.clearDisplay;

				const currentValue = clearDisplay ? "" : this.displayValue;
				const displayValue = currentValue + n;

				this.displayValue = displayValue;
				this.clearDisplay = false;
				this.values[this.current] = displayValue;
			}
		}
	}
</script>

<style>
	.calculator {

		height: 320px;
		width: 235px;
		border-radius: 5px;
		overflow: hidden;

		display: grid;
		grid-template-columns: repeat(4, 25%);
		grid-template-rows: 1fr 48px 48px 48px 48px 48px;
	}
</style>