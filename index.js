function typeSafe( func, argTypes, returnType ) {
  for (var i = 0; i < argTypes.length; i++) {
    if(argTypes[i] == returnType) {
      return "invalid type"
    }
  }
  //count number of paramater passed
  if(func.length !== 2) {
    return "incorrect number of argument";
  }
      //if arguments not equal number
    return func();

  }



module.exports = typeSafe;
