function mostrarDataHora() {
    const date = new Date();
   
    console.log(date.toLocaleDateStr());

    document.getElementById('date').innerText = date.toLocaleString();
}

mostrarDataHora();