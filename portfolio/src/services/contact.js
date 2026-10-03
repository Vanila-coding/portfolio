export const CONTACT_ENDPOINT = null

export async function sendTransmission(message) {
  if (!CONTACT_ENDPOINT) {
    throw new Error('Aucun backend n’est connecté pour le moment. Cette transmission n’a pas été envoyée.')
  }

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  })

  if (!response.ok) {
    throw new Error('Échec de la transmission. Réessayez plus tard.')
  }
}
