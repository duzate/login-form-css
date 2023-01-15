const passVisibled = () => {
  const pass = document.getElementById('pwrd')
  pass.type = 'text'
  setTimeout(() => pass.type = 'password', 500)
}

const imageToggle = (id, path) => { 
  document.getElementById(id).src=path
}
