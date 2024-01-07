var listNhac = ["2", "3", "4", "5", "6", "7", "1"];

// Randomly shuffle the songs
for (var i = listNhac.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = listNhac[i];
    listNhac[i] = listNhac[j];
    listNhac[j] = temp;
}
