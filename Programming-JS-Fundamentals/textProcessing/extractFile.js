function solve(path) {
    let arr = path.split('\\');
    let myPath = arr.pop();
    let result = myPath.split('.');
    let extension = result.pop();
    let fileName = result.join('.');
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`)

}
solve('C:\\Internal\\training-internal\\Template.pptx')
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')