import { describe, it, expect } from 'vitest';

describe('gigpay compact contract', () => {
  it('compiles and exposes the contract', async () => {
    // Dynamic import to match the deploy script pattern
    const Gigpay = await import('../contracts/managed/gigpay/contract/index.cjs').catch(() => null)
      || await import('../contracts/managed/gigpay/contract/index.js').catch(() => null);
    
    expect(Gigpay).toBeDefined();
    expect(Gigpay.Contract).toBeDefined();
    // Ensures the managed compiler output was successfully generated
  });
});
