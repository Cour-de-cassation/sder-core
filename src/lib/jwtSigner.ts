import { sign as jsonwebtokenSign, verify } from 'jsonwebtoken';

export { buildJwtSigner };

const ONE_WEEK = 7 * 24 * 60 * 60;

function buildJwtSigner<idT>(privateKey: string) {
  return {
    sign,
    verifyToken,
  };

  function sign(userId: idT): string {
    return jsonwebtokenSign({ userId }, privateKey, { expiresIn: ONE_WEEK });
  }

  function verifyToken(token: string): string {
    const decodedToken = verify(token, privateKey) as { userId?: string };
    if (typeof decodedToken === 'string' || !decodedToken || !decodedToken.userId) {
      throw new Error(`Invalid userId in decoded token : ${JSON.stringify(decodedToken)}`);
    }
    return decodedToken.userId;
  }
}
