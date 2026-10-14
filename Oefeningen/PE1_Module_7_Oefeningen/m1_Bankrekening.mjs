let bankrekening1 = {
  rekeningnummer: "BE00 1234 5678 9000",
  saldo: 1000,
  eigenaar: "John Doe",
  toonSaldo() {
    console.log(this.saldo);
  },
  overschrijving(target, waarde) {
    this.saldo -= waarde;
    target.saldo += waarde
  },
};
let bankrekening2 = {
  rekeningnummer: "BE00 1234 5678 9000",
  saldo: 1000,
  eigenaar: "John Doe",
  toonSaldo() {
    console.log(this.saldo);
  },
  overschrijving(target, waarde) {
    this.saldo -= waarde;
    target.saldo += waarde
  },
};


bankrekening1.toonSaldo();
// Output: Er staat momenteel €100 op de rekening met nummer 123456

bankrekening2.toonSaldo();
// Output: Er staat momenteel €20 op de rekening met nummer 987654

bankrekening1.overschrijving(bankrekening2, 50);

bankrekening1.toonSaldo();
// Output: Er staat momenteel €50 op de rekening met nummer 123456

bankrekening2.toonSaldo();
// Output: Er staat momenteel €70 op de rekening met nummer 987654

process.exit();
