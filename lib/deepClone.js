// 使用for循环和递归实现深拷贝
function deepClone(data) {
  let obj
  if (typeof data !== 'object') {
    return data
  }
  if (Array.isArray(data)) {
    obj = []
    for (let i = 0; i < data.length; i++) {
      obj.push(deepClone(data[i]))
    }
  } else {
    obj = {}
    for (const i in data) {
      obj[i] = deepClone(data[i])
    }
  }
  return obj
}

module.exports = deepClone
