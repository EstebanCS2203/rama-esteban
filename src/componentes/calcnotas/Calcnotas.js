
import './Calcnotas.css'

function Calcnotas(){
	
	return(
        <div className="calculadora-nota">
		<h2 id="titulocalc">Calculadora de Nota Definitiva</h2>
		<div id="input-container">
			<label id="label-notas" for="q1">Nota 1:</label>
			<input type="number" id="q1" min="0" max="5"></input>
		</div>
		<div id="input-container">
			<label id="label-notas" for="q2">Nota 2:</label>
			<input type="number" id="q2" min="0" max="5"></input>
		</div>
		<div id="input-container">
			<label id="label-notas" for="q3">Nota 3:</label>
			<input type="number" id="q3" min="0" max="5"></input>
		</div>
		<div id="input-container">
			<label id="label-notas" for="q4">Nota 4:</label>
			<input type="number" id="q4" min="0" max="5"></input>
		</div>
		<button id="calculadoranotas" onclick="calculate()">Calcular Nota Definitiva</button>
		<div id="output-container">
			<label id="label-notas" for="result">Nota Definitiva:</label>
			<input type="number" id="result" disabled></input>
			<div id="message"></div>
		</div>
        <button id="limpiar" onclick="limpiar()">Limpiar</button>
	</div>
    )
}
export default Calcnotas;