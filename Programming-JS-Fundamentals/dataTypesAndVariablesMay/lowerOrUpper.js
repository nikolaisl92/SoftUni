function solve(diggit) {
    let newDiggit = diggit.toUpperCase();
    if (diggit === newDiggit) {
        console.log('upper-case')
    } else {
        console.log(`lower-case`)
    }
}
solve('L')