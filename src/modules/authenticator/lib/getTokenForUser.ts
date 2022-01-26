import { buildJwtSigner } from '../../../lib';

export { buildGetTokenForUser };

function buildGetTokenForUser<idT>(privateKey: string) {
  return getTokenForUser;

  async function getTokenForUser(user: { _id: idT }) {
    const jwtSigner = buildJwtSigner(privateKey);

    const token = jwtSigner.sign(user._id);

    return token;
  }
}
