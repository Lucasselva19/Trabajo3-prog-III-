function App() {
    const [numero1, setNumero1] = React.useState('');
    const [numero2, setNumero2] = React.useState('');
    const [operacion, setOperacion] = React.useState('suma');
    const [resultado, setResultado] = React.useState(null);
    const [isDisabled, setIsDisabled] = React.useState(false);
    
    function validarNum2(e) {
        const num2 = e.target.value;
        setNumero2(num2);
        validarDivisionPorCero(num2, operacion);
        console.log("Validando numero 2: " + num2);
    }

    function validarOperacion(e) {
        const operacionelegida = e.target.value;
        setOperacion(operacionelegida);
        validarDivisionPorCero(numero2, operacionelegida);
        console.log("Validando operacion: " + operacionelegida);
    }

    function validarDivisionPorCero(numero2, operacion) {

        const num2Parsed = parseFloat(numero2);
        setIsDisabled(false);

        if (operacion === "division" && num2Parsed === 0) {
            setIsDisabled(true);
            console.log("Entro al if");
            return;
        }
            
        setIsDisabled(false);
        
    }


    const calcular = () => {
        let res;
        switch (operacion) {
            case 'suma':
                res = parseFloat(numero1) + parseFloat(numero2);
                break;
            case 'resta':
                res = parseFloat(numero1) - parseFloat(numero2);
                break;
            case 'multiplicacion':
                res = parseFloat(numero1) * parseFloat(numero2);
                break;
            case 'division':
                res = parseFloat(numero1) / parseFloat(numero2);
                break;
        }
        setResultado(res);
    };

    return (
        <div>
            <input type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
            <input type="number" value={numero2} onChange={validarNum2} />
            <select value={operacion} onChange={validarOperacion}>
                <option value="suma">Suma</option>
                <option value="resta">Resta</option>
                <option value="multiplicacion">Multiplicación</option>
                <option value="division">División</option>
            </select>
            <button onClick={calcular} disabled={isDisabled}>Calcular</button>
            {resultado !== null && <p>Resultado: {resultado}</p>}
        </div>
    );
}