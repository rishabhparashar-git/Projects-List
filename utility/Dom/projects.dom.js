import { allProjectsService } from '../../service/index.js'
import Dom from './index.js'

export default class ProjectsDom {
  constructor(document) {
    this.document = document
    this.dom = new Dom(document)
  }

  #generateProjectsTable(projects) {
    // Generate HTML for the projects table
    let tableHTML =
      '<table border="1"><tr><th>Project ID</th><th>Project Name</th></tr>'
    projects.forEach((project) => {
      tableHTML += `<tr><td>${project.id}</td><td>${project.name}</td></tr>`
    })
    tableHTML += '</table>'
    return tableHTML
  }

  async showProjectsScreen() {
    const projects = await allProjectsService()
    console.log(projects)
    if (!Array.isArray(projects)) {
      throw new Error('Expected Project as list got something else')
    }
    const projectsTable = this.document.getElementById('projects-table')
    if (!!projects.length) {
      const tableHTML = this.#generateProjectsTable(projects)
      console.log(tableHTML)
      projectsTable.innerHTML = tableHTML
    } else {
      projectsTable.innerHTML = '<p>No projects available.</p>'
    }
    this.dom.showContainerById('projects-container')(true)
  }
}
