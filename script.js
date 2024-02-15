const extendHex = (shortHex) => {
  // write your code here
	let i = shortHex.length-3, isCapital=false;
	let output = "#";
	while(i<shortHex.length){
		let assciCode= shortHex[i].charCodeAt(0);
		if(assciCode>=65 && assciCode<=90){
			isCapital = true;
		}
		output += shortHex[i] + shortHex[i];
		i++;
	}
	return isCapital ? output.toUpperCase() : output;
};

// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
