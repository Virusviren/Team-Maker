function randomNames() {
  // let names = document.getElementById("names").value;
  // let namesarray = names.split(/[,\n]+/g);
  let namesarray = [
    "viren",
    "patil",
    "bek",
    "kaustubh",
    "padwal",
    "mac",
    "zippo",
    "david",
  ];
  const arrlen = namesarray.length;
  let teams = 4;
  //for pair programming
  //   teams = 4;

  let randomArr = [];
  for (let i = 0; i < arrlen; i++) {
    let ranname2 = namesarray[Math.floor(Math.random() * namesarray.length)];
    randomArr.push(ranname2);
    namesarray = namesarray.filter((item) => item !== ranname2);
  }

  let pairs = [];
  for (let i = 0; i < teams; i++) {
    pairs.push([]);
  }

  for (let i = 0; i < arrlen; i++) {
    let randomnumber = Math.floor(Math.random() * teams);

    pairs[randomnumber].push(randomArr[i]);
  }
  console.log(pairs);
}

randomNames();
