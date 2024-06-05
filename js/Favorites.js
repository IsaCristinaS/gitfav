import { GithubUser } from "./GithubUser.js";

//classe da lógica dos dados e como serão estruturados
export class Favorites { 
  constructor(root) {
    this.root = document.querySelector(root);
    //root é o '#app' porque referenciamos no main
    this.load()

    GithubUser.search('maykbrito').then(user => console.log(user))
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem
    ('@github-favorites:')) || []
    
    console.log(this.entries)
}

save(){
  localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
}

async add(username) {
  try{

    const userExists = this.entries.find(entry => entry.login === username)
   
    if(userExists) {
      throw new Error('Usuário já cadastrado!')
    }

    const user = await GithubUser.search(username)

    if(user.login === undefined) {
      throw new Error('Usuário não encontrado!')
    }

    this.entries = [user, ...this.entries]
    this.update()
    this.save()

  } catch(error){
    alert(error.message)
  }

}

  delete(user) {
    const filteredEntries = this.entries
    .filter(entry => entry.login !== user.login)

    this.entries = filteredEntries
    this.update()
    this.save()
  }

}

//classe criadora da visualização e eventos HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.update();
    this.onadd();
  }

  onadd(){
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')

      this.add(value)
    }
  } 

  update() {
    /*update é o responsável do _princípio da imutabilidade_, criando
    aplicação um novo elemento em toda renderização*/
    this.removeAllTr();

    this.entries.forEach( user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers
      
      row.querySelector('.remove').onclick = () => {
        const isOK = confirm('Tem certeza que deseja deletar esse favorito?')
      
      if(isOK) { 
        this.delete(user)
      }
    }
      
      this.tbody.append(row)
   
  })}

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <tr>
    <td class="user">
    <img
        src="https://github.com/maykbrito.png"
        alt="Imagem de Mayk Brito"
    />
     <a href="https://github.com/maykbrito" target="_blank">
         <p>Mayk Brito</p>
        <span>/maykbrito</span>
     </a>
        </td>
        <td class="repositories">76</td>
        <td class="followers">20000</td>
        <td>
         <button class="remove">Remover</button>
         </td>
    </tr>
    `
    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr")
    .forEach((tr) => {
      tr.remove();
    });
  }
}
