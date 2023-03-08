export default function luhnAlgorithm(card) {
  let sum = 0;
  let parity = false;

  for (let n = card.length - 1; n >= 0; n--) {
    let cardDigit = parseInt(card.charAt(n), 10);

    if (parity && (cardDigit *= 2) > 9) {
      cardDigit -= 9;
    }

    sum += cardDigit;
    parity = !parity;
  }

  return card.length >= 12 && sum % 10 == 0;
}
