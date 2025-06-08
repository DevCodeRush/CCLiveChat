import { createApiClient } from '@src/core/library/apiClient.ts'
import { LoginOktaRequest } from '@src/services/types.ts'
import { oktaAuthUrl } from '@src/core/library/config.ts'

const oktaClient = createApiClient({
    baseURL: oktaAuthUrl,
    timeout: 10000
})

/**
 * Handle login with OKTA credential
 * @param loginOktaParams
 */
export const loginOkta = async (loginOktaParams: LoginOktaRequest) => {
    try {
        const res = await oktaClient.post(
            '/api/v1/authn',
            {
                ...loginOktaParams,
            },
            {
                headers: {
                    'Cache-Control': 'no-cache',
                    Pragma: 'no-cache',
                    Expire: '0',
                },
            },
        );
        return res.data;
    } catch (reason) {
        throw reason;
    }
};
