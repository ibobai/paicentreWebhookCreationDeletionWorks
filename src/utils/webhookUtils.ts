export const API_BASE_URL = 'https://b550-2a02-842a-112f-3301-45a2-8930-81-ba2a.ngrok-free.app';

export const WEBHOOK_URLS = {
  PAYPAL_CONNECT: `${API_BASE_URL}/api/paypal/connection/connect`,
  STRIPE_CONNECT: `${API_BASE_URL}/api/stripe/connection/connect`,
  PAYPAL_DELETE: `${API_BASE_URL}/api/paypal/connection/webhook/delete`,
  STRIPE_DELETE: `${API_BASE_URL}/api/stripe/connection/webhook/delete`
} as const;

export interface WebhookConfig {
  url: string;
  events: string[];
  active: boolean;
  createdAt: string;
}

export interface ConnectionStatus {
  connected: boolean;
  accountId?: string;
  name?: string;
  email?: string;
  webhooks?: WebhookConfig[];
}

export function getConnectionStatus(searchParams: URLSearchParams): {
  isConnected: boolean;
  provider?: 'stripe' | 'paypal';
} {
  const status = searchParams.get('status');
  const source = searchParams.get('source');

  if (status === 'connected' && (source === 'stripe' || source === 'paypal')) {
    return {
      isConnected: true,
      provider: source,
    };
  }

  return { isConnected: false };
}

export function getStorageKey(provider: string): string {
  return `${provider}WebhookConnection`;
}

export async function deleteWebhookAPI(webhookId: string, provider: 'stripe' | 'paypal'): Promise<boolean> {
  try {
    const url = provider === 'paypal' ? WEBHOOK_URLS.PAYPAL_DELETE : WEBHOOK_URLS.STRIPE_DELETE;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ webhookId }),
    });

    const data = await response.json();
    return data.deleted;
  } catch (error) {
    console.error('Error deleting webhook:', error);
    return false;
  }
}