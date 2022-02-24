<template>
  <div id="app">
    <header>
      <h1>My Book Feed</h1>
    </header>
    <main>
      <Post v-for="(book, index) in book_list" :key="index" :book="book"/>
    </main>
  </div>
</template>

<script>
import Post from "./components/Post.vue"

export default {
  name: 'App',
  data() {
    return {
      book_list: [],
    }
  },
  components: {
    Post
  },
  methods: {
    getBookList() {
			const book_titles = [
				"Naruto",
				"Demon Slayer",
				"Dragon Ball",
				"My Hero Academia",
				"Sword Art Online",
				"Tokyo Ghoul",
				"Darling in the Franxx",
				"Code Geass",
				"One Piece",
				"Fairy Tail",
				"Bleach",
				"Attack on Titan",
				"Hunter x Hunter",
			];

      const book = []

      for(let i = 0; i <10; i++) {
        book.push({
          title: book_titles[
            Math.floor(Math.random() * book_titles.length)
          ],
          description:
          `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi recusandae eligendi pariatur voluptatem illum inventore eos laboriosam! Vero, doloribus
          ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi recusandae eligendi pariatur voluptatem illum inventore eos laboriosam! Vero, doloribus!
          `,
        })
      }

      return book
    },
    handleScroll() {
      if(window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
        console.log('hello')
        const new_book = this.getBookList()

        this.book_list = [
          ...this.book_list,
          ...new_book
        ]
      }
    },
    debounce(cb, delay = 0){
      let timer = null

      return function() {
        const context = this
        const args = arguments

        if(timer) {
          clearTimeout(timer)
        }

        timer = setTimeout(() => cb.apply(context, args), delay)
      }
    }
  },
  mounted() {
    this.book_list = this.getBookList()
    window.addEventListener('scroll', this.debounce(this.handleScroll, 200))
  }
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #888;
  min-height: 100vh;
  padding-top: 3rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header h1 {
  text-align: center;
}

header {
  margin-bottom: 2rem;
}

main {
  padding: 0 2rem;
  max-width: 640px;
}
</style>
