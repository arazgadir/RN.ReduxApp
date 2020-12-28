export const adding = (name,surname, number) => ({
  type: 'ADD',
  info: {name: name,
        surname: surname,
        number: number,}
  
});
export const clear =  () => ({
  type: 'CLEAR',
});