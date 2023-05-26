import { useState } from 'react';

const SignInForm = () => {
    const [newUser, setNewUser] = useState({
        nombre: '',
        apellido: '',
        mail: '',
        constrasena: ''
    })

    return (
        <form>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    value={newUser.nombre}
                    onChange={(event) => setNewUser({... newUser, nombre: event.target.value})}
                    required
                />
            </div>
            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input
                    type="text"
                    id="apellido"
                    value={newUser.apellido}
                    onChange={(event) => setNewUser({... newUser, apellido: event.target.value})}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={newUser.mail}
                    onChange={(event) => setNewUser({... newUser, mail: event.target.value})}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    value={newUser.password}
                    onChange={(event) => setNewUser({ ...newUser, password: event.target.value})}
                    required
                />
            </div>
            <button type="submit">Crear cuenta</button>
        </form>


    )
}

export default SignInForm;