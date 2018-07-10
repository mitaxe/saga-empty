export const getUser = name => new Promise((resolve) => {
  setTimeout(() => resolve({
    user: 'Steven'
  }, 1000))
})