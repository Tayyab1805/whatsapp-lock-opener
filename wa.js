const letters = ['🔏', '🔐', '🗝', '🔒','🔑','🔓'];
const result = [];

for (let i = 0; i <6; i++) {
    for (let j = 0; j < 6; j++) {
        for (let k = 0; k < 6; k++) {
            for (let l = 0; l < 6; l++) {

                if (new Set([i, j, k, l]).size === 4) {
                    result.push(letters[i] + letters[j] + letters[k] + letters[l]);
                }
            }
        }
    }
}

console.log(result);
console.log("Sample:", result.slice(0, 20));
