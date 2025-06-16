// Function with basic validation and error handling
function createUser(name: string, age: number): { name: string; age: number } {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new Error('Name must be a non-empty string.');
  }
  if (typeof age !== 'number' || age <= 0) {
    throw new Error('Age must be a positive number.');
  }

  const user = { name, age };
  console.log(`User created: ${user.name}, ${user.age} years old.`);
  return user;
}

// Example usage (optional, can be commented out or removed if preferred)
try {
  const user1 = createUser('Alice', 30);
  // const user2 = createUser('', 25); // This would throw an error
  // const user3 = createUser('Bob', -5); // This would throw an error
} catch (error) {
  if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.error(`An unknown error occurred.`);
  }
}

// Original content will follow after this block
const userCpf = "02008830624";

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

validateCpf(userCpf);
