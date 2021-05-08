function main(lim: number): void {
  const result = calc(lim);
  console.info(`02: ${result}`);
}

function calc(lim: number): number {
  const seq = [1, 2];
  do {
    const [a, b] = [seq[seq.length - 2], seq[seq.length - 1]];
    const next = a + b;
    if (next > lim) {
      return seq.reduce((acc, cur) => cur % 2 === 0 ? acc + cur : acc, 0);
    } else {
      seq.push(next);
    }
  } while (true);
}

main(Number(Deno.args[0] ?? 4_000_000));
