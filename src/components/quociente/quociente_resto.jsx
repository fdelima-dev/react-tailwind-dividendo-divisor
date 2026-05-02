import { useState } from "react";

const Quociente = () =>{
    const [dividendo, setDividendo] = useState(0);
    const [divisor, setDivisor] = useState(0);

    const [exibirPagina, setExibirPagina] = useState(false);

    const [resultado1, setResultado1] = useState(null);
    const [resultado2, setResultado2] = useState(null)

    function quociente(){
        const div = dividendo / divisor;
        return(
            <p>{div.toFixed(2)}</p>
        )
    }
    function resto(){
        const res = dividendo % divisor;
        return(
            <p>{res}</p>
        )
    }

    function handleSubmit(e){
        e.preventDefault();
        setExibirPagina(true);
        setResultado1(quociente())
        setResultado2(resto())
    }
    return(
        <div className="flex flex-col items-center justify-center">
            <div className="bg-gray-700 w-[400px] min-h-[350px] max-w-sm p-4">
                <h2 className="text-white font-bold font-dream-baser text-4xl text-center p-4">Divisão ÷</h2>
                <form onSubmit={handleSubmit}>
                    <h4 className="font-bold text-2xl text-white font-dream-baser p-4 text-center">Digite o Dividendo</h4>
                    <input className="w-full p-2 block border" type="text" onChange={(e) => setDividendo(Number(e.target.value))} />
                    <h4 className="font-bold text-2xl text-white font-dream-baser p-4 text-center">Digite o disivor</h4>
                    <input className="w-full p-2 block border" type="text" onChange={(e) => setDivisor(Number(e.target.value))} />
                    <br />
                    <button className="w-full bg-blue-500 text-white p-4" type="submit">Enviar</button>
                </form>
            </div>
            <div className="mt-10 min-h-[60px]">
                {
                    resultado1 !== null && resultado2 !== null && (
                        <div>
                            <h2 className="text-center text-center text-2xl font-bold text-white">Quociente: {resultado1}</h2>
                            <h2 className="text-center text-center text-2xl font-bold text-white">Resto: {resultado2}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Quociente