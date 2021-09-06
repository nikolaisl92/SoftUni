function projectCreation(input) {

    let nameOfArchitect = (input[0]);
    let numberOfProjects = Number (input[1]);
    let result = numberOfProjects * 3;

    console.log(`The architect ${nameOfArchitect} will need ${result} hours to complete ${numberOfProjects} project/s.`);


}
projectCreation (["George", 4]);