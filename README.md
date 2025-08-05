GESTION DE ACTAC Y COMPROMISOS
Este proyecto es una prueba que consiste en desarrollar componentes independientes para la gestion de actas y compromisos, utilizando Django en Backend y React para su Frontend. Este sistema autentica roles, protege archivos y consumo propio de su API.
------------------------------------------------------------------------------------
TECNOLOGIAS 
- Django - python
- React - JavaScript
- SQLlite (Se usara de forma local)

ROLES
- Administrador
- Usuario B
(Caracteristicas)
- Admin: Puede visualizar todas las actas, compromisos y gestiones
- Usuario: Solo puede acceder a las actas en las que sea creador

INICIO SESIÒN 
- Correo electronico y contraseña
- Token de autenticaciòn
- Las rutas estan protegidas tanto en el Back como en el Front

FUNCIONES PRINCIPALES
- Autenticaciòn
- Lista de actas
- Detalles en actas
- Crear gestiones
- Proteccion de los archivos
------------------------------------------------------------------------------------
INSTRUCCIONES PARA SU USO 

DJANGO - BACKEND
Git clone "url repositorio"
cd baseD
(Activar entorno virtual) python -m venv env
.env\Scripts\activate
python manage.py migrate
python manage.py loaddata usuarios_iniciales.json
python manage.py runserver

REACT - FRONTEND
git clone "url repositorio"
cd front
npm install 
npm run dev 
------------------------------------------------------------------------------------
