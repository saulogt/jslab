



export const ddd = (a) => {
  console.log(a);
  throw new Error('aaaaa');
};

export const ddd2 = (a) => {
  console.log(a);
  ddd(a);
};

export const ddd3 = (a) => {
  console.log(a);
  ddd2(a);
};

export function bbb(a) {
  console.log(a);
  throw new Error('aaaaa');
}

export function bbb2(a) {
  console.log(a);
  bbb(a);
}

export function bbb3(a) {
  console.log(a);
  bbb2(a);
}


bbb3('sdsdfsd');
