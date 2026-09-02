// Simulação das funções da calculadora para o ambiente de testes automatizados
const somar = (a, b) => Number(a) + Number(b);
const subtrair = (a, b) => Number(a) - Number(b);
const multiplicar = (a, b) => Number(a) * Number(b);
const dividir = (a, b) => {
  if (Number(b) === 0) return "Erro: Divisão por zero";
  return Number(a) / Number(b);
};

// Execução dos testes automatizados sugeridos no passo 10
console.log("🧪 Iniciando os testes automatizados da calculadora...\n");

// Teste da Soma
if (somar(10, 5) === 15) {
  console.log("✅ Teste da soma (10 + 5 = 15): Passou!");
} else {
  console.error("❌ Teste da soma falhou!");
  process.exit(1);
}

// Teste da Subtração
if (subtrair(10, 5) === 5) {
  console.log("✅ Teste da subtração (10 - 5 = 5): Passou!");
} else {
  console.error("❌ Teste da subtração falhou!");
  process.exit(1);
}

// Teste da Multiplicação
if (multiplicar(10, 5) === 50) {
  console.log("✅ Teste da multiplicação (10 × 5 = 50): Passou!");
} else {
  console.error("❌ Teste da multiplicação falhou!");
  process.exit(1);
}

// Teste da Divisão
if (dividir(10, 5) === 2) {
  console.log("✅ Teste da divisão (10 ÷ 5 = 2): Passou!");
} else {
  console.error("❌ Teste da divisão falhou!");
  process.exit(1);
}

// Teste da Divisão por Zero
if (dividir(10, 0) === "Erro: Divisão por zero") {
  console.log("✅ Teste de divisão por zero bloqueada: Passou!");
} else {
  console.error("❌ Teste de divisão por zero falhou!");
  process.exit(1);
}

console.log("\n🎉 Todos os testes passaram com sucesso!");
