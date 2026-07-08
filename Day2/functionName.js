function functionName(functionName) {
  console.log(arguments.callee.name);
}
 functionName();
