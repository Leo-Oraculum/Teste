function calcularInvestimento() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value) / 100;
    var time = parseInt(document.getElementById("time").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    var montante = principal * Math.pow((1 + rate), time);
    var resultado = `Após ${time} meses, seu investimento valerá R$ ${montante.toFixed(2)}`;
    document.getElementById("result").textContent = resultado;
}


