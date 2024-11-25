document.getElementById('aboutHtml').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do label
    document.getElementById('modal').style.display = 'flex'; // Mostra o modal
  });
  
  document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none'; // Esconde o modal
  });
  
  // Fecha o modal se clicar fora dele
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

document.getElementById('aboutCss').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do label
    document.getElementById('modal2').style.display = 'flex'; // Mostra o modal
  });
  
  document.getElementById('closeModal2').addEventListener('click', function() {
    document.getElementById('modal2').style.display = 'none'; // Esconde o modal
  });
  
  // Fecha o modal se clicar fora dele
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal2');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });


document.getElementById('aboutJs').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do label
    document.getElementById('modal3').style.display = 'flex'; // Mostra o modal
  });
  
  document.getElementById('closeModal3').addEventListener('click', function() {
    document.getElementById('modal3').style.display = 'none'; // Esconde o modal
  });
  
  // Fecha o modal se clicar fora dele
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal3');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
document.getElementById('aboutDOM').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do label
    document.getElementById('modal4').style.display = 'flex'; // Mostra o modal
  });
  
  document.getElementById('closeModal4').addEventListener('click', function() {
    document.getElementById('modal4').style.display = 'none'; // Esconde o modal
  });
  
  // Fecha o modal se clicar fora dele
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal4');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
    
document.getElementById('aboutSEO').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do label
    document.getElementById('modal5').style.display = 'flex'; // Mostra o modal
  });
  
  document.getElementById('closeModal5').addEventListener('click', function() {
    document.getElementById('modal5').style.display = 'none'; // Esconde o modal
  });
  
  // Fecha o modal se clicar fora dele
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal5');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

      
document.getElementById('aboutDesign').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do label
    document.getElementById('modal6').style.display = 'flex'; // Mostra o modal
  });
  
  document.getElementById('closeModal6').addEventListener('click', function() {
    document.getElementById('modal6').style.display = 'none'; // Esconde o modal
  });
  
  // Fecha o modal se clicar fora dele
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal6');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });


document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    // Carregar os estados dos checkboxes do local storage
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState !== null) {
            checkbox.checked = JSON.parse(savedState);
        }

        // Adicionar evento para salvar o estado no local storage ao alterar
        checkbox.addEventListener("change", () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });
});
