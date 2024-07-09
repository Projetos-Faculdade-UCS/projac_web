export type CustomFetchProps = Omit<RequestInit, 'method' | 'headers'>

export type BadRequest = { code: "bad_request"; message: string };

export type CustomResponse<T> =
    | (Omit<Response, "json"> & {
        status: 201 | 200;
        json: () => T | PromiseLike<T>;
    })
    | (Omit<Response, "json"> & {
        status: 400;
        json: () => BadRequest | PromiseLike<BadRequest>;
    });
