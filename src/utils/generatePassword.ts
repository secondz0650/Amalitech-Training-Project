type GeneratePasswordOptions = {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};
const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

const generatePassword = ({
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
}: GeneratePasswordOptions) => {
  let chars = "";
  let requiredChars = "";

  if (includeUppercase) {
    chars += UPPERCASE_LETTERS;
    requiredChars += UPPERCASE_LETTERS.charAt(
      Math.floor(Math.random() * UPPERCASE_LETTERS.length)
    );
  }
  if (includeLowercase) {
    chars += LOWERCASE_LETTERS;
    requiredChars += LOWERCASE_LETTERS.charAt(
      Math.floor(Math.random() * LOWERCASE_LETTERS.length)
    );
  }
  if (includeNumbers) {
    chars += NUMBERS;
    requiredChars += NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length));
  }
  if (includeSymbols) {
    chars += SYMBOLS;
    requiredChars += SYMBOLS.charAt(Math.floor(Math.random() * SYMBOLS.length));
  }

  let password = requiredChars;
  for (let i = requiredChars.length; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Shuffle the password to ensure the required characters are not at the beginning
  password = password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");

  return password;
};

export { generatePassword };
