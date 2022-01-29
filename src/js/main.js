// console이 잘 출력 되는지 확인하는 법
console.log('Hello Parcel!');

// async await이 잘 동작하는지 확인하는 법
async function test() {
  const promise = Promise.resolve(123);
  console.log(await promise);
}
test();
