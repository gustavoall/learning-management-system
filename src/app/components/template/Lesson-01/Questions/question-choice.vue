<template>
    <div class="question-wrapper" v-for="(question, index) in questions" :key="'question' + question.id">
        <h3>{{ question.text }}</h3>

        <div class="alternative-list">
            <label v-for="(alt, i) in question.alternatives" :key="i" class="alternative-item">
                <input type="checkbox" :value="alt.value" v-model="selected" :disabled="answered" />
                {{ alt.text }}
            </label>
        </div>

        <button @click="confirmAnswer" class="confirm-button" :disabled="answered">Confirmar</button>

        <div v-if="answered" class="feedback">
            {{ question.feedback }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuestionChoice',
    props: {
        questions: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            selected: [],
            answered: false
        };
    },
    methods: {
        confirmAnswer() {
            this.answered = true;
        }
    }
};
</script>

<style scoped>
.question-wrapper {
    background: #fff;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    max-width: 500px;
    margin: 1rem auto;
    font-family: sans-serif;
}

.question-wrapper h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    color: #222;
}

.alternative-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.alternative-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #f7f7f7;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    transition: background 0.2s;
    cursor: pointer;
}

.alternative-item:hover {
    background: #ececec;
}

.confirm-button {
    background: #4cafef;
    color: white;
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
}

.confirm-button:hover:not(:disabled) {
    background: #369edc;
}

.confirm-button:disabled {
    background: #bcdff5;
    cursor: not-allowed;
}

.feedback {
    margin-top: 1.5rem;
    padding: 1rem;
    background: #e9f7ef;
    color: #1d6b39;
    border: 1px solid #b6e0c3;
    border-radius: 0.5rem;
    font-weight: 500;
}
</style>
