function App() {
    const [peso, setPeso] = React.useState('');
    const [altura, setAltura] = React.useState('');
    const [indice, setIndice] = React.useState(null);
    const [mensaje, setMensaje] = React.useState('');
    const [color, setColor] = React.useState('');

    const calcularIMC = () => {
        if (peso && altura) {
            const alturaEnMetros = altura / 100;
            const imc = peso / (alturaEnMetros * alturaEnMetros);
            setIndice(imc.toFixed(2));

            if (imc < 18.5) {
                setMensaje('Tiene un indice de masa corporal bajo');
                setColor('yellow');
            } else if (imc >= 18.5 && imc <= 24.9) {
                setMensaje('Tiene un indice de masa corporal normal');
                setColor('green');
            } else if (imc >= 25 && imc <= 29.9) {
                setMensaje('Tiene un indice de masa corporal de sobrepeso');
                setColor('orange');
            } else {
                setMensaje('Tiene un indice de masa corporal de obesidad');
                setColor('red');
            }
        }
    };

    return (
        <div>
            <form id="form-calculadoraIMC">
            <input
                type="number"
                placeholder="Ingrese su peso (kg)"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                />
            <input
                type="number"
                placeholder="Ingrese su altura (cm)"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                />
            <button onClick={calcularIMC}>Calcular IMC</button>
            </form>
            {indice && (
                <div style={{ color: color }}>
                    <p>IMC: {indice}</p>
                    <p>{mensaje}</p>
                </div>
            )}
        </div>
    );
}