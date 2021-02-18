function randomNames() {
  // let names = document.getElementById("names").value;
  // let namesarray = names.split(/[,\n]+/g);
  let namesarray = ["viren", "patil", "bek", "kaustubh", "padwal"];
  let teams = 3;
  let teammem = 2;

  let pairs = [];
  for (let i = 0; i < teams; i++) {
    pairs.push([]);
  }
  console.log(pairs.length);

  //   for (let i = 0; i < namesarray.length; i++) {
  //     let ranname = namesarray[Math.floor(Math.random() * namesarray.length)];
  //     console.log(ranname);
  //   }
  let ranname2 = () => {
    return namesarray[Math.floor(Math.random() * namesarray.length)];
  };
  for (let i = 0; i < teams; i++) {
    let counter = 0;
    let ranname = ranname2();
    while (counter < pairs.length) {
      let ranname = ranname2();
      if (!pairs[i].includes(ranname)) {
        pairs[i].push(ranname);
      }
      counter += 1;
    }
  }

  console.log(pairs);
}

randomNames();
