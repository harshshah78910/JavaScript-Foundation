// template String/Literal example

const name = 'Harsh SHah';
const age = '26';
const job = 'developer';

html = `
  <ul>
     <li> Name:  ${name}</li>
     <li> Name:  ${age}</li>
     <li> Name:  ${job}</li>
  </ul>
`;

document.body.innerHTML = html;
