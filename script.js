function xorEncryptDecrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

document.getElementById('encryptBtn').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const key = document.getElementById('key').value;
    
    if (!key) {
        alert('Пожалуйста, введите ключ.');
        return;
    }

    const encryptedText = xorEncryptDecrypt(inputText, key);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', function () {
    const inputText = document.getElementById('outputText').value;
    const key = document.getElementById('key').value;
    
    if (!key) {
        alert('Пожалуйста, введите ключ.');
        return;
    }

    const decryptedText = xorEncryptDecrypt(inputText, key);
    document.getElementById('outputText').value = decryptedText;
});