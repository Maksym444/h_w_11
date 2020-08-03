let global = {
  answer:42,
};

let bind = function bindFunction (fn, context, ...rest){
  return function (...args) {
    fn.apply (context, [...rest, ...args])
  }
}

function info (title) {
  console.log (title, this.answer);
}


let bindAsMethod = bind (info, global);

console.log (bindAsMethod ("Окончательный вопрос жизни, Вселенной и всего такого!?"))

