export { buildJwtSigner };
declare function buildJwtSigner<idT>(privateKey: string): {
    sign: (userId: idT) => string;
    verifyToken: (token: string) => string;
};
