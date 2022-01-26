export { buildGetTokenForUser };
declare function buildGetTokenForUser<idT>(privateKey: string): (user: {
    _id: idT;
}) => Promise<string>;
