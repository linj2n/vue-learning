export function validUsername(str) {
  // const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
  return /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(str)
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
