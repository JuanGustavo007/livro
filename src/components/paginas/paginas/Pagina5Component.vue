<template>
  <div class="container capa">
    <div class="">
      <h1 class="text-center mb-5">Quinto dia...</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, repellat
        pariatur explicabo, distinctio voluptatibus repudiandae qui dolore
        delectus nobis architecto eius temporibus, aperiam in provident non
        minus sapiente exercitationem excepturi.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, repellat
        pariatur explicabo, distinctio voluptatibus repudiandae qui dolore
        delectus nobis architecto eius temporibus, aperiam in provident non
        minus sapiente exercitationem excepturi.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, repellat
        pariatur explicabo, distinctio voluptatibus repudiandae qui dolore
        delectus nobis architecto eius temporibus, aperiam in provident non
        minus sapiente exercitationem excepturi.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, repellat
        pariatur explicabo, distinctio voluptatibus repudiandae qui dolore
        delectus nobis architecto eius temporibus, aperiam in provident non
        minus sapiente exercitationem excepturi.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, repellat
        pariatur explicabo, distinctio voluptatibus repudiandae qui dolore
        delectus nobis architecto eius temporibus, aperiam in provident non
        minus sapiente exercitationem excepturi.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, repellat
        pariatur explicabo, distinctio voluptatibus repudiandae qui dolore
        delectus nobis architecto eius temporibus, aperiam in provident non
        minus sapiente exercitationem excepturi.
      </p>
      <div class="proxima-pag">
        <button @click="back"><i class="bi bi-arrow-left-short"></i></button>
        <button @click="next"><i class="bi bi-arrow-right-short"></i></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.back();
    },
    next() {
      this.$router.push("/Pagina6Component");
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
  box-shadow: 2px 1px 1px #bdb699, 3px 1px 1px rgb(17, 17, 17),
    2px 1px 1px #bdb699, 6px 2px 1px #bdb699, 7px 3px 1px rgb(3, 3, 3);

  background-color: #dad5c3;
}
h1 {
  font-size: 2rem;
}
.proxima-pag {
  display: flex;
  justify-content: space-between;
}
button {
  border-radius: 5px;
  border: 1px solid white;
}
</style>
