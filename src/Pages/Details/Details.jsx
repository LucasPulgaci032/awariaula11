import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const Details = () => {
    const parameters = useParams();

    const [user, setUser] = useState(undefined);

    useEffect(() => {
       
    }, [parameters]);

    return (
        <div>
            <h1>Detalhes</h1>
            {user === undefined && (
                <div>
                    <p>Carregando...</p>
                </div>
            )}
            {user === null && (
                <div>
                    <p>Usuário não encontrado.</p>
                </div>
            )}
            {user && (
                <div>
                    <img alt={user.image.alt} src={user.image.src} width="250px" height="auto" />
                    <h2>{user.name}</h2>
                    <p>{user.description}</p>
                </div>
            )}
            <Link to='/'>Voltar</Link>
        </div>
    );
};

export default Details;
