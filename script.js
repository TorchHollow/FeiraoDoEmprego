
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter-form");
    const mensagem = document.querySelector(".mensagem");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nome = form.querySelector("input[name='nome']").value.trim();
      const email = form.querySelector("input[name='email']").value.trim();
      const telefone = form.querySelector("input[name='telefone']").value.trim();
  
      if (nome && email && telefone) {
        mensagem.textContent = Obrigado por se inscrever, ${nome}!;
        mensagem.style.color = "#ffffff";
        mensagem.style.padding = "0.75rem 1.5rem";
        mensagem.style.borderRadius = "6px";
        mensagem.style.backgroundColor = "#28a745";
        mensagem.style.marginTop = "1rem";
        mensagem.style.textAlign = "center";
        form.reset();
      } else {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.style.color = "#000000";
        mensagem.style.padding = "0.75rem 1.5rem";
        mensagem.style.borderRadius = "6px";
        mensagem.style.backgroundColor = "#ffc107";
        mensagem.style.marginTop = "1rem";
        mensagem.style.textAlign = "center";
      }
    });
  });
