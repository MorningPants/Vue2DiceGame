<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <h1 class="center">Roll the Dice!</h1>
                <v-card class="center">
                    <v-btn color="primary" @click="rollDice">Roll</v-btn>
                </v-card>
                <v-card v-if="lastRoll" style="margin-top: 20px" class="center">
                    <v-card-title>
                        <h3>Last Roll</h3>
                    </v-card-title>
                    <v-card-text>
                        <h2>{{ lastRoll }}</h2>
                    </v-card-text>
                </v-card>
                <v-card v-if="rolls.length > 0" style="margin-top: 20px">
                    <v-card-title>
                        <h3>Roll History</h3>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col v-for="roll in rolls" :key="roll.id">
                                    <v-card>
                                        <v-card-title>{{ roll.value }}</v-card-title>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    
                    <v-card-actions v-if="rolls.length">
                        <v-btn color="error" @click="rolls = []; lastRoll = null">
                            Clear Rolls
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    name: "GameView",
    data() {
        return {
            lastRoll: null,
            rolls: [],
        };
    },
    methods: {
        rollDice() {
            const roll = Math.floor(Math.random() * 6) + 1;
            this.lastRoll = roll;
            this.rolls.push({ id: Date.now(), value: roll });
            localStorage.setItem("rolls", JSON.stringify(this.rolls));
        },
        loadRolls() {
            const rolls = JSON.parse(localStorage.getItem("rolls"));
            if (rolls && rolls.length > 0) {
                this.rolls = rolls;
            }
        },
    },
    mounted() {
        this.loadRolls();
    },
};
</script>
  

<style>
.center{
    text-align: center;
    max-width: max-content !important;
    margin: 0 auto;

}
li {
    list-style: none;
    display: inline;
}
</style>
  