function solve(input) {
    let pattern = /(\@|#)([A-Za-z]{3,})\1/g;
    let match = pattern.exec(input);
    let result = [];
    while (match != null) {
      result.push(match[2]);
      match = pattern.exec(input);
    }
    console.log(result)


}
solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )