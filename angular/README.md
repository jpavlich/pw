# Instalación

- Instalar [Node.js](https://github.com/nodesource/distributions/blob/master/README.md) **version 10.x**

  - Instrucciones para [Ubuntu](https://github.com/nodesource/distributions/blob/master/README.md#debinstall)
  - Repito: **la versión a instalar debe ser la 10.x**. No instalar versiones más nuevas, ya que pueden generar errores.

- Instalar Angular CLI

  `sudo npm install -g @angular/cli`

- Actualizar NPM

  `sudo npm install -g npm`

- Instalar otros

  `sudo npm install -g typescript`

  `sudo npm install -g tslint`

  `sudo npm install -g prettier`

- Configurar workspace
  - `shift+ctrl+p`
  - Abrir la opción `Preferences: Open User Settings`
  - Habilitar las siguientes opciones:
    - `Tslint: Enable`
    - `Prettier: Tslint Integration`
    - `Editor: Format On Save` (opcional)

# Creación y configuración de un proyecto

- Crear proyecto usando Angular CLI
  `ng n nombre_proyecto`

# Errores y solución

- `Unhandled rejection Error: EACCES: permission denied, mkdir...`
  - Ejecutar el script `fix_permissions.sh`
