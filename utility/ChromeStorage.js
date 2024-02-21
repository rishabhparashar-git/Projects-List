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
}

const cs = new ChromeStorage()
export default cs
