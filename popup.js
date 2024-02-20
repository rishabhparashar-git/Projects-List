const loginBtn = document.getElementById('login-btn')
import { loginService } from './service/index.js'
import Dom from './utility/Dom.js'

const dom = new Dom(document)

loginBtn.onclick = async function () {
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  console.log({ email, password })
  dom.setLoader(true)
  try {
    const response = await loginService({ email, password })
    dom.displayMessage(response.message, 'success')
  } catch (err) {
    console.error(err)
    dom.displayMessage(err?.message, 'error')
  } finally {
    dom.setLoader(false)
  }
}

function setLoginContainer(loginContainerValue) {
  const loginContainer = document.getElementById('login-container')
  loginContainer.style.display = loginContainerValue ? 'block' : 'none'
}

async function fetchProjects() {
  // Simulate fetching projects with a token (replace with actual API call)
  const projectsTable = document.getElementById('projects-table')
  const projects = await simulateFetchProjects()
  if (projects && projects.length > 0) {
    const tableHTML = generateProjectsTable(projects)
    projectsTable.innerHTML = tableHTML
  } else {
    projectsTable.innerHTML = '<p>No projects available.</p>'
  }
}

function simulateFetchProjects() {
  // Simulate fetching projects (replace with actual API call)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Assume successful projects fetch for demonstration purposes
      const projects = [
        { projectId: 1, projectName: 'Project A', projectOwner: 'User A' },
        { projectId: 2, projectName: 'Project B', projectOwner: 'User B' },
        { projectId: 3, projectName: 'Project C', projectOwner: 'User C' },
      ]
      resolve(projects)
    }, 1500)
  })
}

function generateProjectsTable(projects) {
  // Generate HTML for the projects table
  let tableHTML =
    '<table border="1"><tr><th>Project ID</th><th>Project Name</th><th>Project Owner</th></tr>'
  projects.forEach((project) => {
    tableHTML += `<tr><td>${project.projectId}</td><td>${project.projectName}</td><td>${project.projectOwner}</td></tr>`
  })
  tableHTML += '</table>'
  return tableHTML
}
