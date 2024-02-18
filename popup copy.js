async function login() {
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value
  console.log({ username, password })

  
  const loginContainer = document.querySelector('.login-container')
  const projectsContainer = document.querySelector('.projects-container')

  // Simulate login request (replace with actual authentication logic)
  try {
    loader.style.display = 'block'
    // Assume successful login for demonstration purposes
    await simulateLogin(username, password)

    // Hide login container, show projects container, and fetch projects
    loginContainer.style.display = 'none'
    projectsContainer.style.display = 'block'
    await fetchProjects()
  } catch (error) {
    console.error('Login failed:', error)
  } finally {
    loader.style.display = 'none'
  }
}

async function simulateLogin(username, password) {
  // Simulate login (replace with actual authentication logic)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Assume successful login for demonstration purposes
      resolve()
    }, 1500)
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

function main() {
  const loginBtn = document.getElementById('login-btn')
  loginBtn.addEventListener('click', login)
}
main()
