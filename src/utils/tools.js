export const isDev = process.env.NODE_ENV === 'development'
export const setItem = (key, value) => localStorage.setItem(key, value)
export const getItem = key => localStorage.getItem(key)
export const removeItem = key => localStorage.removeItem(key)