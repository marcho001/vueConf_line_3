<template>
	<button :class="type" :disabled="disabled" @click="callback($event)">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "BtnCustom",
	props: {
		type: { default: "normal" },
		disabled: Boolean,
	},
	data() {
		return {};
	},
	methods: {
		callback: function (e) {
			this.$emit("click", e);
		},
	},
};
</script>
<style>
button {
	padding: 10px 20px;
	border: 1px solid #ddd;
	color: #333;
	background-color: #fff;
	border-radius: 5px;
	font-size: 1rem;
	cursor: pointer;
	margin-right: 10px;
	&[disabled] {
		cursor: not-allowed;
		opacity: 0.7;
	}
	&.danger {
		background-color: #e24d4d;
		border: none !important;
		color: #fff;
	}
	&.danger:hover {
		box-shadow: 6px 6px #ff8585 !important;
		transition: 0.3s;
		background-color: #c84141 !important;
	}
	&.success {
		background-color: #26c76f;
		color: #fff;
	}
	&.success:hover {
		box-shadow: 6px 6px #57f39d !important;
		transition: 0.3s;
		background-color: #23a55d !important;
	}
	&.info {
		background-color: #50bfff;
		color: #fff;
	}
	&.info:hover {
		box-shadow: 6px 6px #a0dcff !important;
		transition: 0.3s;
		background-color: #419fd5 !important;
	}
	&.normal:hover {
		box-shadow: 6px 6px #bbbbbb;
		transition: 0.3s;
		background-color: #e8e8e8;
	}
}
</style>
