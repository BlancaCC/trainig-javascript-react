# Dudas     
## Ejercicio 1_first:  

En su almacén funciona perfectamente:  

```
const getFasterPromise = promises => {
 return Promise.any(promises)
    
};
```


Sin embarga en la última versión ahora aparece que está unhandle y es necesario añadr un manejador de errores, pero de esa manera siempre que entra se sale.   

## 3_first   

¿ Es así de simple ?


### Duda   2_second  SOLUCIONADO 

Los mensajes salen mu raros, cuando sale un ok luego sale todo ok. Salen en orden porque los error tardanmás en procesarse

```
ok
ok
ok
ok
ok
ok
Error
Error
Error
Error
```