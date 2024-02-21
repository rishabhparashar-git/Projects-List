import cs from './utility/ChromeStorage.js'
import LoginDom from './utility/Dom/login.dom.js'
import ProjectsDom from './utility/Dom/projects.dom.js'

const loginDom = new LoginDom(document)
const projectsDom = new ProjectsDom(document)
async function main() {
  try {
    const token = await cs.getTokenAsync()
    const showLogin = () => {
      loginDom.showLoginScreen(projectsDom.showProjectsScreen)
    }
    if (token) {
      try {
        await projectsDom.showProjectsScreen()
      } catch (err) {
        showLogin()
      }
    } else {
      showLogin()
    }
  } catch (err) {
    console.error(err)
  }
}

main()
