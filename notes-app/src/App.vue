<script setup>
import {ref} from "vue"


const showModal = ref(false)

const newNote = ref("")
const errorMesage = ref("")

const notes = ref([])

function getRandomColor() {
return "hsl(" + Math.random()* 360 + ", 100%, 75%)";
}



const addNote = () => {
  if (newNote.value.length < 10){
    return errorMesage.value = "note needs to be to characters or more"
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomColor()
  })

  showModal.value = false
  newNote.value = ""
}
</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea
          v-model="newNote"
          name="note"
          id="note"
          cols="30"
          rows="10"
        ></textarea>
        <p v-if="errorMesage">{{errorMesage}}</p>
        <button @click="addNote">Add Note</button>
        <button class="close" @click="showModal= false">close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h3>Notes</h3>
        <button @click="showModal= true">+</button>
      </header>

      <div class="cards-container">
        <div
          class="card"
          v-for="note in notes"
          :key="note.id"
          :style="{backgroundColor: note.backgroundColor}"
        >
          <p class="main-text">
            {{ note.text }}
          </p>
          <p class="date">{{note.date.toLocaleDateString("en-US")}}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main{
  height: 100vh;
  width: 100vw;

}

.container{
  max-width: 100%;
  margin: 0 auto;
}

header{
  background-color: #123456;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;


}

h3{

  font-weight: bold;
  font-size: 35px;
  margin-left: 25px;
}

header button{
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: white ;
  color: #000;
  border-radius: 100%;
  font-size: 20px;
}

.cards-container{
  padding: 10px;
  color: #000;
  display: flex;
  flex-wrap: wrap;
}

.card{
  height: 225px;
  width: 225px;
  background-color: teal;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;

}

.date {
  font-size: 12.5px;
  font-weight: bold;
}

.overlay{
position: absolute;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.77);
z-index: 10;
display: flex;
align-items: center;
justify-content: center;
}

.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction:column ;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top:0 ;
}
.modal .close {
  background-color: red;
  margin-top: 7px;
}
</style>
