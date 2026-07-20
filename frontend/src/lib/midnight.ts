import { type InitialAPI, type ConnectedAPI } from '@midnight-ntwrk/dapp-connector-api';

declare global {
  interface Window {
    midnight?: {
      lace?: InitialAPI;
    };
  }
}

let connectedAPI: ConnectedAPI | null = null;

export const connectLace = async (networkId = 'undeployed'): Promise<ConnectedAPI> => {
  if (!window.midnight?.lace) {
    throw new Error('Lace wallet is not installed or not available on the window object.');
  }

  // Request connection
  const api = await window.midnight.lace.connect(networkId);
  connectedAPI = api;
  return api;
};

export const getConnectedAPI = () => {
  return connectedAPI;
};

export const disconnectLace = () => {
  connectedAPI = null;
};
