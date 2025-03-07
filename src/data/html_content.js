const htmlContent = 
`
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hotel Iguazú Urban Express</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
        }
        .header h1 {
          color: #0067b8;
        }
        .content {
          margin-top: 20px;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          font-size: 12px;
          color: #888;
        }
        img {
          width: 80%;
          max-height: 340px;
          object-fit: cover;
          border-radius: 8px;
          margin: 0 auto 20px auto;
          display: block;
        }
        .content p {
          font-size: 16px;
          line-height: 1.6;
        }
        .content h2 {
          color: #0067b8;
          margin-top: 25px;
        }
        .amenities-list {
          list-style-type: none;
          padding-left: 0;
        }
        .amenities-list li {
          margin-bottom: 10px;
          padding-left: 30px;
          position: relative;
        }
        .amenities-list li span {
          position: absolute;
          left: 0;
        }
        .schedule-list {
          list-style-type: none;
          padding-left: 0;
        }
        .schedule-list li {
          margin-bottom: 10px;
          padding-left: 30px;
          position: relative;
        }
        .schedule-list li span {
          position: absolute;
          left: 0;
        }
        .payment-list {
          list-style-type: none;
          padding-left: 0;
        }
        .payment-list li {
          margin-bottom: 10px;
          padding-left: 30px;
          position: relative;
        }
        .payment-list li span {
          position: absolute;
          left: 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Lo esperamos en la ciudad de las Cataratas</h1>
        </div>
        <div class="content">
          <img src="https://www.iguazuurbanhotel.com/_next/image?url=%2Fimg%2Fgallery-img-8.jpg&w=640&q=100" alt="Vista de las Cataratas del Iguazú">
          
          <h2>Nuestras Habitaciones</h2>
          <p>🛎 El Hotel Iguazú Urban Express, cuenta con habitaciones confortables singles, dobles y triples, (puede ser con cama matrimonial y una soltero o 3 solteros) aire acondicionado, TV por cable y baño privado, ropa de cama y toallas.</p>
          <p>🅿️ Estacionamiento sobre la calle, contamos con cámaras de seguridad.</p>
          
          <h2>El valor incluye:</h2>
          <ul class="amenities-list">
            <li><span>🔸</span> El uso de la piscina 🏊‍♀‍</li>
            <li><span>🔸</span> Limpieza de la habitación</li>
            <li><span>🔸</span> Wi-Fi en todo el predio</li>
            <li><span>🔸</span> Desayuno</li>
          </ul>
          
          <h2>Horarios</h2>
          <ul class="schedule-list">
            <li><span>📌⏲️</span> Contamos con personal las 24 hs. que pueden recibirlos.</li>
            <li><span>📌⏲️</span> Horario de ingreso a partir de las 14:00 hs.</li>
            <li><span>📌⏲️</span> Horario de salida hasta las 10:00 am</li>
            <li><span>📌⏲️</span> Horario de desayuno de 07:00 a 10:00 am</li>
            <li><span>📌⏲️</span> Horario de piscina de 12:00 pm a 21:00 pm.</li>
          </ul>
          
          <h2>Forma de pago</h2>
          <p>🔴 Aceptamos:</p>
          <ul class="payment-list">
            <li><span>✅</span> Efectivo</li>
            <li><span>✅</span> Transferencia</li>
            <li><span>✅</span> Tarjeta débito</li>
            <li><span>✅</span> Tarjeta crédito, en un pago.</li>
          </ul>
          <p>Para tomar la reserva le solicitamos el pago de la primer noche por transferencia, el resto lo abona al ingreso.</p>
        </div>
        <div class="footer">
          <p>&copy; 2024 Iguazú Urban Hotel | Todos los derechos reservados</p>
        </div>
      </div>
    </body>
  </html>
`;

export default htmlContent;
