export const SITE_NAME = 'SG School Phone Pouch Programme';
export const COMPANY_NAME = 'Chu Technologies Pte Ltd';
export const COMPANY_UEN = '201926755K';
export const CONTACT_EMAIL = 'kevin.chu@ct.com.sg';
export const CONTACT_WHATSAPP = '+6598222723';

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
}

export function getCanonical(path = '/') {
  const base = getSiteUrl().replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}

export const WHATSAPP_LINK = 'https://wa.me/6598222723?text=Hello%20Kevin%2C%20I%E2%80%99m%20contacting%20you%20about%20the%20SG%20School%20Phone%20Pouch%20Programme%20for%20our%20school.';
