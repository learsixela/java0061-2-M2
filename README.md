# java0061-2-M2

## Code
### comandos de configuracion
```
git config --global user.name "Israel Palma" 
git config --global user.email "ipalm001@gmail.com"
```
### crear un archivo y agrega informacion
echo "# java0061-2-M2" >> README.md
### inicializa el repositorio
git init
### enviar todos archivos a la zona de preparacion
git add .
### etiquetar el paquete localmente
git commit -m "mi primer commit, M2 (HTML, CSS, JS)"
### crear y posicionar rama main
git branch -M main
### vincular el repositorio local con la nube
git remote add origin https://github.com/learsixela/java0061-2-M2.git
### subir la informacion a la nube
git push -u origin main


##  Archivos modificados o nuevos archivos
```
git status
git add .
git commit -m "se modifica el archivo javascript"
git push -u origin main
```