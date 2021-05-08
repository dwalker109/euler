function main(max: number): void {
  const result = calc(max);
  console.info(`01: ${result}`);
}

function calc(max: number): number {
  return Array.from(new Array(max), (_, i) => i).reduce((acc, n) =>
    n % 3 === 0 || n % 5 === 0 ? acc + n : acc
  );
}

main(Number(Deno.args[0] ?? 1000));
