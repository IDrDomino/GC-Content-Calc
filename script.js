function calculateGCContent() {
    var dnaSequence = document.getElementById('dnaSequence').value.trim().toUpperCase();

    // Check if the input is a valid DNA sequence
    if (/^[ACGT]*$/.test(dnaSequence)) {
        var totalBases = dnaSequence.length;
        var aCount = (dnaSequence.match(/A/g) || []).length;
        var tCount = (dnaSequence.match(/T/g) || []).length;
        var gCount = (dnaSequence.match(/G/g) || []).length;
        var cCount = (dnaSequence.match(/C/g) || []).length;
        var gcCount = gCount + cCount;
        var gcContent = (gcCount / totalBases) * 100;

        var resultText = `
            <strong>GC Content:</strong> ${gcContent.toFixed(2)}%
        `;

        document.getElementById('result').innerHTML = resultText;
        document.getElementById('result-box').style.display = 'block';  // Show the result box
    } else {
        alert('Invalid DNA sequence. Please enter valid bases (A, C, G, T).');
    }
}
