<template>
    <div class="question" v-for="(question, index) in questions" :key="index" :points="question.points">
        <div class="question-item">
            <h3>{{ question.title }}</h3>
        </div>

        <div class="alternatives">
            <div v-for="(alt, altIndex) in question.alternatives" :key="altIndex" class="alternative" :class="{
                selected: selected[index] === altIndex,
                disabled: completed[index],
                correct: completed[index] && alt.correct,
                incorrect: completed[index] && !alt.correct
            }" @click="selectAlternative(index, altIndex)">
                {{ alt.text }}
            </div>
        </div>

        <button class="confirm-button" @click="confirmAnswer(index)"
            :disabled="completed[index] || selected[index] === undefined">
            Confirmar
        </button>

        <div class="feedback" v-if="completed[index]">
            <div v-if="feedback[index]" class="correct">
                <img src="/src/app/assets/images/aproved.png" />
                <h4>{{ question.feedPositive_Title }}</h4>
                <p>{{ question.feedPositive_Text }}</p>
                <p><strong>Pontos: {{ scoredPoints[index] }}</strong></p>
            </div>
            <div v-else class="incorrect">
                <img src="/src/app/assets/images/rejected.png" />
                <h4>{{ question.feedNegative_Title }}</h4>
                <p>{{ question.feedNegative_Text }}</p>
                <p><strong>Pontos: {{ scoredPoints[index] }}</strong></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "QuestionAlternative",
    props: {
        questions: { type: Array, required: true }
    },
    data() {
        return {
            selected: {},
            feedback: {},
            completed: {},
            scoredPoints: {}
        }
    },
    methods: {
        selectAlternative(questionIndex, altIndex) {
            if (this.completed[questionIndex]) return

            this.selected[questionIndex] = altIndex
            this.feedback[questionIndex] = null
        },
        confirmAnswer(questionIndex) {
            if (this.selected[questionIndex] === undefined) return

            const q = this.questions[questionIndex]
            const chosen = q.alternatives[this.selected[questionIndex]]

            this.feedback[questionIndex] = !!chosen.correct
            this.completed[questionIndex] = true
            this.scoredPoints[questionIndex] = chosen.correct ? q.points : 0
        }
    }
}
</script>

<style scoped>
.alternative {
    padding: 12px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    background-color: #f9f9f9;
}

.alternative:hover {
    background-color: #f0f0f0;
}

.alternative.selected {
    background-color: #007bff;
    color: #fff;
    border-color: #0056b3;
}

.alternative.disabled {
    pointer-events: none;
}

.alternative.correct {
    background-color: #28a745 !important;
    color: #fff;
    border-color: #1e7e34;
}

.alternative.incorrect {
    background-color: #dc3545 !important;
    color: #fff;
    border-color: #b21f2d;
}

.feedback {
    margin-top: 12px;
}

.correct {
    background: #e6f9ed;
    border: 2px solid #28a745;
    padding: 12px;
    border-radius: 8px;
    color: #155724;
}

.correct h4 {
    color: #28a745;
}

.incorrect {
    background: #fdecea;
    border: 2px solid #dc3545;
    padding: 12px;
    border-radius: 8px;
    color: #721c24;
}

.incorrect h4 {
    color: #dc3545;
}
</style>
