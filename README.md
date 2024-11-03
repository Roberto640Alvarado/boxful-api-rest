# Orders API

Este proyecto expone un endpoint para crear órdenes a través de una API.

## Endpoint

La ruta para acceder al endpoint es la siguiente: http://localhost:3001/orders

## Ejemplo de Solicitud

```json
{
  "pickupAddress": "Avenida Principal, San Salvador",
  "scheduledDate": "2024-11-15",
  "firstName": "Roberto Carlos",
  "lastName": "Alvarado",
  "email": "ralvaradobeltran5@gmail.com",
  "phone": "+503 70248234",
  "recipientAddress": "Calle Secundaria, Santa Ana",
  "department": "Santa Ana",
  "municipality": "Santa Ana",
  "referencePoint": "Cerca del parque central",
  "instructions": "Entregar en la puerta principal",
  "packages": [
    {
      "largo": 30,
      "alto": 20,
      "ancho": 15,
      "peso": 5,
      "contenido": "Libros"
    },
    {
      "largo": 40,
      "alto": 25,
      "ancho": 20,
      "peso": 8,
      "contenido": "Ropa"
    }
  ]
}
