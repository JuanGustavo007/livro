<template>
  <div class="container capa">
    <div class="conteudo">
      <h1 class="text-center">Diário</h1>
      <p>Prazer, eu sou o Juan, tudo bem ?!</p>
      <p>
        Seja bem-vindo(a) ao meu diário, aqui irei relatar coisas sobre a minha
        rotina para tentar me organizar
      </p>
    </div>
  </div>
  <button @click="proxima">Começar leitura</button>
</template>

<script>
export default {
  methods: {
    proxima() {
      this.$router.push({ path: "/paginas" });
    },
  },
};
</script>

<style scoped>
.capa {
  display: flex;
  justify-content: center;
  max-width: 700px;
  border: 1px solid black;
  height: 700px;
  max-height: 700px;
  margin-top: 80px;
  padding: 20px;
  background-color: azure;
}

h1 {
  font-size: 2rem;
}
button {
  position: absolute;
  right: 610px;
  margin-top: 30px;
  border-radius: 5px;
  border: 1px solid white;
}
</style>
