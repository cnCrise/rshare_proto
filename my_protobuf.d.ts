import * as $protobuf from "protobufjs";
import Long = require("long");
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

/** Namespace error_code. */
export namespace error_code {

    /** ErrorCode enum. */
    enum ErrorCode {
        SUCCESS = 0,
        INVALID_INPUT = 1001,
        NOT_SIGNUP = 2001,
        PASSWD_ERR = 2002,
        INVALID_AUTH = 2011,
        EXPIRED_AUTH = 2012,
        EXPIRED_AUTH_SN = 2013,
        PERMISSION_DENIED = 2021,
        DB_ERR = 7001,
        WX_ERR = 8001
    }
}

/** Namespace role. */
export namespace role {

    /** Role enum. */
    enum Role {
        USER = 0,
        ADMIN = 20,
        BLACK = 99
    }

    /** Properties of a GetRoleRequest. */
    interface IGetRoleRequest {

        /** GetRoleRequest auth */
        auth?: (auth.IAuthorization|null);

        /** GetRoleRequest uid */
        uid?: (number|null);
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

        /** GetRoleRequest uid. */
        public uid: number;

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

        /** AddRoleRequest uid */
        uid?: (number|null);

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

        /** AddRoleRequest uid. */
        public uid: number;

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

        /** DelRoleRequest uid */
        uid?: (number|null);

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

        /** DelRoleRequest uid. */
        public uid: number;

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

/** Namespace user. */
export namespace user {

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest timestamp */
        timestamp?: (number|Long|null);

        /** LoginRequest uname */
        uname?: (string|null);

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

        /** LoginRequest uname. */
        public uname: string;

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

    /** Properties of a WxLoginRequest. */
    interface IWxLoginRequest {

        /** WxLoginRequest code */
        code?: (string|null);

        /** WxLoginRequest deviceId */
        deviceId?: (string|null);

        /** WxLoginRequest deviceName */
        deviceName?: (string|null);

        /** WxLoginRequest expire */
        expire?: (number|Long|null);
    }

    /** Represents a WxLoginRequest. */
    class WxLoginRequest implements IWxLoginRequest {

        /**
         * Constructs a new WxLoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IWxLoginRequest);

        /** WxLoginRequest code. */
        public code: string;

        /** WxLoginRequest deviceId. */
        public deviceId: string;

        /** WxLoginRequest deviceName. */
        public deviceName: string;

        /** WxLoginRequest expire. */
        public expire: (number|Long);

        /**
         * Creates a new WxLoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WxLoginRequest instance
         */
        public static create(properties?: user.IWxLoginRequest): user.WxLoginRequest;

        /**
         * Encodes the specified WxLoginRequest message. Does not implicitly {@link user.WxLoginRequest.verify|verify} messages.
         * @param message WxLoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IWxLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WxLoginRequest message, length delimited. Does not implicitly {@link user.WxLoginRequest.verify|verify} messages.
         * @param message WxLoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IWxLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WxLoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WxLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.WxLoginRequest;

        /**
         * Decodes a WxLoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WxLoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.WxLoginRequest;

        /**
         * Verifies a WxLoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WxLoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WxLoginRequest
         */
        public static fromObject(object: { [k: string]: any }): user.WxLoginRequest;

        /**
         * Creates a plain object from a WxLoginRequest message. Also converts values to other types if specified.
         * @param message WxLoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.WxLoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WxLoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WxLoginRequest
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
         * Calls WxLogin.
         * @param request WxLoginRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and LoginResponse
         */
        public wxLogin(request: user.IWxLoginRequest, callback: user.UserService.WxLoginCallback): void;

        /**
         * Calls WxLogin.
         * @param request WxLoginRequest message or plain object
         * @returns Promise
         */
        public wxLogin(request: user.IWxLoginRequest): Promise<user.LoginResponse>;

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
         * Callback as used by {@link user.UserService#wxLogin}.
         * @param error Error, if any
         * @param [response] LoginResponse
         */
        type WxLoginCallback = (error: (Error|null), response?: user.LoginResponse) => void;

        /**
         * Callback as used by {@link user.UserService#changePasswd}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type ChangePasswdCallback = (error: (Error|null), response?: common.Empty) => void;
    }
}
