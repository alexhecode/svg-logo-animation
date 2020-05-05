// a script to get the total path length of letters
const logo = document.querySelectorAll('#logo path');

// eslint-disable-next-line no-plusplus
for (let i = 0; i < logo.length; i++) {
        // eslint-disable-next-line no-console
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
