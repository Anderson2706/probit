const mercadopago = require('mercadopago');

// Configure o Mercado Pago com o seu access token
mercadopago.configurations.setAccessToken('APP_USR-6be1152d-38db-4a69-ac02-fa78c86dc1d1'); // Substitua pelo seu token

// Criação da preferência de pagamento
const criarPix = async (valor) => {
  try {
    const preference = {
      items: [
        {
          title: "Pagamento via PIX",
          unit_price: valor,
          quantity: 1,
        },
      ],
      payment_methods: {
        excluded_payment_methods: [{ id: 'ticket' }],
        excluded_payment_types: [{ id: 'atm' }],
        installments: 1,
      },
      back_urls: {
        success: 'https://www.suapagina.com/success',
        failure: 'https://www.suapagina.com/failure',
        pending: 'https://www.suapagina.com/pending',
      },
      notification_url: 'https://www.suapagina.com/notification',
      additional_info: 'Pagamento via PIX',
    };

    const response = await mercadopago.preferences.create(preference);
    
    const paymentUrl = response.response.init_point; // URL do pagamento
    const qrCodeUrl = response.response.qr_code; // QR Code

    console.log("Pix Copia e Cola: " + paymentUrl);
    console.log("QR Code do Pix: " + qrCodeUrl);
    
  } catch (error) {
    console.error("Erro ao gerar o pagamento PIX: ", error);
  }
};

// Exemplo de valor a ser gerado
const valorPix = 40.00; // Exemplo de valor de 40 reais
criarPix(valorPix);
