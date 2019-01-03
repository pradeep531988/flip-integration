export default function (server) {

  server.route({
    path: '/api/flip-integration/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

}
