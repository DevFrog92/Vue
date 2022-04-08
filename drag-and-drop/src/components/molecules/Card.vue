<template>
  <section ref="card" :id="cardId" draggable="true" class="card-wrapper">
    <div class="card" :class="cardShape">
      <thumbnail :thumbnailName="game.name" />
      <description :desc="game.name" :version="game.version" />
    </div>
    <!-- <drop-zone v-if="hasDropZone" :activeStatus="dropZoneActiveStatus" /> -->
    <drop-zone :activeStatus="dropZoneActiveStatus" />
  </section>
</template>

<script>
import Thumbnail from '@/components/atoms/Thumbnail.vue';
import Description from '@/components/atoms/Description.vue';
import DropZone from '@/components/atoms/DropZone.vue';

export default {
  props: {
    game: {
      type: Object,
      default: () => ({}),
    },
    shape: {
      type: String,
      default: 'square',
    },
    column: {
      type: String,
      default: 'cardList',
    },
  },
  components: {
    Thumbnail,
    Description,
    DropZone,
  },
  computed: {
    cardShape() {
      return `card-${this.shape}`;
    },
    hasDropZone() {
      return this.shape === 'rect';
    },
    cardId() {
      return `${this.game.name}_${this.game.version}`;
    },
  },
  data() {
    return {
      dropZoneActiveStatus: false,
    };
  },
  mounted() {
    this.addEvent();
  },
  methods: {
    addEvent() {
      const cardElement = this.$refs.card;

      cardElement.addEventListener('dragstart', ev => {
        ev.dataTransfer.setData('text/plain', ev.target.id);
        cardElement.style.opacity = 0.5;
      });

      cardElement.addEventListener('dragend', ev => {
        ev.preventDefault();
        cardElement.style.opacity = 1;
      });

      cardElement.addEventListener('drop', ev => {
        ev.preventDefault();
        this.dropZoneActiveStatus = false;
        // const target = ev.target;
        const itemId = ev.dataTransfer.getData('text/plain');
        const dropItem = document.getElementById(`${itemId}`);
        console.log('shape', this.column);
        if (this.column === 'cardDropZone') {
          console.log('hgere', dropItem.querySelector('.card'));
          dropItem.querySelector('.card').classList.add('card-square');
          dropItem.querySelector('.card').classList.add('card-rect');
        }

        // target.after(dropItem);
        ev.target.parentNode.after(dropItem);
        console.log('card list drop');
        this.$emit('dropped', itemId);
      });

      cardElement.addEventListener('dragleave', () => {
        // cardElement.style.opacity = 1;
        this.dropZoneActiveStatus = false;
      });

      // if (this.shape === 'rect') {
      cardElement.addEventListener('dragover', ev => {
        // cardElement.style.opacity = 1;
        ev.preventDefault();

        this.dropZoneActiveStatus = true;
      });
      // }
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  position: relative;
}

.card {
  border: 1px solid;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  cursor: grab;
  background-color: #fff;
  max-height: 10rem;
}

.card-wrapper >>> .card-rect {
  flex-direction: row;
}
</style>
