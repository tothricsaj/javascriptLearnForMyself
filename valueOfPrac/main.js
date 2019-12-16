let obj = {
    valueOf: () => {
        return 3;
    }
}

console.log(obj+1);
console.log(obj++);
console.log((+"5") + 1);
