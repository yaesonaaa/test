function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
  
    let clone = Object.create(Object.getPrototypeOf(obj));
  
    if (obj instanceof Date) {
      return new Date(obj);
    }
  
    if (obj instanceof Map) {
      clone = new Map();
      obj.forEach((value, key) => {
        clone.set(key, deepClone(value));
      });
      return clone;
    }
  
    if (obj instanceof Set) {
      clone = new Set();
      obj.forEach((value) => {
        clone.add(deepClone(value));
      });
      return clone;
    }
  
    if (Array.isArray(obj)) {
      clone = [];
      obj.forEach((element) => {
        clone.push(deepClone(element));
      });
      return clone;
    }
  
    Object.keys(obj).forEach((key) => {
      clone[key] = deepClone(obj[key]);
    });
  
    return clone;
  }

  const obj = {
    text: 'Hello',
    number: 10,
    objectexample: { nested: 'World' },
    massiv: [1, 2, 3],
  };
  
  const clone = deepClone(obj);
  
  console.log(clone);
  
  console.log(clone === obj);
  
