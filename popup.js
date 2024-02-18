const loginBtn = document.getElementById('login-btn')

const dom = {
  setLoader: function (loaderValue) {
    var loader = document.getElementById('loader')
    loader.style.display = loaderValue ? 'block' : 'none'
  },
  displayMessage: function (text, type) {
    var messageElement = document.getElementById('message')
    messageElement.textContent = text

    if (type === 'success') {
      messageElement.classList.add('success')
    } else {
      messageElement.classList.remove('success')
    }
    messageElement.style.display = 'block'
    setTimeout(() => {
      messageElement.style.display = 'none'
    }, 1500)
  },
}

loginBtn.onclick = async function () {
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  console.log({ email, password })
  dom.setLoader(true)
  try {
    const response = await loginService({ email, password })
    dom.displayMessage('Logged In Successfully', 'success')
    const projects = await fetchProjects()
  } catch (err) {
    dom.displayMessage(err?.message, 'error')
  } finally {
    dom.setLoader(false)
  }
}

function setLoginContainer(loginContainerValue) {
  const loginContainer = document.getElementById('login-container')
  loginContainer.style.display = loginContainerValue ? 'block' : 'none'
}

async function loginService({ email, password }) {
  const url = 'https://api.plutoteams.com/api/auth/login'
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  return new Promise(async (resolve, reject) => {
    if (response.ok) {
      resolve(data)
    } else {
      reject(data)
    }
  })
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
