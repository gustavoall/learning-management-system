<template>
    <div class="tab-group">
        <div class="tab_box" ref="tabBox">
            <button v-for="(item, index) in localTabs" :key="index" class="tab_btn"
                :class="{ active: activeIndex === index }" @click="setActive(index)" ref="tabBtns">
                <img :src="item.image" :alt="item.title" />
                <h4>{{ item.title }}</h4>
            </button>
            <!-- <div class="line" :style="lineStyle"></div> -->
        </div>

        <div class="content_box">
            <div v-for="(item, index) in localTabs" :key="'c-' + index" class="content"
                :class="{ active: activeIndex === index }">
                <p>{{ item.subtitle }}</p>
                <p>{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Tab",
    props: {
        list: { type: Array, required: true },
        id: { type: Number, required: true },
        initial: { type: Number, default: 0 }
    },
    data() {
        return {
            activeIndex: this.initial,
            localTabs: [],
            lineStyle: {
                width: "0px",
                transform: "translateX(0px)"
            }
        };
    },
    watch: {
        id: {
            immediate: true,
            handler(newId) {
                const group = this.list.find((item) => item.id === newId);
                this.localTabs = group ? group.tabs.map((t) => ({ ...t })) : [];
                this.activeIndex = this.initial;
                this.$nextTick(() => this.updateLine());
            }
        }
    },
    mounted() {
        const imgs = Array.from(this.$el.querySelectorAll(".tab_btn img"));
        const imgPromises = imgs.map((img) =>
            img.complete
                ? Promise.resolve()
                : new Promise((resolve) => img.addEventListener("load", resolve, { once: true }))
        );

        Promise.all(imgPromises).then(() => {
            this.$nextTick(() => this.updateLine());
        });

        window.addEventListener("resize", this.updateLine);

        const box = this.$refs.tabBox;
        if (window.ResizeObserver && box) {
            this._ro = new ResizeObserver(() => this.updateLine());
            this._ro.observe(box);
        }
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.updateLine);
        if (this._ro) this._ro.disconnect();
    },
    methods: {
        setActive(index) {
            this.activeIndex = index;
            this.updateLine();
        },
        updateLine() {
            this.$nextTick(() => {
                const box = this.$refs.tabBox;
                const buttons = box ? box.querySelectorAll(".tab_btn") : [];
                const activeBtn = buttons[this.activeIndex];
                if (!activeBtn || !box) return;

                const btnRect = activeBtn.getBoundingClientRect();
                const boxRect = box.getBoundingClientRect();
                const left = btnRect.left - boxRect.left + box.scrollLeft;

                const width = Math.round(btnRect.width);

                this.lineStyle = {
                    width: width + "px",
                    transform: `translateX(${left}px)`
                };
            });
        }
    }
};
</script>
<style scoped>
.tab-group {
    margin-bottom: 60px;
}

.tab_box {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid rgba(229, 229, 229, .55);
}

.tab_btn {
    background: none;
    border: 0;
    padding: 0;
    padding-bottom: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tab_btn img {
    width: 100%;
    max-width: 90px;
    transition: transform .25s ease;
}

.tab_btn.active img {
    transform: scale(1.06);
}

.line {
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 8px;
    border-radius: 50px;
    background: #837DD2;
    transition: transform .35s ease, width .35s ease;
    transform: translateX(0);
}

.content_box {
    position: relative;
    min-height: 140px;
}

.content {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: translateY(30px);
    pointer-events: none;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1), transform .35s cubic-bezier(0.075, 0.82, 0.165, 1);
    padding-top: 35px;
}

.content.active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
}

.content_box .content h4 {
    color: #fff;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 20px;
}

.content_box .content p {
    color: black;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
}

@media (max-width: 991px) {
    .tab-group {
        margin-bottom: 0px;
    }

    .content_box {
        min-height: 230px;
    }

    .content_box .content h4 {
        font-size: 20px;
        line-height: 25px;
    }

    .content_box .content p {
        font-size: 18px;
        line-height: 23px;
    }
}

@media (max-width: 768px) {
    .content_box .content p {
        font-size: 15px;
        line-height: 20px;
    }
}

@media (max-width: 425px) {
    .content_box {
        min-height: 280px;
    }
}
</style>
