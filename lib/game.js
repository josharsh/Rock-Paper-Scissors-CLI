
function playForNode() {
  let count = 0;
  let continuePlaying = false;
  const readline = require("readline");

    async function start(){
    let ans=await prompt("Start?");
    if (ans === "yes" || ans === "y") {
      continuePlaying=true;
      if(count<1)console.log("I take 10 moods to think. When I am done I will choose between Rock, Paper and Scissors. Make sure to sync. Enter yes to continue playing after I play");
    }
    else console.log(ans)
    }

  function prompt(query) {
    const interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => interface.question(query, ans => {
        interface.close();
        resolve(ans);
    }))
}

 
  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }
  async function startThinking() {
    for (let i = 0; i <= 10; i++) {
      const dots = "🥺".repeat(i);
      const left = 10 - i;
      const empty = " ".repeat(left);
      process.stdout.write(`\r${dots}${empty} Thinking`);
      await wait(280);
    }
  }
  function delayForThree(func) {
    startThinking();
    setTimeout(func, 3000);
  }

  function randomGeneration() {
    let gameValues = ["Rock", "Paper", "Scissors"];
    var choice = gameValues[Math.floor(Math.random() * gameValues.length)];
    count++;
    console.log("\n" + choice);
  }
  

  async function main() {
    // let startEnabled =await start();
    if(count<1) await start();
    if(continuePlaying) {
      delayForThree(randomGeneration);
      let again=await prompt("Again?");
      again=again.toLowerCase();
      if(again=="yes" || again=="yes"){
          continuePlaying=true;
          main();
      }
      else {
          continuePlaying=false;
          process.exit(); 
      }
    }
    else {
        console.log("You have played Enough");
        process.exit(); 
    }
  }
  return main;
}
module.exports = playForNode;