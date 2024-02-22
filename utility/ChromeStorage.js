class ChromeStorage {
  async getTokenAsync() {
    const result = await chrome.storage.local.get(['token'])
    return result.token
  }

  setToken(token) {
    chrome.storage.local.set({ token: token }).then((res) => {
      console.log('Value is set', { token, res })
    })
  }
  setUser(user) {
    chrome.storage.local.set({ user }).then((res) => {
      console.log('Value is set', { token, res })
    })
  }
  async getUserAsync() {
    const result = await chrome.storage.local.get(['user'])
    return result.user
  }
}

const cs = new ChromeStorage()
export default cs
