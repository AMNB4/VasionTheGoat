self.__uv$config = {
    prefix: '/vn/ontop/',
    bare:'https://loungef2x.koyeb.app/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/vn/uv.handler.js',
    bundle: '/vn/uv.bundle.js',
    config: '/vn/uv.config.js',
    sw: '/vn/uv.sw.js',
};
