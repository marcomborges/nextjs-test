import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Second Next.JS!</h1>
            <Contador />
            <div>Testing deploy</div>
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home