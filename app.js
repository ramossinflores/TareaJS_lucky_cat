    let arrayParticipantes=[];
    let winner;
    let participantCount = 0;

    document.getElementById("add-participant-btn").addEventListener("click", function() {
        participantCount++; // Suma 1 participante cada clic
        const participantsContainer = document.getElementById("participants-container"); 
    
        const label = document.createElement("label"); // Creo el elemento label
        label.setAttribute("for", `participante${participantCount}`);  // Construyo el atributo for con el número del participante 
        label.textContent = `Participante ${participantCount}`; // Contenido de texto de mi etiqueta
    
        const input = document.createElement("input"); // Creo un input
        input.setAttribute("type", "text"); // tipo texto
        input.setAttribute("name", `participante${participantCount}`);  // nombre de acuerdo con el label
        input.setAttribute("id", `participante${participantCount}`); // ídem id

    // Agrego label e input a mi participants-container en el DOM con cada clic
        participantsContainer.appendChild(label); 
        participantsContainer.appendChild(input);
    });    

function sorteo(){
    arrayParticipantes = []; // Reinicia el array para cada sorteo

    const inputs = document.querySelectorAll("input[type='text']"); // Selecciona todos mis inputs y los guarda en un arrreglo
    inputs.forEach(input => { // Para cada input en mi arreglo
        const value = input.value.trim(); // corto los espaciados derecha e izquierda
        if (value !== "") { // me aseguro de que no está vacío
            arrayParticipantes.push(value); // agrego al final dl arreglo
        }
    });

    if (arrayParticipantes.length > 1) { // Deben haber mínimo dos participantes
        winner = arrayParticipantes[Math.floor(Math.random() * arrayParticipantes.length)]; 
        /* El index es el resultado de redondear hacia el entero más cercano, 
        el valor de */
        document.getElementById("winner").innerHTML = `El elegido es ${winner}`;
    } else {
        document.getElementById("winner").innerHTML = `Debe haber al menos un par de participantes.`;
    }
}