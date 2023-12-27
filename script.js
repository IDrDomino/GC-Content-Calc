<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GC Content Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>GC Content Calculator</h1>
        <label for="dnaSequence">Enter DNA Sequence:</label>
        <textarea id="dnaSequence" placeholder="Enter DNA sequence here..." rows="4"></textarea>
        <button onclick="calculateGCContent()">Calculate GC Content</button>
        <div id="result-box" class="result-box">
            <p id="result"></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
