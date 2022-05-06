import fetch from 'cross-fetch';
global.fetch = fetch;

import { setupServer } from 'msw/node';
import { rest } from 'msw';

const data = {
  "access_token": "MOCKED_ACCESS_TOKEN", //changed
  "token_type": "bearer",
  "expires_in": 3600,
  "refresh_token": "UMCIQqCs35yG0av-6XqRbw",
  "user": {
    "id": "123456", //changed
    "aud": "authenticated",
    "role": "authenticated",
    "email": "test@user.com", //CHANGED HERE
    "email_confirmed_at": "2022-05-06T18:56:35.171575Z",
    "phone": "",
    "confirmed_at": "2022-05-06T18:56:35.171575Z",
    "last_sign_in_at": "2022-05-06T23:16:50.201641719Z",
    "app_metadata": {
      "provider": "email",
      "providers": [
        "email"
      ]
    },
    "user_metadata": {},
    "identities": [
      {
        "id": "123456", //changed
        "user_id": "123456", //changed
        "identity_data": {
          "sub": "123456" //changed
        },
        "provider": "email",
        "last_sign_in_at": "2022-05-06T18:56:35.169934Z",
        "created_at": "2022-05-06T18:56:35.169973Z",
        "updated_at": "2022-05-06T18:56:35.169976Z"
      }
    ],
    "created_at": "2022-05-06T18:56:35.167834Z",
    "updated_at": "2022-05-06T23:16:50.202698Z"
  }
};

const server = setupServer(
  rest.post('https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token', (req, res, ctx) =>
    res(ctx.json(data))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());