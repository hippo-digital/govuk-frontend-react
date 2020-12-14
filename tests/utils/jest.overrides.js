const { error } = console;

console.error = function (message, ...args) {
  error.apply(console, args); // keep default behaviour
  throw message instanceof Error ? message : new Error(message);
};
