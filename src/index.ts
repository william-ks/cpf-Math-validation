const multplyCpfNumbers = (numbers) => {
  const multpliers = [10, 9, 8, 7, 6, 5, 4, 3, 2];

  const sum = numbers.reduce((total, num, index) => {
    return total + num * multpliers[index];
  }, 0);

  const rest = sum % 11;
  return rest === 1 || rest === 0 ? 0 : 11 - rest;
};

const validateCpf = (cpf) => {
  const splitedCPF = cpf.split("");
  const tenthDigit = multply(splitedCPF.slice(0, 9));

  if (tenthDigit !== +splitedCPF[9]) {
    return console.log("invalid CPF");
  }

  const tenthFirstDigit = multply(splitedCPF.slice(1, 10));

  if (tenthFirstDigit !== +splitedCPF[10]) {
    return console.log("invalid CPF");
  }

  return console.log("Valid Cpf");
};
