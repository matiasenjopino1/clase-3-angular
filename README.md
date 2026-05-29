# clase-2-angular

Se crea formulario reactivo con FormBuilder y FormGroup con 3 opciones:Nombre,Email,Mensaje.El nombre y email piden validaciones
y el mensaje no.
Se crea un boton que se bloquea si los campos no son validados con *ngIf,*ngFor para listar los errores de validacion,ngClass para poner en color
segun si es error o validacion correcta los inputs,ngStyle para cambiar dinamicamente el color del titulo.
Se muestra por console.log los datos el formulario una vez enviados.
Se importa CommonModule,ReactiveFormsModule en el app.ts y registro.ts.




Instrucciones para iniciar proyecto:

Npm intall para instalar node_modules
ng serve para iniciar proyecto

Ejemplo de ejecucion en consola mostrando los datos enviados:

Captura de pantalla con la app mostrando los datos validados:
![App con datos validados](screenshots/formulario1.png)

Captura de pantalla con la app mostrando los errores de validacion:
![App con errores de validacion](screenshots/formulario3.png)

Captura de pantalla con la app mandando los datos del formulario:
![App con datos en console log](screenshots/formulario4.png)
