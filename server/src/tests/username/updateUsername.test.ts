import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import app from '../../app';
import { getSupabaseClient } from '../../config/supabase';

vi.mock('../../config/supabase', () => ({
  getSupabaseClient: vi.fn(),
}));

const mockedGetSupabaseClient = vi.mocked(getSupabaseClient);

function createFakeSupabaseClient(options: {
  user?: { id: string; email: string } | null;
  authError?: any;
  updateData?: any;
  updateError?: any;
}) {
  const {
    user = null,
    authError = null,
    updateData = null,
    updateError = null,
  } = options;

  const queryChain = {
    update: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    select: vi.fn().mockReturnThis(),
    single: vi.fn().mockResolvedValue({ data: updateData, error: updateError }),
  };

  return {
    auth: {
      getUser: vi.fn().mockResolvedValue({ data: { user }, error: authError }),
    },
    from: vi.fn().mockReturnValue(queryChain),
  } as any;
}

describe('/Post Username', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("doesn't allow unauthorized request", async () => {
    const response = await request(app)
      .post('/username')
      .send({ name: 'newName' });

    expect(response.status).toBe(401);
  });

  it('throws when validation failed', async () => {
    mockedGetSupabaseClient.mockReturnValue(
      createFakeSupabaseClient({
        user: { id: 'user-123', email: 'test@example.com' },
      }),
    );

    const response = await request(app)
      .post('/username')
      .set('Authorization', 'Bearer faketoken')
      .send({ username: '' });

    expect(response.status).toBe(400);
  });

  it('returns the updated name', async () => {
    const fakeUser = { id: 'user-123', email: 'test@example.com' };
    const fakeUpdatedRow = { id: 'user-123', username: 'newName' };

    mockedGetSupabaseClient.mockReturnValue(
      createFakeSupabaseClient({ user: fakeUser, updateData: fakeUpdatedRow }),
    );

    const response = await request(app)
      .post('/username')
      .set('Authorization', 'Bearer faketoken')
      .send({ username: 'newName' });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ username: fakeUpdatedRow.username });
  });
});
