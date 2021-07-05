# Dudas     
## Ejercicio uno:  

En su almacén funciona perfectamente:  

```
const getFasterPromise = promises => {
 return Promise.any(promises)
    
};
```


Sin embarga en la última versión ahora aparece que está unhandle y es necesario añadr un manejador de errores, pero de esa manera siempre que entra se sale.   