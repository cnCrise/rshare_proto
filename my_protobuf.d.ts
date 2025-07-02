import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace app. */
export namespace app {

    /** Properties of an AppIndex. */
    interface IAppIndex {

        /** AppIndex saasId */
        saasId?: (number|null);

        /** AppIndex appId */
        appId?: (number|null);
    }

    /** Represents an AppIndex. */
    class AppIndex implements IAppIndex {

        /**
         * Constructs a new AppIndex.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.IAppIndex);

        /** AppIndex saasId. */
        public saasId: number;

        /** AppIndex appId. */
        public appId: number;

        /**
         * Creates a new AppIndex instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppIndex instance
         */
        public static create(properties?: app.IAppIndex): app.AppIndex;

        /**
         * Encodes the specified AppIndex message. Does not implicitly {@link app.AppIndex.verify|verify} messages.
         * @param message AppIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.IAppIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppIndex message, length delimited. Does not implicitly {@link app.AppIndex.verify|verify} messages.
         * @param message AppIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.IAppIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppIndex message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.AppIndex;

        /**
         * Decodes an AppIndex message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.AppIndex;

        /**
         * Verifies an AppIndex message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppIndex message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppIndex
         */
        public static fromObject(object: { [k: string]: any }): app.AppIndex;

        /**
         * Creates a plain object from an AppIndex message. Also converts values to other types if specified.
         * @param message AppIndex
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.AppIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppIndex to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AppIndex
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateAppRequest. */
    interface ICreateAppRequest {

        /** CreateAppRequest auth */
        auth?: (auth.IAuthorization|null);

        /** CreateAppRequest name */
        name?: (string|null);

        /** CreateAppRequest saasId */
        saasId?: (number|null);
    }

    /** Represents a CreateAppRequest. */
    class CreateAppRequest implements ICreateAppRequest {

        /**
         * Constructs a new CreateAppRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: app.ICreateAppRequest);

        /** CreateAppRequest auth. */
        public auth?: (auth.IAuthorization|null);

        /** CreateAppRequest name. */
        public name: string;

        /** CreateAppRequest saasId. */
        public saasId: number;

        /**
         * Creates a new CreateAppRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateAppRequest instance
         */
        public static create(properties?: app.ICreateAppRequest): app.CreateAppRequest;

        /**
         * Encodes the specified CreateAppRequest message. Does not implicitly {@link app.CreateAppRequest.verify|verify} messages.
         * @param message CreateAppRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: app.ICreateAppRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateAppRequest message, length delimited. Does not implicitly {@link app.CreateAppRequest.verify|verify} messages.
         * @param message CreateAppRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: app.ICreateAppRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateAppRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateAppRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): app.CreateAppRequest;

        /**
         * Decodes a CreateAppRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateAppRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): app.CreateAppRequest;

        /**
         * Verifies a CreateAppRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateAppRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateAppRequest
         */
        public static fromObject(object: { [k: string]: any }): app.CreateAppRequest;

        /**
         * Creates a plain object from a CreateAppRequest message. Also converts values to other types if specified.
         * @param message CreateAppRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: app.CreateAppRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateAppRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateAppRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Represents an AppService */
    class AppService extends $protobuf.rpc.Service {

        /**
         * Constructs a new AppService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new AppService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AppService;

        /**
         * Calls CreateApp.
         * @param request CreateAppRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AppIndex
         */
        public createApp(request: app.ICreateAppRequest, callback: app.AppService.CreateAppCallback): void;

        /**
         * Calls CreateApp.
         * @param request CreateAppRequest message or plain object
         * @returns Promise
         */
        public createApp(request: app.ICreateAppRequest): Promise<app.AppIndex>;
    }

    namespace AppService {

        /**
         * Callback as used by {@link app.AppService#createApp}.
         * @param error Error, if any
         * @param [response] AppIndex
         */
        type CreateAppCallback = (error: (Error|null), response?: app.AppIndex) => void;
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of an Empty. */
    interface IEmpty {
    }

    /** Represents an Empty. */
    class Empty implements IEmpty {

        /**
         * Constructs a new Empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: common.IEmpty): common.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Empty;

        /**
         * Verifies an Empty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Empty
         */
        public static fromObject(object: { [k: string]: any }): common.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param message Empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Empty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Empty
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SubscribeRequest. */
    interface ISubscribeRequest {

        /** SubscribeRequest intervalMin */
        intervalMin?: (number|Long|null);

        /** SubscribeRequest intervalMax */
        intervalMax?: (number|Long|null);
    }

    /** Represents a SubscribeRequest. */
    class SubscribeRequest implements ISubscribeRequest {

        /**
         * Constructs a new SubscribeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ISubscribeRequest);

        /** SubscribeRequest intervalMin. */
        public intervalMin: (number|Long);

        /** SubscribeRequest intervalMax. */
        public intervalMax: (number|Long);

        /**
         * Creates a new SubscribeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscribeRequest instance
         */
        public static create(properties?: common.ISubscribeRequest): common.SubscribeRequest;

        /**
         * Encodes the specified SubscribeRequest message. Does not implicitly {@link common.SubscribeRequest.verify|verify} messages.
         * @param message SubscribeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ISubscribeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscribeRequest message, length delimited. Does not implicitly {@link common.SubscribeRequest.verify|verify} messages.
         * @param message SubscribeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ISubscribeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscribeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.SubscribeRequest;

        /**
         * Decodes a SubscribeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.SubscribeRequest;

        /**
         * Verifies a SubscribeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscribeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscribeRequest
         */
        public static fromObject(object: { [k: string]: any }): common.SubscribeRequest;

        /**
         * Creates a plain object from a SubscribeRequest message. Also converts values to other types if specified.
         * @param message SubscribeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.SubscribeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscribeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SubscribeRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace auth. */
export namespace auth {

    /** Properties of an Authorization. */
    interface IAuthorization {

        /** Authorization jwt */
        jwt?: (string|null);
    }

    /** Represents an Authorization. */
    class Authorization implements IAuthorization {

        /**
         * Constructs a new Authorization.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IAuthorization);

        /** Authorization jwt. */
        public jwt: string;

        /**
         * Creates a new Authorization instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Authorization instance
         */
        public static create(properties?: auth.IAuthorization): auth.Authorization;

        /**
         * Encodes the specified Authorization message. Does not implicitly {@link auth.Authorization.verify|verify} messages.
         * @param message Authorization message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IAuthorization, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Authorization message, length delimited. Does not implicitly {@link auth.Authorization.verify|verify} messages.
         * @param message Authorization message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IAuthorization, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Authorization message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Authorization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.Authorization;

        /**
         * Decodes an Authorization message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Authorization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.Authorization;

        /**
         * Verifies an Authorization message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Authorization message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Authorization
         */
        public static fromObject(object: { [k: string]: any }): auth.Authorization;

        /**
         * Creates a plain object from an Authorization message. Also converts values to other types if specified.
         * @param message Authorization
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.Authorization, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Authorization to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Authorization
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AuthData. */
    interface IAuthData {

        /** AuthData auth */
        auth?: (auth.IAuthorization|null);
    }

    /** Represents an AuthData. */
    class AuthData implements IAuthData {

        /**
         * Constructs a new AuthData.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IAuthData);

        /** AuthData auth. */
        public auth?: (auth.IAuthorization|null);

        /**
         * Creates a new AuthData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthData instance
         */
        public static create(properties?: auth.IAuthData): auth.AuthData;

        /**
         * Encodes the specified AuthData message. Does not implicitly {@link auth.AuthData.verify|verify} messages.
         * @param message AuthData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IAuthData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthData message, length delimited. Does not implicitly {@link auth.AuthData.verify|verify} messages.
         * @param message AuthData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IAuthData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.AuthData;

        /**
         * Decodes an AuthData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.AuthData;

        /**
         * Verifies an AuthData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthData
         */
        public static fromObject(object: { [k: string]: any }): auth.AuthData;

        /**
         * Creates a plain object from an AuthData message. Also converts values to other types if specified.
         * @param message AuthData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.AuthData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AuthData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RefreshAuthRequest. */
    interface IRefreshAuthRequest {

        /** RefreshAuthRequest auth */
        auth?: (auth.IAuthorization|null);

        /** RefreshAuthRequest expire */
        expire?: (number|Long|null);
    }

    /** Represents a RefreshAuthRequest. */
    class RefreshAuthRequest implements IRefreshAuthRequest {

        /**
         * Constructs a new RefreshAuthRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IRefreshAuthRequest);

        /** RefreshAuthRequest auth. */
        public auth?: (auth.IAuthorization|null);

        /** RefreshAuthRequest expire. */
        public expire: (number|Long);

        /**
         * Creates a new RefreshAuthRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RefreshAuthRequest instance
         */
        public static create(properties?: auth.IRefreshAuthRequest): auth.RefreshAuthRequest;

        /**
         * Encodes the specified RefreshAuthRequest message. Does not implicitly {@link auth.RefreshAuthRequest.verify|verify} messages.
         * @param message RefreshAuthRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IRefreshAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RefreshAuthRequest message, length delimited. Does not implicitly {@link auth.RefreshAuthRequest.verify|verify} messages.
         * @param message RefreshAuthRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IRefreshAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RefreshAuthRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RefreshAuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.RefreshAuthRequest;

        /**
         * Decodes a RefreshAuthRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RefreshAuthRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.RefreshAuthRequest;

        /**
         * Verifies a RefreshAuthRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RefreshAuthRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RefreshAuthRequest
         */
        public static fromObject(object: { [k: string]: any }): auth.RefreshAuthRequest;

        /**
         * Creates a plain object from a RefreshAuthRequest message. Also converts values to other types if specified.
         * @param message RefreshAuthRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.RefreshAuthRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RefreshAuthRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RefreshAuthRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Represents an AuthService */
    class AuthService extends $protobuf.rpc.Service {

        /**
         * Constructs a new AuthService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new AuthService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AuthService;

        /**
         * Calls RefreshAuth.
         * @param request RefreshAuthRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Authorization
         */
        public refreshAuth(request: auth.IRefreshAuthRequest, callback: auth.AuthService.RefreshAuthCallback): void;

        /**
         * Calls RefreshAuth.
         * @param request RefreshAuthRequest message or plain object
         * @returns Promise
         */
        public refreshAuth(request: auth.IRefreshAuthRequest): Promise<auth.Authorization>;
    }

    namespace AuthService {

        /**
         * Callback as used by {@link auth.AuthService#refreshAuth}.
         * @param error Error, if any
         * @param [response] Authorization
         */
        type RefreshAuthCallback = (error: (Error|null), response?: auth.Authorization) => void;
    }
}

/** Namespace error_code. */
export namespace error_code {

    /** ErrorCode enum. */
    enum ErrorCode {
        SUCCESS = 0,
        INVALID_INPUT = 1001,
        SERDE_ERR = 1002,
        NOT_SIGNUP = 2001,
        NONE_PASSWD = 2002,
        PASSWD_ERR = 2003,
        INVALID_THREE = 2005,
        THREE_ERR = 2006,
        INVALID_AUTH = 2011,
        EXPIRED_AUTH = 2012,
        EXPIRED_AUTH_SN = 2013,
        INVALID_APP = 2018,
        PERMISSION_DENIED = 2021,
        DB_ERR = 7001,
        IO_ERR = 7101,
        WX_ERR = 8001
    }
}

/** Namespace file. */
export namespace file {

    /** Properties of an UploadFileRequest. */
    interface IUploadFileRequest {

        /** UploadFileRequest filename */
        filename?: (string|null);

        /** UploadFileRequest data */
        data?: (Uint8Array|null);

        /** UploadFileRequest group */
        group?: (string|null);

        /** UploadFileRequest store */
        store?: (string|null);
    }

    /** Represents an UploadFileRequest. */
    class UploadFileRequest implements IUploadFileRequest {

        /**
         * Constructs a new UploadFileRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IUploadFileRequest);

        /** UploadFileRequest filename. */
        public filename: string;

        /** UploadFileRequest data. */
        public data: Uint8Array;

        /** UploadFileRequest group. */
        public group: string;

        /** UploadFileRequest store. */
        public store: string;

        /**
         * Creates a new UploadFileRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadFileRequest instance
         */
        public static create(properties?: file.IUploadFileRequest): file.UploadFileRequest;

        /**
         * Encodes the specified UploadFileRequest message. Does not implicitly {@link file.UploadFileRequest.verify|verify} messages.
         * @param message UploadFileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IUploadFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadFileRequest message, length delimited. Does not implicitly {@link file.UploadFileRequest.verify|verify} messages.
         * @param message UploadFileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IUploadFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadFileRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadFileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.UploadFileRequest;

        /**
         * Decodes an UploadFileRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadFileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.UploadFileRequest;

        /**
         * Verifies an UploadFileRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadFileRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadFileRequest
         */
        public static fromObject(object: { [k: string]: any }): file.UploadFileRequest;

        /**
         * Creates a plain object from an UploadFileRequest message. Also converts values to other types if specified.
         * @param message UploadFileRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.UploadFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadFileRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadFileRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UploadFileResponse. */
    interface IUploadFileResponse {

        /** UploadFileResponse path */
        path?: (string|null);
    }

    /** Represents an UploadFileResponse. */
    class UploadFileResponse implements IUploadFileResponse {

        /**
         * Constructs a new UploadFileResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IUploadFileResponse);

        /** UploadFileResponse path. */
        public path: string;

        /**
         * Creates a new UploadFileResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadFileResponse instance
         */
        public static create(properties?: file.IUploadFileResponse): file.UploadFileResponse;

        /**
         * Encodes the specified UploadFileResponse message. Does not implicitly {@link file.UploadFileResponse.verify|verify} messages.
         * @param message UploadFileResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IUploadFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadFileResponse message, length delimited. Does not implicitly {@link file.UploadFileResponse.verify|verify} messages.
         * @param message UploadFileResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IUploadFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadFileResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadFileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.UploadFileResponse;

        /**
         * Decodes an UploadFileResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadFileResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.UploadFileResponse;

        /**
         * Verifies an UploadFileResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadFileResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadFileResponse
         */
        public static fromObject(object: { [k: string]: any }): file.UploadFileResponse;

        /**
         * Creates a plain object from an UploadFileResponse message. Also converts values to other types if specified.
         * @param message UploadFileResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.UploadFileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadFileResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UploadFileResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FilePath. */
    interface IFilePath {

        /** FilePath filename */
        filename?: (string|null);

        /** FilePath path */
        path?: (string|null);
    }

    /** Represents a FilePath. */
    class FilePath implements IFilePath {

        /**
         * Constructs a new FilePath.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IFilePath);

        /** FilePath filename. */
        public filename: string;

        /** FilePath path. */
        public path: string;

        /**
         * Creates a new FilePath instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FilePath instance
         */
        public static create(properties?: file.IFilePath): file.FilePath;

        /**
         * Encodes the specified FilePath message. Does not implicitly {@link file.FilePath.verify|verify} messages.
         * @param message FilePath message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IFilePath, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FilePath message, length delimited. Does not implicitly {@link file.FilePath.verify|verify} messages.
         * @param message FilePath message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IFilePath, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FilePath message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FilePath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.FilePath;

        /**
         * Decodes a FilePath message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FilePath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.FilePath;

        /**
         * Verifies a FilePath message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FilePath message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FilePath
         */
        public static fromObject(object: { [k: string]: any }): file.FilePath;

        /**
         * Creates a plain object from a FilePath message. Also converts values to other types if specified.
         * @param message FilePath
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.FilePath, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FilePath to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FilePath
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetFileListRequest. */
    interface IGetFileListRequest {

        /** GetFileListRequest group */
        group?: (string|null);
    }

    /** Represents a GetFileListRequest. */
    class GetFileListRequest implements IGetFileListRequest {

        /**
         * Constructs a new GetFileListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IGetFileListRequest);

        /** GetFileListRequest group. */
        public group: string;

        /**
         * Creates a new GetFileListRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetFileListRequest instance
         */
        public static create(properties?: file.IGetFileListRequest): file.GetFileListRequest;

        /**
         * Encodes the specified GetFileListRequest message. Does not implicitly {@link file.GetFileListRequest.verify|verify} messages.
         * @param message GetFileListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IGetFileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetFileListRequest message, length delimited. Does not implicitly {@link file.GetFileListRequest.verify|verify} messages.
         * @param message GetFileListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IGetFileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetFileListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetFileListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.GetFileListRequest;

        /**
         * Decodes a GetFileListRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetFileListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.GetFileListRequest;

        /**
         * Verifies a GetFileListRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetFileListRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetFileListRequest
         */
        public static fromObject(object: { [k: string]: any }): file.GetFileListRequest;

        /**
         * Creates a plain object from a GetFileListRequest message. Also converts values to other types if specified.
         * @param message GetFileListRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.GetFileListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetFileListRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetFileListRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetFileListResponse. */
    interface IGetFileListResponse {

        /** GetFileListResponse list */
        list?: (file.IFilePath[]|null);
    }

    /** Represents a GetFileListResponse. */
    class GetFileListResponse implements IGetFileListResponse {

        /**
         * Constructs a new GetFileListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IGetFileListResponse);

        /** GetFileListResponse list. */
        public list: file.IFilePath[];

        /**
         * Creates a new GetFileListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetFileListResponse instance
         */
        public static create(properties?: file.IGetFileListResponse): file.GetFileListResponse;

        /**
         * Encodes the specified GetFileListResponse message. Does not implicitly {@link file.GetFileListResponse.verify|verify} messages.
         * @param message GetFileListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.IGetFileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetFileListResponse message, length delimited. Does not implicitly {@link file.GetFileListResponse.verify|verify} messages.
         * @param message GetFileListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: file.IGetFileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetFileListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetFileListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.GetFileListResponse;

        /**
         * Decodes a GetFileListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetFileListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): file.GetFileListResponse;

        /**
         * Verifies a GetFileListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetFileListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetFileListResponse
         */
        public static fromObject(object: { [k: string]: any }): file.GetFileListResponse;

        /**
         * Creates a plain object from a GetFileListResponse message. Also converts values to other types if specified.
         * @param message GetFileListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: file.GetFileListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetFileListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetFileListResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Represents a FileService */
    class FileService extends $protobuf.rpc.Service {

        /**
         * Constructs a new FileService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new FileService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): FileService;

        /**
         * Calls UploadFile.
         * @param request UploadFileRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and UploadFileResponse
         */
        public uploadFile(request: file.IUploadFileRequest, callback: file.FileService.UploadFileCallback): void;

        /**
         * Calls UploadFile.
         * @param request UploadFileRequest message or plain object
         * @returns Promise
         */
        public uploadFile(request: file.IUploadFileRequest): Promise<file.UploadFileResponse>;

        /**
         * Calls GetFileList.
         * @param request GetFileListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetFileListResponse
         */
        public getFileList(request: file.IGetFileListRequest, callback: file.FileService.GetFileListCallback): void;

        /**
         * Calls GetFileList.
         * @param request GetFileListRequest message or plain object
         * @returns Promise
         */
        public getFileList(request: file.IGetFileListRequest): Promise<file.GetFileListResponse>;
    }

    namespace FileService {

        /**
         * Callback as used by {@link file.FileService#uploadFile}.
         * @param error Error, if any
         * @param [response] UploadFileResponse
         */
        type UploadFileCallback = (error: (Error|null), response?: file.UploadFileResponse) => void;

        /**
         * Callback as used by {@link file.FileService#getFileList}.
         * @param error Error, if any
         * @param [response] GetFileListResponse
         */
        type GetFileListCallback = (error: (Error|null), response?: file.GetFileListResponse) => void;
    }
}

/** Namespace role. */
export namespace role {

    /** Role enum. */
    enum Role {
        USER = 0,
        ADMIN = 1,
        BLACK = 9,
        SAAS_ADMIN = 11,
        SAAS_AUTHORIZER = 12,
        APP_ADMIN = 21,
        APP_AUTHORIZER = 22
    }

    /** Properties of a GetRoleRequest. */
    interface IGetRoleRequest {

        /** GetRoleRequest auth */
        auth?: (auth.IAuthorization|null);

        /** GetRoleRequest app */
        app?: (app.IAppIndex|null);

        /** GetRoleRequest userId */
        userId?: (number|null);
    }

    /** Represents a GetRoleRequest. */
    class GetRoleRequest implements IGetRoleRequest {

        /**
         * Constructs a new GetRoleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: role.IGetRoleRequest);

        /** GetRoleRequest auth. */
        public auth?: (auth.IAuthorization|null);

        /** GetRoleRequest app. */
        public app?: (app.IAppIndex|null);

        /** GetRoleRequest userId. */
        public userId: number;

        /**
         * Creates a new GetRoleRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoleRequest instance
         */
        public static create(properties?: role.IGetRoleRequest): role.GetRoleRequest;

        /**
         * Encodes the specified GetRoleRequest message. Does not implicitly {@link role.GetRoleRequest.verify|verify} messages.
         * @param message GetRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: role.IGetRoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoleRequest message, length delimited. Does not implicitly {@link role.GetRoleRequest.verify|verify} messages.
         * @param message GetRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: role.IGetRoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): role.GetRoleRequest;

        /**
         * Decodes a GetRoleRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): role.GetRoleRequest;

        /**
         * Verifies a GetRoleRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRoleRequest
         */
        public static fromObject(object: { [k: string]: any }): role.GetRoleRequest;

        /**
         * Creates a plain object from a GetRoleRequest message. Also converts values to other types if specified.
         * @param message GetRoleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: role.GetRoleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetRoleRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetRoleResponse. */
    interface IGetRoleResponse {

        /** GetRoleResponse roles */
        roles?: (role.Role[]|null);
    }

    /** Represents a GetRoleResponse. */
    class GetRoleResponse implements IGetRoleResponse {

        /**
         * Constructs a new GetRoleResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: role.IGetRoleResponse);

        /** GetRoleResponse roles. */
        public roles: role.Role[];

        /**
         * Creates a new GetRoleResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoleResponse instance
         */
        public static create(properties?: role.IGetRoleResponse): role.GetRoleResponse;

        /**
         * Encodes the specified GetRoleResponse message. Does not implicitly {@link role.GetRoleResponse.verify|verify} messages.
         * @param message GetRoleResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: role.IGetRoleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRoleResponse message, length delimited. Does not implicitly {@link role.GetRoleResponse.verify|verify} messages.
         * @param message GetRoleResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: role.IGetRoleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoleResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): role.GetRoleResponse;

        /**
         * Decodes a GetRoleResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): role.GetRoleResponse;

        /**
         * Verifies a GetRoleResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRoleResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRoleResponse
         */
        public static fromObject(object: { [k: string]: any }): role.GetRoleResponse;

        /**
         * Creates a plain object from a GetRoleResponse message. Also converts values to other types if specified.
         * @param message GetRoleResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: role.GetRoleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRoleResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetRoleResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddRoleRequest. */
    interface IAddRoleRequest {

        /** AddRoleRequest auth */
        auth?: (auth.IAuthorization|null);

        /** AddRoleRequest app */
        app?: (app.IAppIndex|null);

        /** AddRoleRequest userId */
        userId?: (number|null);

        /** AddRoleRequest role */
        role?: (role.Role|null);
    }

    /** Represents an AddRoleRequest. */
    class AddRoleRequest implements IAddRoleRequest {

        /**
         * Constructs a new AddRoleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: role.IAddRoleRequest);

        /** AddRoleRequest auth. */
        public auth?: (auth.IAuthorization|null);

        /** AddRoleRequest app. */
        public app?: (app.IAppIndex|null);

        /** AddRoleRequest userId. */
        public userId: number;

        /** AddRoleRequest role. */
        public role: role.Role;

        /**
         * Creates a new AddRoleRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddRoleRequest instance
         */
        public static create(properties?: role.IAddRoleRequest): role.AddRoleRequest;

        /**
         * Encodes the specified AddRoleRequest message. Does not implicitly {@link role.AddRoleRequest.verify|verify} messages.
         * @param message AddRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: role.IAddRoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddRoleRequest message, length delimited. Does not implicitly {@link role.AddRoleRequest.verify|verify} messages.
         * @param message AddRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: role.IAddRoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddRoleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): role.AddRoleRequest;

        /**
         * Decodes an AddRoleRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): role.AddRoleRequest;

        /**
         * Verifies an AddRoleRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddRoleRequest
         */
        public static fromObject(object: { [k: string]: any }): role.AddRoleRequest;

        /**
         * Creates a plain object from an AddRoleRequest message. Also converts values to other types if specified.
         * @param message AddRoleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: role.AddRoleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddRoleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddRoleRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DelRoleRequest. */
    interface IDelRoleRequest {

        /** DelRoleRequest auth */
        auth?: (auth.IAuthorization|null);

        /** DelRoleRequest app */
        app?: (app.IAppIndex|null);

        /** DelRoleRequest userId */
        userId?: (number|null);

        /** DelRoleRequest role */
        role?: (role.Role|null);
    }

    /** Represents a DelRoleRequest. */
    class DelRoleRequest implements IDelRoleRequest {

        /**
         * Constructs a new DelRoleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: role.IDelRoleRequest);

        /** DelRoleRequest auth. */
        public auth?: (auth.IAuthorization|null);

        /** DelRoleRequest app. */
        public app?: (app.IAppIndex|null);

        /** DelRoleRequest userId. */
        public userId: number;

        /** DelRoleRequest role. */
        public role: role.Role;

        /**
         * Creates a new DelRoleRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelRoleRequest instance
         */
        public static create(properties?: role.IDelRoleRequest): role.DelRoleRequest;

        /**
         * Encodes the specified DelRoleRequest message. Does not implicitly {@link role.DelRoleRequest.verify|verify} messages.
         * @param message DelRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: role.IDelRoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelRoleRequest message, length delimited. Does not implicitly {@link role.DelRoleRequest.verify|verify} messages.
         * @param message DelRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: role.IDelRoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelRoleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): role.DelRoleRequest;

        /**
         * Decodes a DelRoleRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): role.DelRoleRequest;

        /**
         * Verifies a DelRoleRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DelRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DelRoleRequest
         */
        public static fromObject(object: { [k: string]: any }): role.DelRoleRequest;

        /**
         * Creates a plain object from a DelRoleRequest message. Also converts values to other types if specified.
         * @param message DelRoleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: role.DelRoleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelRoleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DelRoleRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Represents a RoleService */
    class RoleService extends $protobuf.rpc.Service {

        /**
         * Constructs a new RoleService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new RoleService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): RoleService;

        /**
         * Calls GetRole.
         * @param request GetRoleRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetRoleResponse
         */
        public getRole(request: role.IGetRoleRequest, callback: role.RoleService.GetRoleCallback): void;

        /**
         * Calls GetRole.
         * @param request GetRoleRequest message or plain object
         * @returns Promise
         */
        public getRole(request: role.IGetRoleRequest): Promise<role.GetRoleResponse>;

        /**
         * Calls AddRole.
         * @param request AddRoleRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public addRole(request: role.IAddRoleRequest, callback: role.RoleService.AddRoleCallback): void;

        /**
         * Calls AddRole.
         * @param request AddRoleRequest message or plain object
         * @returns Promise
         */
        public addRole(request: role.IAddRoleRequest): Promise<common.Empty>;

        /**
         * Calls DelRole.
         * @param request DelRoleRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public delRole(request: role.IDelRoleRequest, callback: role.RoleService.DelRoleCallback): void;

        /**
         * Calls DelRole.
         * @param request DelRoleRequest message or plain object
         * @returns Promise
         */
        public delRole(request: role.IDelRoleRequest): Promise<common.Empty>;
    }

    namespace RoleService {

        /**
         * Callback as used by {@link role.RoleService#getRole}.
         * @param error Error, if any
         * @param [response] GetRoleResponse
         */
        type GetRoleCallback = (error: (Error|null), response?: role.GetRoleResponse) => void;

        /**
         * Callback as used by {@link role.RoleService#addRole}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type AddRoleCallback = (error: (Error|null), response?: common.Empty) => void;

        /**
         * Callback as used by {@link role.RoleService#delRole}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type DelRoleCallback = (error: (Error|null), response?: common.Empty) => void;
    }
}

/** Namespace saas. */
export namespace saas {

    /** Properties of a CreateSaasRequest. */
    interface ICreateSaasRequest {

        /** CreateSaasRequest auth */
        auth?: (auth.IAuthorization|null);

        /** CreateSaasRequest name */
        name?: (string|null);
    }

    /** Represents a CreateSaasRequest. */
    class CreateSaasRequest implements ICreateSaasRequest {

        /**
         * Constructs a new CreateSaasRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: saas.ICreateSaasRequest);

        /** CreateSaasRequest auth. */
        public auth?: (auth.IAuthorization|null);

        /** CreateSaasRequest name. */
        public name: string;

        /**
         * Creates a new CreateSaasRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateSaasRequest instance
         */
        public static create(properties?: saas.ICreateSaasRequest): saas.CreateSaasRequest;

        /**
         * Encodes the specified CreateSaasRequest message. Does not implicitly {@link saas.CreateSaasRequest.verify|verify} messages.
         * @param message CreateSaasRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: saas.ICreateSaasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateSaasRequest message, length delimited. Does not implicitly {@link saas.CreateSaasRequest.verify|verify} messages.
         * @param message CreateSaasRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: saas.ICreateSaasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateSaasRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateSaasRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): saas.CreateSaasRequest;

        /**
         * Decodes a CreateSaasRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateSaasRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): saas.CreateSaasRequest;

        /**
         * Verifies a CreateSaasRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateSaasRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateSaasRequest
         */
        public static fromObject(object: { [k: string]: any }): saas.CreateSaasRequest;

        /**
         * Creates a plain object from a CreateSaasRequest message. Also converts values to other types if specified.
         * @param message CreateSaasRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: saas.CreateSaasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateSaasRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateSaasRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateSaasResponse. */
    interface ICreateSaasResponse {

        /** CreateSaasResponse saasId */
        saasId?: (number|null);
    }

    /** Represents a CreateSaasResponse. */
    class CreateSaasResponse implements ICreateSaasResponse {

        /**
         * Constructs a new CreateSaasResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: saas.ICreateSaasResponse);

        /** CreateSaasResponse saasId. */
        public saasId: number;

        /**
         * Creates a new CreateSaasResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateSaasResponse instance
         */
        public static create(properties?: saas.ICreateSaasResponse): saas.CreateSaasResponse;

        /**
         * Encodes the specified CreateSaasResponse message. Does not implicitly {@link saas.CreateSaasResponse.verify|verify} messages.
         * @param message CreateSaasResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: saas.ICreateSaasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateSaasResponse message, length delimited. Does not implicitly {@link saas.CreateSaasResponse.verify|verify} messages.
         * @param message CreateSaasResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: saas.ICreateSaasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateSaasResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateSaasResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): saas.CreateSaasResponse;

        /**
         * Decodes a CreateSaasResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateSaasResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): saas.CreateSaasResponse;

        /**
         * Verifies a CreateSaasResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateSaasResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateSaasResponse
         */
        public static fromObject(object: { [k: string]: any }): saas.CreateSaasResponse;

        /**
         * Creates a plain object from a CreateSaasResponse message. Also converts values to other types if specified.
         * @param message CreateSaasResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: saas.CreateSaasResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateSaasResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateSaasResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Represents a SaasService */
    class SaasService extends $protobuf.rpc.Service {

        /**
         * Constructs a new SaasService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new SaasService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SaasService;

        /**
         * Calls CreateSaas.
         * @param request CreateSaasRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateSaasResponse
         */
        public createSaas(request: saas.ICreateSaasRequest, callback: saas.SaasService.CreateSaasCallback): void;

        /**
         * Calls CreateSaas.
         * @param request CreateSaasRequest message or plain object
         * @returns Promise
         */
        public createSaas(request: saas.ICreateSaasRequest): Promise<saas.CreateSaasResponse>;
    }

    namespace SaasService {

        /**
         * Callback as used by {@link saas.SaasService#createSaas}.
         * @param error Error, if any
         * @param [response] CreateSaasResponse
         */
        type CreateSaasCallback = (error: (Error|null), response?: saas.CreateSaasResponse) => void;
    }
}

/** Namespace three. */
export namespace three {

    /** Properties of a GetWeichatMpRequest. */
    interface IGetWeichatMpRequest {

        /** GetWeichatMpRequest url */
        url?: (string|null);
    }

    /** Represents a GetWeichatMpRequest. */
    class GetWeichatMpRequest implements IGetWeichatMpRequest {

        /**
         * Constructs a new GetWeichatMpRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: three.IGetWeichatMpRequest);

        /** GetWeichatMpRequest url. */
        public url: string;

        /**
         * Creates a new GetWeichatMpRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetWeichatMpRequest instance
         */
        public static create(properties?: three.IGetWeichatMpRequest): three.GetWeichatMpRequest;

        /**
         * Encodes the specified GetWeichatMpRequest message. Does not implicitly {@link three.GetWeichatMpRequest.verify|verify} messages.
         * @param message GetWeichatMpRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: three.IGetWeichatMpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetWeichatMpRequest message, length delimited. Does not implicitly {@link three.GetWeichatMpRequest.verify|verify} messages.
         * @param message GetWeichatMpRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: three.IGetWeichatMpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetWeichatMpRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetWeichatMpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): three.GetWeichatMpRequest;

        /**
         * Decodes a GetWeichatMpRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetWeichatMpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): three.GetWeichatMpRequest;

        /**
         * Verifies a GetWeichatMpRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetWeichatMpRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetWeichatMpRequest
         */
        public static fromObject(object: { [k: string]: any }): three.GetWeichatMpRequest;

        /**
         * Creates a plain object from a GetWeichatMpRequest message. Also converts values to other types if specified.
         * @param message GetWeichatMpRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: three.GetWeichatMpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetWeichatMpRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetWeichatMpRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetWeichatMpResponse. */
    interface IGetWeichatMpResponse {

        /** GetWeichatMpResponse appId */
        appId?: (string|null);

        /** GetWeichatMpResponse timestamp */
        timestamp?: (string|null);

        /** GetWeichatMpResponse nonceStr */
        nonceStr?: (string|null);

        /** GetWeichatMpResponse signature */
        signature?: (string|null);
    }

    /** Represents a GetWeichatMpResponse. */
    class GetWeichatMpResponse implements IGetWeichatMpResponse {

        /**
         * Constructs a new GetWeichatMpResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: three.IGetWeichatMpResponse);

        /** GetWeichatMpResponse appId. */
        public appId: string;

        /** GetWeichatMpResponse timestamp. */
        public timestamp: string;

        /** GetWeichatMpResponse nonceStr. */
        public nonceStr: string;

        /** GetWeichatMpResponse signature. */
        public signature: string;

        /**
         * Creates a new GetWeichatMpResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetWeichatMpResponse instance
         */
        public static create(properties?: three.IGetWeichatMpResponse): three.GetWeichatMpResponse;

        /**
         * Encodes the specified GetWeichatMpResponse message. Does not implicitly {@link three.GetWeichatMpResponse.verify|verify} messages.
         * @param message GetWeichatMpResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: three.IGetWeichatMpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetWeichatMpResponse message, length delimited. Does not implicitly {@link three.GetWeichatMpResponse.verify|verify} messages.
         * @param message GetWeichatMpResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: three.IGetWeichatMpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetWeichatMpResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetWeichatMpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): three.GetWeichatMpResponse;

        /**
         * Decodes a GetWeichatMpResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetWeichatMpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): three.GetWeichatMpResponse;

        /**
         * Verifies a GetWeichatMpResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetWeichatMpResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetWeichatMpResponse
         */
        public static fromObject(object: { [k: string]: any }): three.GetWeichatMpResponse;

        /**
         * Creates a plain object from a GetWeichatMpResponse message. Also converts values to other types if specified.
         * @param message GetWeichatMpResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: three.GetWeichatMpResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetWeichatMpResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetWeichatMpResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Represents a ThreeService */
    class ThreeService extends $protobuf.rpc.Service {

        /**
         * Constructs a new ThreeService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new ThreeService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ThreeService;

        /**
         * Calls GetWeichatMp.
         * @param request GetWeichatMpRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetWeichatMpResponse
         */
        public getWeichatMp(request: three.IGetWeichatMpRequest, callback: three.ThreeService.GetWeichatMpCallback): void;

        /**
         * Calls GetWeichatMp.
         * @param request GetWeichatMpRequest message or plain object
         * @returns Promise
         */
        public getWeichatMp(request: three.IGetWeichatMpRequest): Promise<three.GetWeichatMpResponse>;
    }

    namespace ThreeService {

        /**
         * Callback as used by {@link three.ThreeService#getWeichatMp}.
         * @param error Error, if any
         * @param [response] GetWeichatMpResponse
         */
        type GetWeichatMpCallback = (error: (Error|null), response?: three.GetWeichatMpResponse) => void;
    }
}

/** Namespace user. */
export namespace user {

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest timestamp */
        timestamp?: (number|Long|null);

        /** LoginRequest username */
        username?: (string|null);

        /** LoginRequest passwd */
        passwd?: (string|null);

        /** LoginRequest deviceId */
        deviceId?: (string|null);

        /** LoginRequest deviceName */
        deviceName?: (string|null);

        /** LoginRequest expire */
        expire?: (number|Long|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginRequest);

        /** LoginRequest timestamp. */
        public timestamp: (number|Long);

        /** LoginRequest username. */
        public username: string;

        /** LoginRequest passwd. */
        public passwd: string;

        /** LoginRequest deviceId. */
        public deviceId: string;

        /** LoginRequest deviceName. */
        public deviceName: string;

        /** LoginRequest expire. */
        public expire: (number|Long);

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: user.ILoginRequest): user.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link user.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): user.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ThreeLoginRequest. */
    interface IThreeLoginRequest {

        /** ThreeLoginRequest platform */
        platform?: (string|null);

        /** ThreeLoginRequest code */
        code?: (string|null);

        /** ThreeLoginRequest deviceId */
        deviceId?: (string|null);

        /** ThreeLoginRequest deviceName */
        deviceName?: (string|null);

        /** ThreeLoginRequest expire */
        expire?: (number|Long|null);
    }

    /** Represents a ThreeLoginRequest. */
    class ThreeLoginRequest implements IThreeLoginRequest {

        /**
         * Constructs a new ThreeLoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IThreeLoginRequest);

        /** ThreeLoginRequest platform. */
        public platform: string;

        /** ThreeLoginRequest code. */
        public code: string;

        /** ThreeLoginRequest deviceId. */
        public deviceId: string;

        /** ThreeLoginRequest deviceName. */
        public deviceName: string;

        /** ThreeLoginRequest expire. */
        public expire: (number|Long);

        /**
         * Creates a new ThreeLoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ThreeLoginRequest instance
         */
        public static create(properties?: user.IThreeLoginRequest): user.ThreeLoginRequest;

        /**
         * Encodes the specified ThreeLoginRequest message. Does not implicitly {@link user.ThreeLoginRequest.verify|verify} messages.
         * @param message ThreeLoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IThreeLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ThreeLoginRequest message, length delimited. Does not implicitly {@link user.ThreeLoginRequest.verify|verify} messages.
         * @param message ThreeLoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IThreeLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThreeLoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ThreeLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.ThreeLoginRequest;

        /**
         * Decodes a ThreeLoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ThreeLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.ThreeLoginRequest;

        /**
         * Verifies a ThreeLoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ThreeLoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ThreeLoginRequest
         */
        public static fromObject(object: { [k: string]: any }): user.ThreeLoginRequest;

        /**
         * Creates a plain object from a ThreeLoginRequest message. Also converts values to other types if specified.
         * @param message ThreeLoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.ThreeLoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ThreeLoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ThreeLoginRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse auth */
        auth?: (auth.IAuthorization|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ILoginResponse);

        /** LoginResponse auth. */
        public auth?: (auth.IAuthorization|null);

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: user.ILoginResponse): user.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link user.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link user.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): user.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetUserInfoRequest. */
    interface IGetUserInfoRequest {

        /** GetUserInfoRequest auth */
        auth?: (auth.IAuthorization|null);
    }

    /** Represents a GetUserInfoRequest. */
    class GetUserInfoRequest implements IGetUserInfoRequest {

        /**
         * Constructs a new GetUserInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IGetUserInfoRequest);

        /** GetUserInfoRequest auth. */
        public auth?: (auth.IAuthorization|null);

        /**
         * Creates a new GetUserInfoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserInfoRequest instance
         */
        public static create(properties?: user.IGetUserInfoRequest): user.GetUserInfoRequest;

        /**
         * Encodes the specified GetUserInfoRequest message. Does not implicitly {@link user.GetUserInfoRequest.verify|verify} messages.
         * @param message GetUserInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IGetUserInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserInfoRequest message, length delimited. Does not implicitly {@link user.GetUserInfoRequest.verify|verify} messages.
         * @param message GetUserInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IGetUserInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserInfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.GetUserInfoRequest;

        /**
         * Decodes a GetUserInfoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.GetUserInfoRequest;

        /**
         * Verifies a GetUserInfoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserInfoRequest
         */
        public static fromObject(object: { [k: string]: any }): user.GetUserInfoRequest;

        /**
         * Creates a plain object from a GetUserInfoRequest message. Also converts values to other types if specified.
         * @param message GetUserInfoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.GetUserInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserInfoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetUserInfoRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Sex enum. */
    enum Sex {
        UNKONWN = 0,
        MAN = 1,
        WOMAN = 2
    }

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (number|null);

        /** User username */
        username?: (string|null);

        /** User nickname */
        nickname?: (string|null);

        /** User avatar */
        avatar?: (string|null);

        /** User sex */
        sex?: (user.Sex|null);

        /** User bio */
        bio?: (string|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUser);

        /** User id. */
        public id: number;

        /** User username. */
        public username: string;

        /** User nickname. */
        public nickname: string;

        /** User avatar. */
        public avatar: string;

        /** User sex. */
        public sex: user.Sex;

        /** User bio. */
        public bio: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: user.IUser): user.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link user.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link user.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): user.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SetUserInfoRequest. */
    interface ISetUserInfoRequest {

        /** SetUserInfoRequest auth */
        auth?: (auth.IAuthorization|null);

        /** SetUserInfoRequest nickname */
        nickname?: (string|null);

        /** SetUserInfoRequest avatar */
        avatar?: (string|null);

        /** SetUserInfoRequest sex */
        sex?: (user.Sex|null);

        /** SetUserInfoRequest bio */
        bio?: (string|null);
    }

    /** Represents a SetUserInfoRequest. */
    class SetUserInfoRequest implements ISetUserInfoRequest {

        /**
         * Constructs a new SetUserInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.ISetUserInfoRequest);

        /** SetUserInfoRequest auth. */
        public auth?: (auth.IAuthorization|null);

        /** SetUserInfoRequest nickname. */
        public nickname?: (string|null);

        /** SetUserInfoRequest avatar. */
        public avatar?: (string|null);

        /** SetUserInfoRequest sex. */
        public sex?: (user.Sex|null);

        /** SetUserInfoRequest bio. */
        public bio?: (string|null);

        /** SetUserInfoRequest _nickname. */
        public _nickname?: "nickname";

        /** SetUserInfoRequest _avatar. */
        public _avatar?: "avatar";

        /** SetUserInfoRequest _sex. */
        public _sex?: "sex";

        /** SetUserInfoRequest _bio. */
        public _bio?: "bio";

        /**
         * Creates a new SetUserInfoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetUserInfoRequest instance
         */
        public static create(properties?: user.ISetUserInfoRequest): user.SetUserInfoRequest;

        /**
         * Encodes the specified SetUserInfoRequest message. Does not implicitly {@link user.SetUserInfoRequest.verify|verify} messages.
         * @param message SetUserInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.ISetUserInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetUserInfoRequest message, length delimited. Does not implicitly {@link user.SetUserInfoRequest.verify|verify} messages.
         * @param message SetUserInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.ISetUserInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetUserInfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetUserInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.SetUserInfoRequest;

        /**
         * Decodes a SetUserInfoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetUserInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.SetUserInfoRequest;

        /**
         * Verifies a SetUserInfoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetUserInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetUserInfoRequest
         */
        public static fromObject(object: { [k: string]: any }): user.SetUserInfoRequest;

        /**
         * Creates a plain object from a SetUserInfoRequest message. Also converts values to other types if specified.
         * @param message SetUserInfoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.SetUserInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetUserInfoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SetUserInfoRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChangePasswdRequest. */
    interface IChangePasswdRequest {

        /** ChangePasswdRequest auth */
        auth?: (auth.IAuthorization|null);

        /** ChangePasswdRequest passwd */
        passwd?: (string|null);
    }

    /** Represents a ChangePasswdRequest. */
    class ChangePasswdRequest implements IChangePasswdRequest {

        /**
         * Constructs a new ChangePasswdRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IChangePasswdRequest);

        /** ChangePasswdRequest auth. */
        public auth?: (auth.IAuthorization|null);

        /** ChangePasswdRequest passwd. */
        public passwd: string;

        /**
         * Creates a new ChangePasswdRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangePasswdRequest instance
         */
        public static create(properties?: user.IChangePasswdRequest): user.ChangePasswdRequest;

        /**
         * Encodes the specified ChangePasswdRequest message. Does not implicitly {@link user.ChangePasswdRequest.verify|verify} messages.
         * @param message ChangePasswdRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IChangePasswdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangePasswdRequest message, length delimited. Does not implicitly {@link user.ChangePasswdRequest.verify|verify} messages.
         * @param message ChangePasswdRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IChangePasswdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangePasswdRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangePasswdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.ChangePasswdRequest;

        /**
         * Decodes a ChangePasswdRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangePasswdRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.ChangePasswdRequest;

        /**
         * Verifies a ChangePasswdRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangePasswdRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangePasswdRequest
         */
        public static fromObject(object: { [k: string]: any }): user.ChangePasswdRequest;

        /**
         * Creates a plain object from a ChangePasswdRequest message. Also converts values to other types if specified.
         * @param message ChangePasswdRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.ChangePasswdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangePasswdRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChangePasswdRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Represents a UserService */
    class UserService extends $protobuf.rpc.Service {

        /**
         * Constructs a new UserService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new UserService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): UserService;

        /**
         * Calls Login.
         * @param request LoginRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and LoginResponse
         */
        public login(request: user.ILoginRequest, callback: user.UserService.LoginCallback): void;

        /**
         * Calls Login.
         * @param request LoginRequest message or plain object
         * @returns Promise
         */
        public login(request: user.ILoginRequest): Promise<user.LoginResponse>;

        /**
         * Calls ThreeLogin.
         * @param request ThreeLoginRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and LoginResponse
         */
        public threeLogin(request: user.IThreeLoginRequest, callback: user.UserService.ThreeLoginCallback): void;

        /**
         * Calls ThreeLogin.
         * @param request ThreeLoginRequest message or plain object
         * @returns Promise
         */
        public threeLogin(request: user.IThreeLoginRequest): Promise<user.LoginResponse>;

        /**
         * Calls GetUserInfo.
         * @param request GetUserInfoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and User
         */
        public getUserInfo(request: user.IGetUserInfoRequest, callback: user.UserService.GetUserInfoCallback): void;

        /**
         * Calls GetUserInfo.
         * @param request GetUserInfoRequest message or plain object
         * @returns Promise
         */
        public getUserInfo(request: user.IGetUserInfoRequest): Promise<user.User>;

        /**
         * Calls SetUserInfo.
         * @param request SetUserInfoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public setUserInfo(request: user.ISetUserInfoRequest, callback: user.UserService.SetUserInfoCallback): void;

        /**
         * Calls SetUserInfo.
         * @param request SetUserInfoRequest message or plain object
         * @returns Promise
         */
        public setUserInfo(request: user.ISetUserInfoRequest): Promise<common.Empty>;

        /**
         * Calls ChangePasswd.
         * @param request ChangePasswdRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public changePasswd(request: user.IChangePasswdRequest, callback: user.UserService.ChangePasswdCallback): void;

        /**
         * Calls ChangePasswd.
         * @param request ChangePasswdRequest message or plain object
         * @returns Promise
         */
        public changePasswd(request: user.IChangePasswdRequest): Promise<common.Empty>;
    }

    namespace UserService {

        /**
         * Callback as used by {@link user.UserService#login}.
         * @param error Error, if any
         * @param [response] LoginResponse
         */
        type LoginCallback = (error: (Error|null), response?: user.LoginResponse) => void;

        /**
         * Callback as used by {@link user.UserService#threeLogin}.
         * @param error Error, if any
         * @param [response] LoginResponse
         */
        type ThreeLoginCallback = (error: (Error|null), response?: user.LoginResponse) => void;

        /**
         * Callback as used by {@link user.UserService#getUserInfo}.
         * @param error Error, if any
         * @param [response] User
         */
        type GetUserInfoCallback = (error: (Error|null), response?: user.User) => void;

        /**
         * Callback as used by {@link user.UserService#setUserInfo}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type SetUserInfoCallback = (error: (Error|null), response?: common.Empty) => void;

        /**
         * Callback as used by {@link user.UserService#changePasswd}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type ChangePasswdCallback = (error: (Error|null), response?: common.Empty) => void;
    }
}
