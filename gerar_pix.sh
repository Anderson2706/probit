
#!/bin/bash

# Defina o Access Token do Mercado Pago
ACCESS_TOKEN="APP_USR-6be1152d-38db-4a69-ac02-fa78c86dc1d1" # Substitua pelo seu token

# Defina o valor do pagamento
VALOR=50.00 # Exemplo de valor do pagamento via Pix

# Enviar requisição POST para criar a preferência de pagamento
curl -X POST https://api.mercadopago.com/v1/checkouts/custom \
-H "Authorization: Bearer $ACCESS_TOKEN" \
-H "Content-Type: application/json" \
-d '{
  "items": [
    {
      "title": "Pagamento via PIX",
      "quantity": 1,
      "unit_price": '$VALOR'
    }
  ],
  "payment_methods": {
    "excluded_payment_methods": [{"id": "ticket"}],
    "excluded_payment_types": [{"id": "atm"}],
    "installments": 1
  },
  "back_urls": {
    "success": "https://www.suapagina.com/success",
    "failure": "https://www.suapagina.com/failure",
    "pending": "https://www.suapagina.com/pending"
  },
  "notification_url": "https://www.suapagina.com/notification",
  "additional_info": "Pagamento via Pix"
}'






































APP_USR-6be1152d-38db-4a69-ac02-fa78c86dc1d1