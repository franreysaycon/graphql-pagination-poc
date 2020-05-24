import createServer from "./lib/create-server";

const startServer = async () => {
    const port = process.env.PORT || 3000;
    const server = createServer();

    await server.listen({ port });
    // tslint:disable-next-line: no-console
    console.log(`Server is running at localhost:${port}`);
}

startServer();
