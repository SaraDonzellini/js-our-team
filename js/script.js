const divBox = document.getElementById('box')

const employees = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg"
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg"
  },
];

for (const key in employees) {
  console.log(employees[key])
}

for (let i = 0; i < employees.length; i++) {
  divBox.innerHTML +=
    '<div class="card d-flex">' +
    '<img src="img/' + employees[i].foto + '">' +
    '<div class="my_name">' + employees[i].nome + '</div>' +
    '<p class="role">' + employees[i].ruolo + '</p>' + '</div>'
}