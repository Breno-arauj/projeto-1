function mostrarDataHora() {
    const date = new Date();
   
    console.log(date.toLocaleDateString());

    document.getElementById('date').innerText = date.toLocaleString();
}

mostrarDataHora();