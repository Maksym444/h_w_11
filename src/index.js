let global = {
  answer:42,
};

function info (bindArguments) {
  console.log (bindArguments, this.answer)
}

function bind(context, bindArguments, fn)  {
	return function () {
		return fn.apply(context, [bindArguments]);
	}
}
var bindAsMethod = bind (global, "Окончательный вопрос жизни, Вселенной и всего такого!?", info)

bindAsMethod ()