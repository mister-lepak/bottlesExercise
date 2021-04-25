// import { downTo } from "./helpers";

class Bottles {
  verse(num) {
    let bottleWordBefore;
    let bottleWordAfter;
    let numAfter = num - 1;
    let itOrOne = "one";
    let numWord1;
    let numWord2;

    num !== 1 ? (bottleWordBefore = "bottles") : (bottleWordBefore = "bottle");
    num - 1 !== 1
      ? (bottleWordAfter = "bottles")
      : (bottleWordAfter = "bottle");
    if (num - 1 === 0) {
      numAfter = "no more";
      itOrOne = "it";
    }
    let buyOrNo = `Take ${itOrOne} down and pass it around, `;
    if (num === 0) {
      buyOrNo = "Go to the store and buy some more, ";
      num = undefined;
      numWord1 = "No more";
      numWord2 = "no more";
      numAfter = 99;
    }

    return (
      `${num || numWord1} ${bottleWordBefore} of beer on the wall, ` +
      `${num || numWord2} ${bottleWordBefore} of beer.\n${buyOrNo}` +
      `${numAfter} ${bottleWordAfter} of beer on the wall.\n`
    );
  }

  verses(startNum, endNum) {
    let iteratedVerses = "";
    for (let i = startNum; i >= endNum; i--) {
      if (i !== startNum) iteratedVerses = iteratedVerses.concat("\n");
      iteratedVerses = iteratedVerses.concat(this.verse(i));
    }

    return iteratedVerses;
  }

  song() {
    return this.verses(99, 0);
  }
}

export { Bottles };
