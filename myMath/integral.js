/*
 * just trying to calculate an integral
 */
function integral(start, end) {
    let total = 0;
    for(let i=start; i<end; i+=0.1) {
        total += (i**2) * 0.1;
    }

    return total;
}

console.log(integral(0, 1));
