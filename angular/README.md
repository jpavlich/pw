# Instalación

1. Instalar [Node.js](https://github.com/nodesource/distributions/blob/master/README.md) **version 10.x**

- Instrucciones para [Ubuntu](https://github.com/nodesource/distributions/blob/master/README.md#debinstall)
- Repito: **la versión a instalar debe ser la 10.x**. No instalar versiones más nuevas, ya que pueden generar errores.

2. Instalar Angular CLI

`sudo npm install -g @angular/cli`

3. Actualizar NPM

`sudo npm install -g npm`

4. Instalar otros

`sudo npm install -g typescript`

`sudo npm install -g tslint`

`sudo npm install -g prettier`

5.1. Instalar Visual Studio Code

5.2. Si Visual Studio Code ya estuviera instalado, remover configuración antigua de Visual Studio Code (Recomendado)

- Remover las siguientes carpetas:

  - `$HOME/.vscode`
  - `$HOME/.config/Code`

6. Instalar extensiones recomendadas de Visual Studio Code

- Desde la carpeta de este repositorio, ejecutar `./install_extensions.sh`

7. Configurar workspace

- Abrir Visual Studio Code
- `shift+ctrl+p`
- Abrir la opción `Preferences: Open User Settings`
- Habilitar las siguientes opciones:

  - `Tslint: Enable`
  - `HTML > Format: Enable`
  - `Prettier: Tslint Integration`
  - `Editor: Format On Save` (recomendado)

# Creación y configuración de un proyecto

- Crear proyecto usando Angular CLI
  `ng n nombre_proyecto`

# Errores y solución

- `Unhandled rejection Error: EACCES: permission denied, mkdir...`
  - Ejecutar el script `fix_permissions.sh`
- `Error: ENOSPC: no space left on device, watch...`
  - Ejecutar el script `fix_no_space.sh`
