function App() {
    const [Derecho, setDerecho] = React.useState(false);

    
    const BotonIzquierdoactivado = () => {
        setDerecho(true);
    };
    
    const BotonDerechoactivado = () => {
        setDerecho(false);
    };
    
    return (
        <div>
            <button onClick={BotonIzquierdoactivado} disabled={Derecho}>
                Izquierdo
            </button>
            <button onClick={BotonDerechoactivado} disabled={!Derecho}>
                Derecho
            </button>
        </div>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);