import { afterAll, beforeAll, describe, expect, test } from '@jest/globals';
import { createTestServer } from '../.wundergraph/generated/testing';

const wg = createTestServer();
beforeAll(() => wg.start());
afterAll(() => wg.stop());

describe('SpaceX API', () => {
	test('Should return dragons', async () => {
		const result = await wg.client().query({
			operationName: 'Dragons',
		});
		const dragons = result.data?.spacex_dragons;
		expect(dragons?.length).toBeGreaterThan(0);
	});
});
