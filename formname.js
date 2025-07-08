const textarea = document.getElementById('content')
// recupero 3 riferimenti per i 3 bottoni
const saveButton = document.getElementById('save')
const resetButton = document.getElementById('reset')
// creiamo un nome per la chiave che utilizzeremo per la memoria
const memoryKey = 'notepad-memory'

document.addEventListener('DOMContentLoaded', function() {
    // Tentiamo di recuperare il contenuto salvato usando la nostra "chiave di memoria".
    const storedContent = localStorage.getItem(memoryKey);

    // Se troviamo del contenuto (cioè, non è 'null'), lo inseriamo nella textarea.
    if (storedContent) {
        textarea.value = storedContent;
    }
});

// a)
saveButton.addEventListener('click', function () {
  // qua non mi serve "neutralizzare" nessun evento di submit
  console.log('SALVO')
  // recupero il contenuto testuale della textarea
  const textAreaContent = textarea.value // contenuto testuale della textarea
  // salvataggio di questa stringa nel localStorage sulla chiave prefissata
  localStorage.setItem(memoryKey, textAreaContent)
  localStorage.getItem(memoryKey)
  
})



// c)
resetButton.addEventListener('click', function () {
  // qua non mi serve "neutralizzare" nessun evento di submit
  // svuoto la textarea
  textarea.value = ''
  // svuotare la chiave prefissata nel localStorage
  localStorage.removeItem(memoryKey)
})



