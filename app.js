//inicio de sesion

class inicioSesion {
    constructor(usuario, password) {
        this.usuario = usuario
        this.password = password
    }
}

let usuarios = [
    new inicioSesion("admin", "1234"),
    new inicioSesion("omar", "manias"),
    new inicioSesion("osvaldo", "perro123"),
    new inicioSesion("agustin", "caniche")
]


let usuarioLogueado

verificacion = 3

function iniciarSesion() {
    
    
    while(verificacion > 0) {
        const login = new inicioSesion(prompt('Ingrese su nombre de usuario:'), prompt('Ingrese su contraseña:'))
        usuarios.forEach((usuario) => {
            if (usuario.usuario === login.usuario && usuario.password === login.password) {
            usuarioLogueado = login
            verificacion -= 3
            alert(`su cunta ha sido iniciada con exito, Bienvenido!`)
        }
    }
    )
    if (!usuarioLogueado) alert('Lo siento, el usuario o la contraseña son incorrectas, vuelve a intentarlo')
    
}
}







iniciarSesion()
