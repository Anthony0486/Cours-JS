import CompteBancaire from "./CompteBancaire";

const div = document.querySelector("div");

const comptes = [
new CompteBancaire ("Alex", 0),
new CompteBancaire ("Clovis", 0),
new CompteBancaire ("Marco", 0)
];

for (const compte of comptes) compte.soldePlus(1000);
comptes[0].soldeMoins(100);
comptes[2].virement(comptes[1], 500);
for (const compte of comptes) compte.consultation();

try {
    comptes[2].virement(comptes[1], 1500);
} catch (error) {
    console.log(error.message);
    div.innerText = (error.message);
};
