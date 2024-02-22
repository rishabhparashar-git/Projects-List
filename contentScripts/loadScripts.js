'use strict'

const scriptsToLoad = ['utility/ChromeStorage.js']

var head =
  document.head ||
  document.getElementsByTagName('head')[0] ||
  document.documentElement

scriptsToLoad.forEach((scriptPath) => {
  const script = document.createElement('script')
  script.setAttribute('type', 'module')
  script.setAttribute('src', e.extension.getURL(scriptPath))

  head.insertBefore(script, head.lastChild)
})
