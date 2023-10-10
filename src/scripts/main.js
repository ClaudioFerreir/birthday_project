AOS.init();

const dataDoEvento = new Date("Oct 14, 2023 8:45:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diasEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
  const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
  const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
  const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

  document.getElementById("contador").innerHTML = `começa em <br> ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

  if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById("contador").innerHTML = ` já começou!`;
  }

}, 1000)


document.getElementById('openModal').addEventListener('click', function() {
  
  document.getElementById('guestForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário
  
    var nome = document.getElementById('guest-name').value;
    var mensagem = 'O convidado(a) - ' + nome + ' - confirmou a presença!';
    var url = 'https://wa.me/5511990038278?text=' + encodeURIComponent(mensagem);
  
    // Redireciona o navegador para o link do WhatsApp
    window.location.href = url;
  });
});