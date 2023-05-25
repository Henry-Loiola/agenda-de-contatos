const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const contactTable = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
const contacts = [];

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addContact();
});

function addContact() {
    const name = nameInput.value;
    const phone = phoneInput.value;

    const phoneExists = checkDuplicatePhone(phone);

    if (name && phone && !phoneExists) {
    const newRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    const phoneCell = document.createElement('td');

    nameCell.textContent = name;
    phoneCell.textContent = phone;

    newRow.appendChild(nameCell);
    newRow.appendChild(phoneCell);
    contactTable.appendChild(newRow);

    contacts.push({ name, phone });

    nameInput.value = '';
    phoneInput.value = '';
    } else if (phoneExists) {
    alert('Esse número de telefone já foi cadastrado!');
    }
}

function checkDuplicatePhone(phone) {
    return contacts.some(contact => contact.phone === phone);
}
