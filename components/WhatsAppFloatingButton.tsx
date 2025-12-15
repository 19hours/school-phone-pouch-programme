import React from 'react';

const whatsappLink =
  'https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school.';

export function WhatsAppFloatingButton() {
  return (
    <div className="whatsapp-floating">
      <a className="button" href={whatsappLink} target="_blank" rel="noreferrer">
        Chat with us on WhatsApp
      </a>
    </div>
  );
}
